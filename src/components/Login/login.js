//login page component exported to be used at App.js(auto compiled to jsx)
import React, { Component, useState } from 'react';
//using navlink
import {
    BrowserRouter as Router, Switch, Route, NavLink, Redirect
} from 'react-router-dom';
import LoginForm from "./LoginForm"
import RegisterForm from "./RegisterForm"

export default function Login({ logStat, setLogStat, name, setName }) {
    console.log(logStat)
    console.log(setLogStat)
    console.log(name)
    console.log(setName)
    return (
        <div class="wrapper fadeInDown">
            <div id="formContent">
                <Router>
                    <NavLink to="/login" onClick={() => { document.getElementById('logButton').className = 'active'; document.getElementById('regButton').className = 'inactive underlineHover' }}>
                        <h2 id="logButton" class="active"> Sign In </h2>
                    </NavLink>
                    <NavLink to="/register" onClick={() => { document.getElementById('regButton').className = 'active'; document.getElementById('logButton').className = 'inactive underlineHover'; }}>
                        <h2 id="regButton" class="inactive underlineHover">Sign Up </h2>
                    </NavLink>

                    <div class="fadeIn first">
                        <img src="https://secureservercdn.net/50.62.174.75/tg8.458.myftpupload.com/wp-content/uploads/2021/03/cropped-favicon-32x32.png" id="icon" alt="User Icon" />
                    </div>

                    <div>
                        <Switch>
                            <Route
                                exact
                                path="/"
                                render={() => {
                                    return (
                                        logStat ?
                                            <Redirect to="/home" /> :
                                            <Redirect to="/login" />
                                    )
                                }}
                            />
                            <Route exact path="/login" component={LoginForm} />
                            <Route path="/register" component={RegisterForm} />
                        </Switch>
                    </div>
                </Router>
            </div>
        </div>
    );
}


// { this.state.authenticated && 
//     <Route exact path="/Welcome" component={Welcome} />
//   }