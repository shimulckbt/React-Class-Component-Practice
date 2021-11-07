import React, { Component } from 'react'

export default class JsonArray extends Component {

    render() {
        const myList = [
            {
                name: 'shimul',
                age: '26'
            },
            {
                name: 'hello',
                age: '12'
            },
            {
                name: 'palash',
                age: '30'
            },
            {
                name: 'tutul',
                age: '20'
            },
        ]
        const myDataName = myList.map((myList) => {
            return <option>{myList.name}</option>
        })
        const myDataAge = myList.map((myList) => {
            return <option>{myList.age}</option>
        })
        return (
            <div>
                <select>
                    {myDataName}
                </select>
                <select>
                    {myDataAge}
                </select>
            </div>
        )
    }
}
