import React, { Component } from 'react';
import axios from 'axios';


class Clothes extends Component {
    constructor() {
        super();
        this.state = {
            id: '',
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
        axios.get(`/api/clothes`).then((res) => {
            this.setState({
                id: res.data._id,
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

            </div>
        );
    }

}
export default Clothes;