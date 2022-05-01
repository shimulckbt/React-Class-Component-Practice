// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Person from './Person/Person';

function App() {
  const [personState, setPersonState] = useState({
    persons: [
      { name: 'Shimul', age: 27 },
      { name: 'Tutul', age: 22 },
      { name: 'Palash', age: 31 },
    ]
  });

  const switchNameHandler = () => {
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
    setPersonState({
      persons: [
        { name: 'Shimul Chakraborty', age: 28 },
        { name: 'Tutul', age: 29 },
        { name: 'Palash', age: 27 }
      ]
    });
  };

  return (
    <div className="App">
      <h1>Hi, I am a React App</h1>
      <Person name={personState.persons[0].name} age={personState.persons[0].age}>I like to wathc: Movies</Person>
      <Person name={personState.persons[1].name} age={personState.persons[1].age} />
      <Person name={personState.persons[2].name} age={personState.persons[2].age} />
      <button onClick={switchNameHandler}>Switch</button>
    </div>
  );
}

export default App;
