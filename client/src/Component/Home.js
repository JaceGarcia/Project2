import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


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
        axios.get(`api/clothes`).then(res => {
            this.setState({clothes: res.data})
        });
    }

    render(){
        return (
            <div>
                <Link to="/add-user">Login</Link>
                <div>
                <h1 className="head">Kerusso2.0</h1>
                    {this.state.clothes.map((clothing, i) => {
                        return (
                            <div key={i}>
                                <Link to={`/${clothing._id}/display`}><img src={clothing.imgUrl} alt=''/></Link>
                            </div>
                        )
                    })}
                </div>
            </div>
        );
    }
}

export default Home;

