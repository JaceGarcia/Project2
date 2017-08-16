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
            backgroundColor: "black",
            color: "",
            textDecoration: "none",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center"
        }
        return (
            <Router>
                <div>
                    <navBar>
                        <Link to="/">Home</Link>
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