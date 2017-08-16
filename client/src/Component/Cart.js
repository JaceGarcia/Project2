import React, { Component } from 'react';
import axios from 'axios';

class Cart extends Component {
    constructor() {
        super();
        this.state = {
            order: [],
            clothes: []
        }
    }
    componentWillMount() {
        const id = this.props.match.params.orderId;
        console.log(id);
        axios.get(`/api/order`).then((res) => {
            console.log(res.data);
        });
    }
    render(){
        return (
            <div>
                {this.state.order.map((orders, i) => {
                    return (
                        <div key={i}>
                            <h2>{orders.id}</h2>
                        </div>
                    )
                })}
            </div>
        );
    };
}
export default Cart;