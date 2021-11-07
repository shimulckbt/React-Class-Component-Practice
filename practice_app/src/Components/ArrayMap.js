import React, { Component } from 'react'

export default class ArrayMap extends Component {
    render() {

        const myArray = ['shimul', 'tutul', 'palash', 'hello'];
        const dataItems = myArray.map((myData) => {
            return <option>{myData}</option>
        })

        return (
            <div>
                <select>
                    {dataItems}
                </select>
            </div>
        )
    }
}
