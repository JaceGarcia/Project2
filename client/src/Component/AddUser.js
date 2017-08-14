import React, { Component } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';

class AddUser extends Component {


    _handleSubmit = (e) => {
        e.preventDefault();
        axios.post("api/users", this.state).then((res) => {
            console.log("Success!");
        })
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div>
                <Link to="/">Home</Link>

                <form onSubmit={this._handleSubmit}>
                    <label htmlFor="firstName">First Name </label>
                    <input type="text" placeholder="First Name"/>
                    <label htmlFor="lastName">Last Name </label>
                    <input type="text" placeholder="Last Name"/>
                    <label htmlFor="email">Email</label>
                    <input type="text" placeholder="Email"/>
                    <button>Submit</button>
                </form>

            </div>
        );
    }
}

export default AddUser;