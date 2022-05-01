// import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

function App() {
  return (
    <div className="App">
      <h1>Hi, I am a React App</h1>
      <Person name="shimul" age="27">I like to wathc: Movies</Person>
      <Person name="tutul" age="22" />
      <Person name="palash" age="31" />
    </div>
  );
}

export default App;
