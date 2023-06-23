import React from "react";
import NavPrincipal from "../componentes/NavPrincipal";
import NavSec from "../componentes/NavSec";
import  "./equipoPag.css"



function Equipo({equipo}){
    return(
        <><div>
            <NavPrincipal />
            <NavSec />

        </div>
            <section class="sec" >
            <img src={equipo.foto} class="fotoSec"/>
            <div class="desar">
            <p class="nombreSec">Nombre: {equipo.nombre}</p>
            <p class="locSec">Ciudad: <img class="em" src="https://cdn-icons-png.flaticon.com/128/2113/2113007.png"/> {equipo.ciudad}</p>
            <p class="estad">Estadio: <img class="em" src="https://cdn-icons-png.flaticon.com/128/1540/1540530.png"/> {equipo.estadio}</p>
            <p class="titulos">Titulos: <img class="em" src="https://cdn-icons-png.flaticon.com/128/419/419952.png"/>{equipo.titulos}</p>
            </div>
            <img src={equipo.esFoto} class="esFoto"/>
            </section></>
    )
}
export default Equipo