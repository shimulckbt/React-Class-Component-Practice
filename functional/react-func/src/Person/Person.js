import React from "react";

const person = (props) => {
   return (
      <div>
         <p>i'm {props.name}! and I am {props.age} years old and {props.children}</p>

      </div>
   );
};

export default person;