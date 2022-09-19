import React, { Component } from 'react'
import './DetallePeli.css'

export default class DetallePeli extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      detalle: {},
      genre: "",
      favoritos: [], 
      agregar: [], 
      cargando: true,
    };
  }
  componentDidMount() {
    this.setState({favoritos: JSON.parse(localStorage.getItem('favoritos')) || []})
    const url = `https://api.themoviedb.org/3/movie/${this.state.id}?api_key=809187852af3a04706d10c0477580eec`
    fetch(url)
      .then((res) => res.json())
      .then(datos => {
        //console.log(datos)
        return this.setState({
          detalle: datos,
          genre: datos.genres[0].name
        })
      })
      .catch(err => console.log(err))
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
  handleagregar(){
    this.setState({agregar: !this.state.agregar}, ()=>{this.handleFavoritos(this.state.detalle)})
  }
  render() {
    const img = 'https://image.tmdb.org/t/p/w342';
    return (

      <>
      {this.state.cargando === false ? (
            <p>Cargando</p>
          ) : (
      <>
      <section className="bloque-pelicula">

        <section className="imagen-pelicula">
          <img className="portada-pelicula" src={img + this.state.detalle.poster_path} alt={this.state.detalle.title}/>
        </section>

        <section className="peli">
          <article>
            <h1 className="titulo-peli">{this.state.detalle.title}</h1>
            <p>
              | Calificación: {this.state.detalle.vote_average} |
               Duración: {this.state.detalle.runtime} |
               Genero: {this.state.genre} |
               Fecha De Estreno : {this.state.detalle.release_date}
            </p>
            <button className="btn btn-primary" onClick={()=> this.handleagregar()} >{this.state.agregar ? 'Agregar de favoritos' : 'Quitar de favoritos'}</button> 
          </article>
          <article className="bloque-sinopsis-peli">
            <p className="sinopsis"> {this.state.detalle.overview}</p>
          </article>
        </section>
      </section>
      </>)}
      
    </>
    )
  }
}

