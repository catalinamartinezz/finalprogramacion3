import React from 'react'
import './Cartel.css'

function Cartel ({cartel}){
    console.log(cartel)
    const img= 'https://image.tmdb.org/t/p/w342';
    let {poster_path, title, overview}= cartel
return(

    <>
             <article className="art-cartelera"> 
                <a href="#?">
                    <img className= "img-home" src={img + poster_path} alt={title}/> 
                </a>
            <h2 className="titulos-inicio-cartelera" >{title}</h2>
        <p>Descripción: {overview}</p>
        <div className='d-flex justify-content-end'>
        <button className="btn btn-primary"  >Favoritos</button>
        <button className="btn btn-danger"  >Borrar</button>
        <button className="btn btn-info" >Ver Mas</button>
        
      </div>
    </article>

    </>

)
}

export default Cartel