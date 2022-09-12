import React, { Component } from 'react'
import Pelicula from '../../components/Pelicula/Pelicula'

export default class Favs extends Component {
  constructor(){
    super()
    this.state={
      favoritos: []
    }
  }
  componentDidMount(){
    this.setState({favoritos: JSON.parse(localStorage.getItem('favoritos'))})
  }
  render() {
    return (
      <section className="peliculas-populares"> 
      {this.state.favoritos.map(item => (
          <Pelicula 
              key={item.id}
              personaje={item}
          />
      ))}
       
      </section>
      
    )
  }
}
