import React, { Component } from 'react'
import './Favs.css'
import Pelicula from '../../components/Pelicula/Pelicula'
import Cartel from '../../components/Cartel/Cartel'

 class Favs extends Component {
  constructor(){
    super()
    this.state={
      favoritos: [],
      
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
              peliculas={item}
          />
          
      ))}
       
      </section>
      
    )
  }
}

export default Favs