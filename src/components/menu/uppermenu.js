import React from 'react';
import  './uppermenu.css';
import { FaSearch } from 'react-icons/fa';
import { FaShoppingCart, FaHeart } from 'react-icons/fa';


function uppermenu() {
    return (
        <div className="uppermenu-all">
            <div className="upmenu">
            <ul>
                <li> </li>
                <li> </li>
                <li> </li>
                <li>Home</li>
                <li>Zarejestruj się</li>
                <li>Zaloguj się </li>
                </ul></div>
        <div className="usermenu">
                    <ul>
                        <li> </li>
                        <li> </li>
                    </ul>
                <div className="search-box"><input class="search-text" type="text" placeholder=""/>
                <a className="search-btn" href=" "><FaSearch/> </a></div>
                <div className="heart-container"><FaHeart/></div>
                <div className="shoppingcart-container"><FaShoppingCart/></div>
                
                
            
            </div>
        </div>
    )
}

export default uppermenu
