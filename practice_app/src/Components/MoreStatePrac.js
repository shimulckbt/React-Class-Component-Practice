import React, { Component } from 'react';

class MOreStatePrac extends Component {
    constructor() {
        super();
        let obj = {
            name: 'Shimul',
            age: '26',
            login: true,

        }
        this.state = obj;
        // this.refreshNow = this.refreshNow.bind(this)
    }
    changeName = (a) => {
        this.setState({ name: a })
    }
    refreshNow() {
        this.forceUpdate();
    }
    render() {
        return (
            // conditional return with element variable
            // this.state.login?(
            //     <button>Log Out</button>
            // ) : (
            //         <button>Log In</button>
            //     )
            <div>
                <h1>It's {this.state.name}</h1>
                <h1>I am {this.state.age} Years Old</h1>
                <button onClick={this.changeName.bind(this, "Srabon")}>Change Name</button>
                <h3>I am class props and my name is {this.props.name}<br /> i am {this.props.age} year old</h3>
                <button onClick={this.refreshNow.bind(this)}>Refresh</button>
                <h2>{Math.random()}</h2>
            </div>
        );
    }
}

export default MOreStatePrac;