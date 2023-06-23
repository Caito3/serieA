

import React from "react";
import "./Equipo.css"



import { Link } from "react-router-dom";

function EquipoMostrar (props){
    return(
        <section class="equipo">
            
            <div class="foto"><img class="fotoEquipo" src={props.foto}/></div>
            <div class="nombre"><p class="nombreEquipo">{props.nombre}</p></div>
            <Link to={props.nombre}>
            <button class="boton">Ver Mas</button>
            </Link>
        </section>
    )
}
export default EquipoMostrar