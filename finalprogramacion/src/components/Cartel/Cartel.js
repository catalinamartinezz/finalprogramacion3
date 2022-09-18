import React, { Component } from 'react'
import './Cartel.css'
import { Link } from 'react-router-dom'

export default class Cartel extends Component {
    constructor(props){
        super(props)
        this.state = {
          descripcion: false,
          agregar: JSON.parse(localStorage.getItem('favoritos')).some((fav)=> fav.id === props.cartel.id)
         
        }
      }  
    vermas= ()=> {
      this.setState({descripcion: !this.state.descripcion})
    }

    handleAgregar(){
      this.setState({agregar: !this.state.agregar}, ()=>{this.props.favoritos(this.props.cartel)})
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
        <button className="btn btn-light" onClick={()=>this.handleAgregar()} >{this.state.agregar ? 'Quitar de Favoritos' : 'Agregar a Favoritos'}</button> 
        </div>
      
        {this.state.descripcion === false? <> <p onClick= {this.vermas}>Ver Mas</p></>: <><p onClick= {this.vermas}>Ver Menos</p> <p>{this.props.cartel.overview}</p></>}
        <Link to={`/detallepelicula/id/${this.props.cartel.id}`}>
            <p>Ir Al Detalle</p>
          </Link>
    </article>
      </>
    )
  }
}
