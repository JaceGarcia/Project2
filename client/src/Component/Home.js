import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Clothes from './Clothes'


class Home extends Component {
    constructor(){
        super();
        this.state = {
            user: "",
            order:[],
            clothes:[]
        }
    }
    componentWillMount() {
        axios.get('api/clothes').then(res => {
            this.setState({clothes: res.data})
        });
    }

    render(){
        return (
            <div>
                <Link to="/add-user">Login</Link>
                <div>
                <h1>Kerusso2.0</h1>
                <Clothes />
                </div>
            </div>
        );
    }
}

export default Home;

