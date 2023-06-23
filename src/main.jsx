import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import equipos from './data/equipos.js'
import Equipo from './paginacion/Equipo.jsx'

const routes =[
  {
    path:"/",
    element:<App/>
  }
]
equipos.forEach((equipo)=>{
  routes.push({
    path: equipo.nombre,
    element: <Equipo equipo={equipo}/>
  })
});
const router = createBrowserRouter(routes) 
ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
  <RouterProvider router={router}/>
  </React.StrictMode>,
  
  )