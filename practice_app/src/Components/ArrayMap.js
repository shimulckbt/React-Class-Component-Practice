import React, { Component } from 'react'

export default class ArrayMap extends Component {

    arrayMap = (data) => {
        return <option>{data}</option>
    }
    render() {

        const myArray = ['shimul', 'tutul', 'palash', 'hello'];
        const dataItems = myArray.map(this.arrayMap)
        // const dataItems = myArray.map((myData) => {
        //     return <option>{myData}</option>
        // })

        return (
            <div>
                <select>
                    {dataItems}
                </select>
            </div>
        )
    }
}
