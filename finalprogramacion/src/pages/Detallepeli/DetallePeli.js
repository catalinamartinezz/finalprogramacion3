import React, { Component } from 'react'
import './DetallePeli.css'

export default class DetallePeli extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      detalle: {},
    };
  }
  componentDidMount() {
    const url = `https://api.themoviedb.org/3/movie/${this.state.id}?api_key=809187852af3a04706d10c0477580eec`
    fetch(url)
      .then((res) => res.json())
      .then(datos => {
        //console.log(datos)
        return this.setState({
          detalle: datos,
        })
      })
      .catch(err => console.log(err))
  }
  render() {
    const img = 'https://image.tmdb.org/t/p/w342';
    return (
      <>
      <section clasName="bloque-pelicula">
        <section className="imagen-pelicula">
          <img className="portada-pelicula" src={img + this.state.detalle.poster_path} alt={this.state.detalle.title}/>
        </section>
        <section className="peli">
          <article>
            <h1 className="titulo-peli">{this.state.detalle.title}</h1>
            <p>| Calificación: {this.state.detalle.vote_average}| Duración: ${this.state.detalle.runtime}| <a className= "fav" href="favourite.html"> Agregar a favoritos</a>| Genero: {/*this.state.detalle.genres.name*/}</p>
        </article>
        <article className="bloque-sinopsis-peli">
            <p className="sinopsis"> {this.state.detalle.overview}</p>
        </article>
        </section>
      </section>
    </>
    )
  }
}

