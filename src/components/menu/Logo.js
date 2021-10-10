import React from 'react';
import Logos from "./inner assent/logo.svg"
import "./Logo.css";
import Logos2 from "./inner assent/Logo2.svg";
import "animate.css"

function Logo() {
    return (
        <div className="logoWrapper">
           
           <img class="animate__animated animate__swing animate__delay-3s animate__slower animate__infinite" src={Logos} alt="witchbrew logo"/>
           <img class="animate__animated animate__flash animate__delay-3s animate__repeat-1.5" src={Logos2} alt="witchbrew logo"/>


        </div>
    )
}

export default Logo
