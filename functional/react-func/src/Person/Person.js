import React from "react";
import './Person.css';

const person = (props) => {
   return (
      <div className="Person">
         <p onClick={props.click}>i'm {props.name}! and I am {props.age} years old and {props.children}</p>
         <input type="text" onChange={props.changed} value={props.name} />
      </div>
   );
};

export default person;