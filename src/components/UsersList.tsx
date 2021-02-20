import React, { FC } from 'react';
import { User } from '../interfaces';

interface UsersListProps {
    users: User[];
}

const UsersList: FC<UsersListProps> = ({ users }) => {

    return (
        <ul className="list">
            {users.map((user: User) => {
                return (
                    <li key={user.id} className="list__item">
                        {user.name}
                        <span>@{user.username}</span>
                    </li>
                )
            })}
        </ul>
    )
}

export default UsersList;