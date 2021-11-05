import React from 'react';

const Welcome = (props) =>{

    const clickMe = (a) => {
        alert(a)
    }
        return (
        <div>
            <h1>I am {props.name} and I am {props.age} years old</h1>
            <button onClick={clickMe.bind(this,"I am fat Arrow Function")}>Hello React</button>
        </div>
    );
}
export default Welcome;