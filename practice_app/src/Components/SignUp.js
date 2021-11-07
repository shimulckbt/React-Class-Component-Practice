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


    onChangeHAndler = (e) => {
        let inputName = e.target.name;
        let inputValue = e.target.value;
        this.setState({ [inputName]: inputValue })

        if (inputName === "fname") {
            let namePattern = /^([a-zA-Z]){2,30}/;
            if (!namePattern.test(inputValue)) {
                this.setState({ fname: "Invalid First Name" })
            }
        }
        if (inputName === "lname") {
            let namePattern = /^([a-zA-Z]){2,30}/;
            if (!namePattern.test(inputValue)) {
                this.setState({ lname: "Invalid Last Name" })
            }
        }
        if (inputName === "email") {
            let emailPattern = /\S+@\S+\.\S+/;
            if (!emailPattern.test(inputValue)) {
                this.setState({ email: "Invalid Email" })
            }
        }
        if (inputName === "phone") {
            if (!Number(inputValue)) {
                this.setState({ inputName: "Invalid Phone Number" });
            }

        }
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
