import React from 'react'
import {Link} from 'react-router-dom'
import './Nav.css'

export default function Nav() {
  return (
    <header>
     <nav className="contenedor">
            <div className="botones">
                <Link to="/"><img className="logo" src={'./img/logo.png'} alt=" Views logo"/></Link>   
            </div>
            <div className="botones">
                <Link to="/">Home</Link>
            </div>
            <div className="botones">
                <Link to="/peliculas">Peliculas</Link>
            </div>
            <div className="botones">
                <Link to="/cartelera">Cartelera</Link>
            </div>
           
            <div className="botones">
            <Link to="/favs">Favoritos</Link>
            </div>
            <div className="botones1">
                <form action="search-results.html" method="GET">
                    <input className="formu" type="text" name="search" placeholder="Buscar..." value=""/> 
                    <button type= "submit">Enviar</button>
                    <p className="mensaje"></p>
                </form>
            </div>
        </nav>
        </header>
    
  )
}
