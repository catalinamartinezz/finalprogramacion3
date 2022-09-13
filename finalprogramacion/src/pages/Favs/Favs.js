import React, { Component } from 'react'
import './Favs.css'
import Pelicula from '../../components/Pelicula/Pelicula'

 class Favs extends Component {
  constructor(){
    super()
    this.state={
      favoritos: [],
      cargando: true,
    }
  }
  componentDidMount(){
    this.setState({favoritos: JSON.parse(localStorage.getItem('favoritos'))})
  }
  render() {
    return (
      <section className="peliculas-populares"> 
      {this.state.cargando === false ? (
      <p>Cargando...</p> 
      ) : (
      this.state.favoritos.map(item => (
          <Pelicula 
              key={item.id}
              personaje={item}
          />
      )))}
       
      </section>
      
    )
  }
}

export default Favs