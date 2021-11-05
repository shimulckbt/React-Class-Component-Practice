import React, {Component} from 'react';

class StatePractice extends Component {
    refreshNow(){
        this.forceUpdate();
    }
    render() {
        return (
            <div>
                <button onClick={this.refreshNow.bind(this)}>Refresh</button>
                <h2>{Math.random()}</h2>
            </div>
        );
    }
}

export default StatePractice;

