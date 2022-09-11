import React from 'react'
import "./Card.css"
import {Link} from 'react-router-dom'
 
function Card(props) {
    let {image, name, descripcion} = props.pelicula

   
  return (
    <>   
    <h2>Películas Populares</h2>
    
<section className="peliculas-populares"> 
    <article className="art-peliculas"> 
        <a href="detail-serie.html?id=${data.results[i].id}">
             <img className= "img-home" src={image} alt={name}/> 
        </a>
        <h2 className="titulos-inicio" >{name}</h2>
        <p>Descripción: {descripcion}</p>
        <div className='d-flex justify-content-end'>
        <button className="btn btn-primary" onClick={()=>{props.favorito(props.pelicula)}} >Favoritos</button>
        <button className="btn btn-danger" onClick={()=>props.borrar(id)} >Borrar</button>
        <button className="btn btn-info" onClick={vermas}>Ver Mas</button>
        <Link to={`/DetallePeli/id/${id}`} className="btn btn-warning" >Detalle</Link>
      </div>
    </article>
</section>

    </>
  )
  }
export default  Card