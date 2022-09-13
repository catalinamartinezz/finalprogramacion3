import React, { Component } from 'react'
import './Cartel.css'
import { Link } from 'react-router-dom'

export default class Cartel extends Component {
    constructor(props){
        super(props)
        this.state = {
        }
      }  
    render() {
        const img= 'https://image.tmdb.org/t/p/w342';
    return (
      <>
       <article className="art-cartelera"> 
       <Link to={`/detallepelicula/id/${this.props.cartel.id}`}>
            <img src={`${img + this.props.cartel.poster_path}`}  className= "img-home" alt=""/>
        </Link>
            <h2 className="titulos-inicio-cartelera" >{this.props.cartel.title}</h2>
        <p>Descripción: {this.props.cartel.overview}</p>
        <div className='d-flex justify-content-end'>
        <button className="btn btn-primary" onClick={()=>this.props.favoritos(this.props.cartel)} >Favoritos</button> {/* this.state.esFavorito? <p>Quitar</> : <p>agregarFavorito</p>*/}
        <button className="btn btn-danger"  >Borrar</button>
        <button className="btn btn-info" >Ver Mas</button>
        
      </div>
    </article>
      </>
    )
  }
}
