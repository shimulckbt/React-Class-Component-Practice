import React, { Component } from 'react'
import { Route, Switch } from "react-router-dom"
import DemoPage from '../pages/DemoPage'

export default class AppRoute extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path='/' component={DemoPage}></Route>
                </Switch>
            </div>
        )
    }
}
