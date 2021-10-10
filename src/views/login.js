import React from 'react';
import './loginregister.css';
import Witchesbody from '../assets/test2.png';
import Loginlogo from '../components/loginregister/loginlogo.svg';

function login() {
    return (
        <div className="container">
        <div className="baseContainer">
            <div className="header"><img className="signlogo" src={Loginlogo} alt="login"/></div>
            <div className="content">
                <div className="imagelogin">
                <img src={Witchesbody} alt="img"/>
                </div>
                    
                <div className="form">
                <div className="labels">
                
                <label htmlFor="username">Nazwa użytkownika</label>
                <input type="text" name="username" placeholder="Nazwa użytkownika"/>
                </div>
                 <div className="labels">
                
                <label htmlFor="password">Hasło</label>
                <input type="text" name="password" placeholder="Hasło"/>
                </div>
                </div>

            </div>
            <div className="submitBtn">
            <button type="button" className="submit-btn">Zaloguj</button></div>
        </div>
        </div>
    )
}

export default login;
