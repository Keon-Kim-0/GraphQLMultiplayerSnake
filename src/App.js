import React, { useState } from "react";
import axios from "axios";
import './styles.css';
import Login from "./components/Login/login";
import {
    BrowserRouter as Router, Switch, Route, NavLink,
} from 'react-router-dom';

//----------------React-------------------------


function App() {
    const [logStat, setLogStat] = useState(false);
    const [name, setName] = useState('');
    return (
        <div id='loginDiv'>
            <Login setName={(name) => setName(name)} name={name} setLogStat={(bool) => setLogStat(bool)} logStat={logStat} />
        </div >
    );
}

export default App;

