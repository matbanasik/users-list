import React, { useEffect, useState, FC } from 'react';
import SearchInput from './components/SearchInput';
import UsersList from './components/UsersList';
import { User } from './interfaces';

const App: FC = () => {
  const [users, setUsers] = useState<User[] | []>([]);

  const fetchUsers = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const users = await response.json();
      setUsers(users);
    } catch (error) {
      console.log(error);
      setUsers([]);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="App">
      <SearchInput />
      <UsersList users={users} />
    </div>
  );
}

export default App;
