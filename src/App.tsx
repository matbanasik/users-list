import React, { useEffect, useState, useCallback, FC } from 'react';
import SearchInput from './components/SearchInput';
import UsersList from './components/UsersList';
import { User } from './interfaces';

const App: FC = () => {
    const [users, setUsers] = useState<User[] | []>([]);
    const [searchValue, setSearchValue] = useState<string>('');
    const [filteredUsers, setFilteredUsers] = useState<User[] | []>([]);

    const fetchUsers = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const users = await response.json();
            setUsers(users);
            setFilteredUsers(users)
        } catch (error) {
            setUsers([]);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const value = e?.currentTarget?.value;
        setSearchValue(value);
    }

    const handleUsersFilter = useCallback(() => {
        const filteredUsers = users.filter((user) => user.name.toUpperCase().includes(searchValue.toUpperCase()));
        setFilteredUsers(filteredUsers);
    }, [searchValue, users])

    useEffect(() => {
        handleUsersFilter();
    }, [searchValue, handleUsersFilter])

    return (
        <div className="App">
            <SearchInput value={searchValue} onChange={handleInputChange} />
            <UsersList users={filteredUsers} />
        </div>
    );
}

export default App;
