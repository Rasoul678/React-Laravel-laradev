import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Threads from "./threads/Threads";
import CreateThread from "./threads/CreateThread";
import ShowThread from "./threads/ShowThread";
import  Home from './Home';
import LoginPage from './auth/LoginPage';
import RegisterPage from "./auth/RegisterPage";
import Profile from "./Profile";
import Test from "./Test";
import { ReactQueryDevtools } from 'react-query-devtools'

class App extends Component {
    render() {
        return (
            <Router>
                <Header />
                <div className="container">
                    <Switch>
                        <Route exact path='/test' component={Test} />
                        <Route exact path='/' component={Home} />
                        <Route exact path="/threads" component={Threads} />
                        <Route exact path="/threads/create" component={CreateThread} />
                        <Route exact path="/threads/:channel/:id" component={ShowThread} />
                        <Route exact path='/login' component={LoginPage} />
                        <Route exact path='/register' component={RegisterPage} />
                        <Route exact path='/profiles/:username' component={Profile} />
                    </Switch>
                </div>
                <ReactQueryDevtools initialIsOpen={false} />
            </Router>
        );
    }
}

export default App;
