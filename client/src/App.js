import React, { Component } from "react";
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './Component/Home';
import AddUser from "./Component/AddUser";
import Display from "./Component/Display";
import Cart from "./Component/Cart";

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <div>
                        <Route exact path="/" component={Home} />
                        <Route path="/display/:displayId" component={Display} />
                        <Route path="/add-user" component={AddUser} />
                        <Route path="/cart" component={Cart} />
                     </div>
                </div>
            </Router>
        );
    }
}

export default App;