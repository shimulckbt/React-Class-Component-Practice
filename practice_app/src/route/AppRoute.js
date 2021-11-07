import React, { Component } from 'react'
import { Route, Routes } from "react-router-dom"
import DemoPage from '../pages/DemoPage'
import StatePracPage from '../pages/StatePracPage'

export default class AppRoute extends Component {
    render() {
        return (
            <div>
                <Routes>
                    <Route exact path='/demo' element={<DemoPage />} />
                    <Route exact path='/stateprac' element={<StatePracPage />} />
                </Routes>
            </div>
        )
    }
}
