import React from 'react'
import './Pelicula.css'
import {Link} from 'react-router-dom'

 function Pelicula(props) {
    const img = 'https://image.tmdb.org/t/p/w342';
    let {poster_path, title, overview, id}= props.peliculas
    
    const vermas = ()=>{

    }
    //This.state.esFavorito : false
    //ComponentDidmount que traiga el localStorage y despues haga un .find que chequea si esta o no. si esta setState({esFavorito:true})
    
    return (
             <article className="art-peliculas"> 
                <a href="#?">
                    <img className= "img-home" src={img + poster_path} alt={title}/> 
                </a>
            <h2 className="titulos-inicio" >{title}</h2>
        <p>Descripción: {overview}</p>
        <div className='d-flex justify-content-end'>
        <button className="btn btn-primary" onClick={()=>props.favoritos(props.peliculas)}>Favoritos </button> {/* this.state.esFavorito? <p>Quitar</> : <p>agregarFavorito</p>*/}
        <Link to={`/detallepelicula/id/${id}`} className="btn btn-warning" >Detalle</Link>
        <button className="btn btn-info" onClick={vermas}>Ver Mas</button>
      </div>
    </article>
  )
}

export default Pelicula
