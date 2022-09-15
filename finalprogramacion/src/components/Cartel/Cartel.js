import React, { Component } from 'react'
import './Cartel.css'
import { Link } from 'react-router-dom'

export default class Cartel extends Component {
    constructor(props){
        super(props)
        this.state = {
          descripcion: false,
        }
      }  
    vermas= ()=> {
      this.setState({descripcion: !this.state.descripcion})
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
        <div className='d-flex justify-content-end'>
        <button className="btn btn-primary" onClick={()=>this.props.favoritos(this.props.cartel)} >Favoritos</button> {/* this.state.esFavorito? <p>Quitar</> : <p>agregarFavorito</p>*/}
        </div>
        <p onClick= {this.vermas}>Ver Mas</p>
        {this.state.descripcion === false? <></>: <p>{this.props.cartel.overview}</p>}
        <Link to={`/detallepelicula/id/${this.props.cartel.id}`}>
            <p>Ir Al Detalle</p>
          </Link>
    </article>
      </>
    )
  }
}
