import React, { Component } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import { Link} from 'react-router-dom';


class Display extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            imgUrl: '',
            size: '',
            color: '',
            gender: '',
            order: []
        }
    }
    _handleChangeImgUrl = (e) => {
        e.preventDefault();
        const imgUrl = e.target.value;
        this.setState({imgUrl})
    }
    _handleChangeName = (e) => {
        e.preventDefault();
        const name = e.target.value;
        this.setState({name})
    }
    _handleChangeSize = (e) => {
        e.preventDefault();
        const size = e.target.value;
        this.setState({size})
    }
    _handleChangeColor = (e) => {
        e.preventDefault();
        const color = e.target.value;
        this.setState({color})
    }
    _handleChangeGender = (e) => {
        e.preventDefault();
        const gender = e.target.value;
        this.setState({gender})
    }
    _handleSubmit = (e) => {
        e.preventDefault();
        axios.post("/api/order", this.state).then((res) => {
            const newState = {...this.state};
            newState.name = res.data.name;
            newState.imgUrl = res.data.imgUrl;
            newState.size = res.data.size;
            newState.color = res.data.color;
            newState.gender = res.data.gender;
            this.setState(newState);
            console.log(this.state);

            console.log("Success!");
        })
            .catch(err => console.log(err));
    };
    componentWillMount() {
        const id = this.props.match.params.clothesId;
        console.log(id);
        axios.get(`/api/clothes/${id}`).then((res) => {
            this.setState({
                name: res.data.name,
                imgUrl: res.data.imgUrl,
                size: res.data.size,
                color: res.data.color,
                gender: res.data.gender,
                order: res.data.order
            });
        });
    }

    componentDidMount() {
        const element = ReactDOM.findDOMNode(this.refs.dropdown)

        $(element).ready(function() {
            $('select');
        });
    }
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

        };
        const bodyStyles = {
            display: "flex",
            justifyContent: "center",
            padding: "200px"
        }

        return (

            <div style={bodyStyles}>
                <h2>{this.state.color} Shirt </h2>
                <img src={this.state.imgUrl} alt=""/>
                <div>
                    <select  style={buttonStyles} onChange={this._handleChangeColor} ref="dropdown" defaultValue="1">
                        <option value="" disabled>Choose your option</option>
                        <option>Black</option>
                        <option>Grey</option>
                    </select>
                    <select  style={buttonStyles} onChange={this._handleChangeSize} ref="dropdown" defaultValue="1">
                        <option disabled>Choose your option</option>
                        <option>XS</option>
                        <option>S</option>
                        <option>M</option>
                        <option>L</option>
                        <option>XL</option>
                        <option>2XL</option>
                    </select>
                    <select  style={buttonStyles} onChange={this._handleChangeGender} ref="dropdown" defaultValue="1">
                        <option  disabled>Choose your option</option>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Unisex</option>
                    </select>
                    <Link to="/:orderId"><input  style={buttonStyles} onClick={this._handleSubmit} type="submit" /></Link>
                </div>
            </div>
        );
    }
}

export default Display;