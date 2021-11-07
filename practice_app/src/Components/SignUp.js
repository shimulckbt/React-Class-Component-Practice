import React, { Component } from 'react'

export default class SignUp extends Component {

    constructor() {
        super();
        this.state = {
            fname: "",
            lname: "",
            email: "",
            phone: ""
        }
    }

    onSubmitHAndler = () => {
        alert = this.inputValue
    }
    onChangeHAndler = (e) => {
        let inputName = e.target.name;
        let inputValue = e.target.value;
        this.setState({ [inputName]: inputValue })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmitHAndler}>
                    <br /><br />
                    <label for="fname">{this.state.fname}</label><br />
                    <input onChange={this.onChangeHAndler} name='fname' type="text" placeholder='First Name' /><br /><br />
                    <label for="lname">{this.state.lname}</label><br />
                    <input onChange={this.onChangeHAndler} name='lname' type="text" placeholder='Last Name' /><br /><br />
                    <label for="lname">{this.state.email}</label><br />
                    <input onChange={this.onChangeHAndler} name='email' type="email" placeholder='Your Email' /><br /><br />
                    <label for="lname">{this.state.phone}</label><br />
                    <input onChange={this.onChangeHAndler} name='phone' type="phone" placeholder='Phone Number' /><br /><br />
                    <input type="submit" value="Submit"></input>

                </form>
            </div>
        )
    }
}
