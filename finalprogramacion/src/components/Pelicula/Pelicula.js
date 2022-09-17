import React, { Component } from 'react'
import './Pelicula.css'
import { Link } from 'react-router-dom'



export default class Pelicula extends Component {
  constructor(props) {
    super(props)
    this.state = {
      descripcion: false,
      favoritos: false
    }
  }
  vermas = () => {
    this.setState({ descripcion: !this.state.descripcion })
  }
  
  render() {
    const img = 'https://image.tmdb.org/t/p/w342';
    return (
      <>
        <article className="art-peliculas">
          <Link to={`/detallepelicula/id/${this.props.peliculas.id}`}>
            <img src={`${img + this.props.peliculas.poster_path}`} className="img-home" alt="" />
          </Link>
          <h2 className="titulos-inicio" >{this.props.peliculas.title}</h2>
          <div className='d-flex justify-content-end'>
          <button className="btn btn-primary" onClick={()=>this.props.favoritos(this.props.peliculas)} >Favoritos</button> {/* this.state.esFavorito? <p>Quitar</> : <p>agregarFavorito</p>*/}
          </div>
        
          {this.state.descripcion === false ? <><p onClick={this.vermas}> Ver mas</p></> : <>  <p onClick={this.vermas}> Ver menos</p> <p>{this.props.peliculas.overview}</p></>}
          <Link to={`/detallepelicula/id/${this.props.peliculas.id}`}>
            <p>Ir Al Detalle</p>
          </Link>
        </article>
      </>
    )
  }
}
