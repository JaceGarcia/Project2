import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


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
        const id = this.props.match.clothesId;
        axios.get(`/api/clothes/${id}`).then((res) => {
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
                {this.state.clothes.map((image, i) => {
                    return (
                        <shirts key={i}>
                            <Link to="/:Id/display"><img src={image.imgUrl} alt=''/></Link>

                        </shirts>
                    )
                })}
            </div>
        );
    }

}
export default Clothes;