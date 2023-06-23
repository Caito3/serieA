

import React from "react";
import "./foot.css"



function Foot(){
    return(
        <section class="foot">
            <p class="des"> DESARROLLO</p>
            <div class="desarrollador">
                <img src="https://cdn-icons-png.flaticon.com/128/689/689355.png" class="logoDes"/>
                <p class="textoDes">Carlos Julian Lopez</p>
            </div>
            <p class="contactoTex"> CONTACTO </p>
            <div class="contacto">
                <a href="https://www.linkedin.com/in/carlos-julian-lopez-63544a24b/" target="_blank">
                    <img src="https://cdn-icons-png.flaticon.com/128/3938/3938061.png" class="linked" />
                </a>
                <img src="https://cdn-icons-png.flaticon.com/128/2504/2504727.png" class="gmail"/>
                <img src="https://cdn-icons-png.flaticon.com/128/901/901141.png" class="tel"/>
            </div>
            
            <p class="der">DERECHOS</p>
            <div class="derechos">
                
                <img src="https://cdn-icons-png.flaticon.com/128/321/321240.png" class="derLogo"/>
                <p class="derTexto"> Serie A </p>
            </div>
        </section>
    )
}
export default Foot