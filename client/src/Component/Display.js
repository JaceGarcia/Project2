import React, { Component } from 'react';
import axios from 'axios';

class Display extends Component {
    constructor() {
        super();
        this.state = {
            id: '',
            name: '',
            imgUrl: '',
            size: '',
            color: '',
            gender: '',
            age_group: '',
            price: '',
            quantity: '',
            order: []
        }
    }

    componentWillMount() {
        const id = this.props.match.params.clothesId;
        console.log(id);
        axios.get(`/api/clothes/${id}`).then((res) => {
            this.setState({
                id: res.data.id,
                name: res.data.name,
                imgUrl: res.data.imgUrl,
                size: res.data.size,
                color: res.data.color,
                gender: res.data.gender,
                age_group: res.data.age_group,
                price: res.data.price,
                quanity: res.data.price,
                order: res.data.order
            });
        });
    }
    render() {
        return (

            <div>
                <h2>{this.state.color} Shirt </h2>
                <img src={this.state.imgUrl}/>
            </div>
        );
    }
};

export default Display;