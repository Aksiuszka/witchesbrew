import React from 'react';
import './Menu.css';
import "animate.css"

function Menu() {
    return (
        <div  class="animate__animated animate__fadein animate__delay-3s animate__infinite"className="menu-wrapper">
            <div className="column">
            <button className="btn">Kawa rozpuszczalna
            <span></span><span></span><span></span><span></span>
            </button>
            <button className="btn">Kawa ziarnista
            <span></span><span></span><span></span><span></span>
            </button>
            </div>
            <div className="column">
            <button className="btn">Real Dealz
            <span></span><span></span><span></span><span></span>
            </button>
            <button className="btn">O nas
            <span></span><span></span><span></span><span></span>
            </button>
            </div>
          
            
        </div>
    )
}

export default Menu
