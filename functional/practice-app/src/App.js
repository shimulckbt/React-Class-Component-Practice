import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';
import { useState } from "react";

import './App.css';

function App() {
  const [usersList, seUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    seUsersList((prevUsersList) => {
      return [...prevUsersList, { id: Math.random().toString(), name: uName, age: uAge }];
    });
  }
  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
