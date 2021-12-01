import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Demo extends Component {

    constructor() {
        super();
        this.state = {
            name: ''
        }
    }

    onSubmitHandler = () => {
        alert(this.state.name)
    }

    changeName = (e) => {
        let newName = e.target.value;
        this.setState({ name: newName });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmitHandler}>
                    <p className="myHobby">My first form<br />{this.state.name}</p>
                    <input type="text" onChange={this.changeName} placeholder="your name" /><br />
                    <input type="submit" value="Submit Now" />
                    <Link to="/stateprac" target='_blank' style={{ textDecoration: "none" }}>State</Link>
                </form>
            </div>
        );
    }
}

export default Demo;