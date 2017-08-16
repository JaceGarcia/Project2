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
        const imageStyles = {
            width: "300",
            height: "300"
        }
        return (
                <div>
                    {this.state.clothes.map((clothing, i) => {
                        return (
                            <div key={i}>
                                <Link to={`/${clothing._id}/display`}><img style={imageStyles} src={clothing.imgUrl} alt=''/></Link>
                            </div>
                        )
                    })}
                </div>
        );
    }
}

export default Home;

