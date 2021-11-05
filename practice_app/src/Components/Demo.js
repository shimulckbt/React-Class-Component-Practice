import React, { Component } from 'react';

class Demo extends Component {

    constructor() {
        super();
        this.state = {
            name: ''
        }
    }

    changeName = (e) => {
        let newName = e.target.value;
        this.setState({ name: newName });
    }

    render() {
        return (
            <div>
                <form>
                    <p>My first form<br />{this.state.name}</p>
                    <input type="text" onChange={this.changeName} placeholder="your name" /><br />
                    <input type="submit" value="Submit Now" />
                </form>
            </div>
        );
    }
}

export default Demo;