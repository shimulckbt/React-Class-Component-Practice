import React from "react";

const person = (props) => {
   return (
      <div>
         <p onClick={props.click}>i'm {props.name}! and I am {props.age} years old and {props.children}</p>
         <input type="text" onChange={props.changed} />
      </div>
   );
};

export default person;