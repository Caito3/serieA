import React from "react";
import ReactDOM from 'react-dom/client'
import "./Nav.css"

function NavPrincipal(){
    return(
        <section class="nav">
        <div class="log"><img class="logo" 
        src="https://i.pinimg.com/originals/ff/fa/a2/fffaa22a80debb6ce84fa1b1b9cd5cc5.png"/>
        </div>
        <div class="liga"><p class="textoLiga"><a href="http://localhost:5173/" class="tex">Liga Italiana</a></p></div>
        <div class="user"><img class="userLogo" src="https://cdn-icons-png.flaticon.com/128/3237/3237472.png"/></div>
        </section>
    )
}
export default NavPrincipal