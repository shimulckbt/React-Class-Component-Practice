import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 1, name: 'Max', age: 28 },
      { id: 2, name: 'Manu', age: 29 },
      { id: 3, name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showHide: false
  }

  switchNameHandler = (newName) => {
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 }
      ]
    })
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(person => {
      return person.id === id;
    });

    const person = { ...this.state.persons[personIndex] }; //MOdern approach to spread an object
    // const person = Object.assign({}, this.state.persons[personIndex]); //another approach to spread an object

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons })
  }

  deletePersons = (personIndex) => {
    let persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons })
  }

  showHidePerson = () => {
    const togglePerson = this.state.showHide
    this.setState({ showHide: !togglePerson })
  }

  render() {
    const style = {
      backgroundColor: 'red',
      color: 'white',
      font: 'inherit',
      border: '2px solid green',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;
    if (this.state.showHide) {
      persons = (<div>
        {this.state.persons.map((person, index) => {
          return <Person
            click={() => this.deletePersons(index)}
            name={person.name}
            age={person.age}
            key={person.id}
            changed={(event) => this.nameChangedHandler(event, person.id)} />
        })}
      </div>);

      style.backgroundColor = 'green'
      style.border = '2px solid red'
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button
          style={style}
          // onClick={() => this.switchNameHandler('Maximilian!!')}>Switch Name</button>
          onClick={this.showHidePerson}>Switch Name</button>
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;












// import React from 'react';
// import './App.css';
// import Welcome from "./Components/Welcome";
// import StatePractice from "./Components/StatePractice";
// import MOreStatePrac from './Components/MoreStatePrac';
// import DemoPage from './pages/DemoPage';
// import StatePracPage from './pages/StatePracPage';
// import SignUp from './Components/SignUp';
// import ArrayMap from './Components/ArrayMap';
// import JsonArray from './Components/JsonArray';
// import { BrowserRouter, HashRouter } from "react-router-dom";
// import AppRoute from "./route/AppRoute";

// function App() {
//   return (
//     <BrowserRouter>
//       <div className="App">
//         {/* <SignUp /> */}
//         {/* <ArrayMap/> */}
//         {/* <JsonArray />
//       <DemoPage />
//       <MOreStatePrac /> */}
//         <AppRoute />
//       </div>
//     </BrowserRouter>
//   );
// }

// export default App;
