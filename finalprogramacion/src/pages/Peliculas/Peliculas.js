import React, { Component } from 'react'
import Pelicula from '../../components/Pelicula/Pelicula';


export default class Peliculas extends Component {
  constructor() {
    super();
    this.state = {
      peliculas: [],

    };
  }
  componentDidMount() {
    const url = 'https://api.themoviedb.org/3/movie/popular?api_key=809187852af3a04706d10c0477580eec'
    fetch(url)
      .then((res) => res.json())
      .then(datos => {
        //console.log(datos)
        return this.setState({
          peliculas: datos.results,

        })
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <>
        <div className="botones1">
          <form action="search-results.html" method="GET">
            <input className="formu" type="text" name="search" placeholder="Buscar..." value="" />
            <button type="submit">Enviar</button>
            <p className="mensaje"></p>
          </form>
        </div>
        <div><h2>Peliculas Populares</h2></div>
        <div>
          <section className="peliculas-populares">
            {this.state.peliculas.map(peliculas => (
              <Pelicula
                key={peliculas.id}
                peliculas={peliculas}
                favoritos={(peliculas) => this.handleFavoritos(peliculas)}
              />
            ))}
          </section>
        </div>
      </>
    )
  }
}
