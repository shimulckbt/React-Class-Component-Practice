import React, { Component } from 'react'
import Welcome from "../Components/Welcome";
import StatePractice from "../Components/StatePractice";
import MOreStatePrac from '../Components/MoreStatePrac';
import Demo from '../Components/Demo';
export default class DemoPage extends Component {
    render() {
        return (
            <div>
                {/* <Welcome name="Shimul" age="26" /> */}
                {/* <StatePractice name="Shimul" age="26" /> */}
                <Demo />
                {/* <MOreStatePrac name="Shimul" age="26" /> */}
            </div>
        )
    }
}
