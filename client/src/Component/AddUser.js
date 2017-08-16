import React, { Component } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';

class AddUser extends Component {
    constructor() {
        super();
        this.state = {
            firstName: '',
            lastName: '',
            email: ''
        }
    }

    _handleChangeFirstName = (e) => {
        e.preventDefault();
        const firstName = e.target.value;
        this.setState({firstName})
    }
    _handleChangeLastName = (e) => {
        e.preventDefault();
        const lastName = e.target.value;
        this.setState({lastName})
    }
    _handleChangeEmail = (e) => {
        e.preventDefault();
        const email = e.target.value;
        this.setState({email})
    }


    _handleSubmit = (e) => {
        e.preventDefault();
        axios.post("/api/users", this.state).then((res) => {

            console.log("Success!");
        })
            .catch(err => console.log(err));
    };

    render() {
        const buttonStyles = {
            borderRadius: "5px",
            fontSize: "15px",
            textDecoration: "none",
            margin: "20px",
            color: "#000",
            position: "relative",
            display: "flex",
            backgroundColor: "#fff",
            alignContent: "center"
        }
        const bodyStyles = {
            display: "flex",
            justifyContent: "center",
            padding: "200px"
        }

        return (
            <div style={bodyStyles}>
                <form>
                    <input style={buttonStyles} onChange={this._handleChangeFirstName} type="text" name="FirstName" placeholder="First Name"/>
                    <input style={buttonStyles} onChange={this._handleChangeLastName} type="text" name="LastName" placeholder="Last Name"/>
                    <input style={buttonStyles} onChange={this._handleChangeEmail} type="text" name="Email" placeholder="Email"/>
                    <input style={buttonStyles} onClick={this._handleSubmit} type="submit" />
                </form>

            </div>
        );
    }
}

export default AddUser;