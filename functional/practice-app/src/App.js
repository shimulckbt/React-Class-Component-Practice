import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';
import './App.css';

function App() {

  return (
    <div className="App">
      <AddUser />
      <UsersList users={[usersList]} />
    </div>
  );
}

export default App;
