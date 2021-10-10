import React from 'react';
import './Main.css';
import Background from "./assets/background.mp4";
import Witchbody from "./assets/test2.png";
import Logo from "./components/menu/Logo"
import Menu from './components/menu/Menu';
import Uppermenu from './components/menu/uppermenu';




function Main() {
    return (
      
        
        <div>
       
            <section className="intro-section">
                <video autoPlay muted loop id="intro-video">
                    <source src={Background} type="video/mp4"/>  
            </video>
            <div className="logo-container">
            <Uppermenu/>
            
            
            <Logo/>
      
            </div>
            </section>
            
            <div className="menu-wrap">
                
                <img className="witchbody" src={Witchbody} alt="wiedzma"></img>
            <Menu/>
            </div>

        
        </div>
       
    )
}

export default Main
