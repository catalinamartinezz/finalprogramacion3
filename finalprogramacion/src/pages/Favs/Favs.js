import React, { Component } from 'react'
import './Favs.css'
import Pelicula from '../../components/Pelicula/Pelicula'


 class Favs extends Component {
  constructor(){
    super()
    this.state={
      favoritos: [],
      cargando: true
      
    }
  }
  componentDidMount(){
    this.setState({favoritos: JSON.parse(localStorage.getItem('favoritos'))})
  }
  handleFavoritos(pelicula) {
    if (this.state.favoritos.some(fav => pelicula.id === fav.id)) {
      console.log("verdadero")
      this.setState({ favoritos: this.state.favoritos.filter(item => item.id !== pelicula.id) }, () => {
        localStorage.setItem('favoritos', JSON.stringify(this.state.favoritos))
        //texto quitar de favoritos
      })
      console.log(this.state.favoritos.filter(item => item.id !== pelicula.id))
    } else {
      this.setState({ favoritos: [...this.state.favoritos, pelicula] }, () => {
        localStorage.setItem('favoritos', JSON.stringify(this.state.favoritos))
        //texto quitar de favoritos 
      })
    }
  }
  render() {
    return (
      <>
      <section className="peliculas-populares"> 
      {this.state.cargando === false ? (
            <p>Cargando</p>
          ) : (
      this.state.favoritos.map(item => (
          <Pelicula 
              key={item.id}
              peliculas={item}
              favoritos={(peliculas) => this.handleFavoritos(peliculas)}
          />
          
      )))}
       
      </section>
      
      </>
    )
  }
}

export default Favs