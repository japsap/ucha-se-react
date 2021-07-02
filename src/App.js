import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

import About from './components/AboutUs/About';
import Home from './components/Home/Home';
import SignIn from './components/SignIn/SignIn';
import connectionLost404 from './components/connectionLost404/connectionLost404';
import Contact from './components/ContactUs/Contact';
import FirstStep from './components/SignIn/firstStep/FirstStep';
import Authter from './components/SignIn/secondStep/Second';



const App = () => {
    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [hasAccount, setHasAccount] = useState(false);

    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact={true} component={Home}/>;
                    <Route path="/about" exact component={About}/>;
                    <Route path="/contact" exact component={Contact}/>;
                    <Route path="/sign" exact component={SignIn}/>;
                    <Route path="/404" exact component={connectionLost404}/>;
                    <Route path="/f" exact component={FirstStep}/>;
                    <Route path="/c" exact component={Authter}/>;
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default App