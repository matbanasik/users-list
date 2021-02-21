import React from 'react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { render, waitFor, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';
import users from './mocks/users.json';

const server = setupServer(
    rest.get('https://jsonplaceholder.typicode.com/users', (req: any, res: any, ctx: any) => {
        return res(ctx.json(users))
    })
)

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('It fetches users and display them in a list', async () => {
    render(<App />);

    const user = await waitFor(() => screen.getByText('Leanne Graham'));

    expect(user).toBeInTheDocument();
});

test('It allows to fiter users by name', async () => {
    render(<App />);

    await waitFor(() => {
        expect(screen.getByText('Leanne Graham')).toBeInTheDocument();
        expect(screen.getByText('Ervin Howell')).toBeInTheDocument();
    })

    const input = screen.getByPlaceholderText(/search by user name.../i);
    fireEvent.change(input, { target: { value: 'leanne' } });

    await waitFor(() => {
        expect(screen.getByText('Leanne Graham')).toBeInTheDocument();
        expect(screen.queryByText('Ervin Howell')).not.toBeInTheDocument();
    })
    
});
