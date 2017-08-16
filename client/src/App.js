import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './Component/Home';
import AddUser from "./Component/AddUser";
import Display from "./Component/Display";
import Cart from "./Component/Cart";

class App extends Component {
    render() {
        const navBar = {
            height: "30px",
            backgroundColor: "#cfcdcd",
            color: "#cfcdcd",
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            borderBottom: "10px solid #cfcdcd "
        }
        const buttonStyles = {
            borderRadius: "5px",
            fontSize: "15px",
            textDecoration: "none",
            margin: "20px",
            color: "#000",
            position: "relative",
            display: "flex",
            backgroundColor: "#cfcdcd",
            alignContent: "center",
            paddingTop: "10px"

        }
        const titleStyles = {
            borderRadius: "5px",
            fontSize: "20px",
            textDecoration: "none",
            margin: "20px",
            position: "relative",
            display: "flex",
            alignContent: "center",
            paddingTop: "10px",
            color: "Black"
        }
        return (
            <Router>
                <div>
                    <navBar style={navBar}>
                        <Link style={buttonStyles} to="/">Home</Link>
                        <h2 style={titleStyles}>Kerusso2.0</h2>
                        <Link style={buttonStyles} to="/add-user">Login</Link>

                    </navBar>
                    <div>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/:clothesId/display/" component={Display} />
                        <Route path="/add-user" component={AddUser} />
                        <Route exact path="/cart/:orderid" component={Cart} />
                     </div>
                </div>
            </Router>
        );
    }
}

export default App;