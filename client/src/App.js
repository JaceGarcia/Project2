import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./components/Home";
//import Clothes from "./components/Clothes";
import AddUser from "./components/AddUser";
import Display from "./components/Display";
import Cart from "./components/Cart";

class App extends Component {
    render() {
        return (
            <Router>
                 <div>
                    <Route exact path="/" component={Home} />
                    <Route path="/display/:displayId" component={Display} />
                    <Route path="/add-user" component={AddUser} />
                    <Route path="/cart" component={Cart} />
                 </div>
            </Router>
        );
    }
}

export default App;