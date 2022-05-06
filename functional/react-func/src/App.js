import React, { Component } from 'react';
import styled from 'styled-components';
import './App.css';
// import Radium, { StyleRoot } from 'radium'
import Person from './Person/Person';

const StyledButton = styled.button`
  background-color: green;
  color: white;
  font: inherit;
  border: 1px solid blue;
  padding: 8px;
  cursor: pointer;
  &:hover: {
    background-color: pink;
    color: black;
  }
`;

class App extends Component {
  state = {
    persons: [
      { id: 1, name: 'Shimul', age: 28 },
      { id: 2, name: 'Palash', age: 31 },
      { id: 3, name: 'Tutul', age: 22 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  // switchNameHandler = (newName) => {
  //   // console.log('Was clicked!');
  //   // DON'T DO THIS: this.state.persons[0].name = 'Shimulimilian';
  //   this.setState({
  //     persons: [
  //       { name: newName, age: 28 },
  //       { name: 'Monu', age: 29 },
  //       { name: 'Golu', age: 27 }
  //     ]
  //   })
  // }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(person => {
      return person.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons;//bad practice

    // const persons = this.state.persons.splice();//good practice
    const persons = [...this.state.persons]//good practice
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  render() {
    // const style = {
    //   backgroundColor: 'green',
    //   color: 'white',
    //   font: 'inherit',
    //   border: '1px solid blue',
    //   padding: '8px',
    //   cursor: 'pointer',
    //   ':hover': {
    //     backgroundColor: 'pink',
    //     color: 'black'
    //   }
    // };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)} />
          })}
        </div>
      );
      // style.backgroundColor = 'purple';
      // style[':hover'] = {
      //   backgroundColor: 'pink',
      //   color: 'black'
      // }
    }
    let classes = ['red', 'bold'].join(' ');

    return (
      // <StyleRoot>
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className={classes}>This is really working!</p>
        <StyledButton onClick={this.togglePersonsHandler}>Toggle Persons</StyledButton>
        {persons}
      </div>
      // </StyleRoot>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
// export default Radium(App);
