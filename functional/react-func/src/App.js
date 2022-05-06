// // import logo from './logo.svg';
// import React, { useState } from "react"
// import './App.css';
// import Person from './Person/Person';

// function App() {
//   const [personState, setPersonState] = useState({
//     persons: [
//       { name: 'Shimul', age: 27 },
//       { name: 'Tutul', age: 22 },
//       { name: 'Palash', age: 31 },
//     ],
//     showPersons: false,
//   });

//   const switchNameHandler = (newName) => {
//     // console.log('Was clicked!');
//     // DON'T DO THIS: this.state.persons[0].name = 'Shimulimilian';
//     setPersonState({
//       persons: [
//         { name: newName, age: 28 },
//         { name: 'Tutul', age: 29 },
//         { name: 'Palash', age: 27 }
//       ],
//     });
//   };

//   const nameChangeHandler = (event) => {
//     setPersonState({
//       persons: [
//         { name: 'Shimul', age: 28 },
//         { name: 'Tutul', age: 29 },
//         { name: event.target.value, age: 26 }
//       ]
//     });
//   };

//   const togglePersonHandler = () => {
//     // const doesShow = personState.showPersons;
//     // console.log(doesShow);
//     setPersonState({ showPersons: true });
//   };
//   // console.log(togglePersonHandler);

//   return (
//     <div className="App">
//       <h1>Hi, I am a React App</h1>
//       {
//         personState.showPersons === true ?
//           <div>
//             <Person name={personState.persons[0].name} age={personState.persons[0].age}>I like to wathc: Movies</Person>
//             <Person name={personState.persons[1].name} age={personState.persons[1].age} />
//             <Person click={() => switchNameHandler('CKBT')} changed={nameChangeHandler} name={personState.persons[2].name} age={personState.persons[2].age} />
//           </div> : null
//       }
//       <button onClick={() => setPersonState({ showPersons: true })}>Switch Name</button>
//     </div >
//   );
// }

// export default App;


import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Shimul', age: 28 },
      { name: 'Palash', age: 31 },
      { name: 'Tutul', age: 22 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  switchNameHandler = (newName) => {
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = 'Shimulimilian';
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: 'Monu', age: 29 },
        { name: 'Golu', age: 27 }
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Shimul', age: 28 },
        { name: event.target.value, age: 29 },
        { name: 'Tutul', age: 26 }
      ]
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map(person => {
            return <Person name={person.name} age={person.age} />
          })}
          {/* <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age} />
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, 'Shimul!')}
            changed={this.nameChangedHandler} >My Hobbies: Racing</Person>
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age} /> */}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
