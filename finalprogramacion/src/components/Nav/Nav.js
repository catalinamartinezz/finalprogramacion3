import React from 'react'
import './Nav.css'

export default function Nav() {
  return (
    <header>
     <nav className="contenedor">
            <div className="botones">
                <img id="logo" src="./img/logo.png" alt=" Views logo"/>
            </div>
            <div>
                <a href="index.html" className="toggle-nav">
                    <span className="fa fa-bars"></span>
                </a>
            </div>
            <div className="botones">
                <a href="index.html">Series</a>
            </div>
            <div className="botones">
                <a href="index.html">Peliculas</a>
            </div>
            <div className="botones1">
                <a href="genres.html">Generos</a>
            </div>
            <div className="botones">
                <a href="favourite.html">Favoritos</a>
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
