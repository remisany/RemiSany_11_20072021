import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"

import Header from "./components/Header"
import Error from "./components/Error"
import Footer from "./components/Footer"

import Home from "./pages/Home"
import Accomodation from "./pages/Accomodation"
import About from "./pages/About"

import "./styles/index.css";

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Header />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route
                    path = "/accomodation/:id"
                    render = {(props) =>
                        <Accomodation {...props}
                    />}
                />
                <Route path="/about">
                    <About />
                </Route>
                <Route>
                    <Error />
                </Route>
            </Switch>
            <Footer />
        </Router>
    </React.StrictMode>,
document.getElementById('root')
);