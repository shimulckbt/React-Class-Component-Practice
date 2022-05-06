import React from "react";
import Radium from 'radium'
import './Person.css';

const person = (props) => {
   const style = {
      '@media (min-width:500px)': {
         width: '350px'
      }
   };
   return (
      <div className="Person" style={style}>
         <p onClick={props.click}>i'm {props.name}! and I am {props.age} years old and {props.children}</p>
         <input type="text" onChange={props.changed} value={props.name} />
      </div>
   );
};

export default Radium(person);