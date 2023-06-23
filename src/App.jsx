import { useState } from 'react'
import './App.css'
import NavPrincipal from './componentes/NavPrincipal'
import NavSec from './componentes/NavSec'
import EquipoMostrar from './componentes/EquipoMostrar'
import equipos from './data/equipos'
import Foot from './componentes/foot'


function App() {
  const equipoTraer = equipos.map((equipo)=>{
    return (<EquipoMostrar   nombre={equipo.nombre} foto={equipo.foto}/>)
  }

  )

  return (
    <div>
    <NavPrincipal/>
    <NavSec/>
    <div class="equipos">
    {equipoTraer}
    <Foot/>
    </div>
    </div>
  )
}

export default App
