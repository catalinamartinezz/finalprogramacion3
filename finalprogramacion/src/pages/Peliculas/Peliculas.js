import React, { Component } from 'react'
import Pelicula from '../../components/Pelicula/Pelicula';


 class Peliculas extends Component {
  constructor() {
    super();
    this.state = {
      peliculas: [],
      cargando: true,
      nexturl: ""

    };
  }
  componentDidMount() {
    const url = 'https://api.themoviedb.org/3/movie/popular?api_key=809187852af3a04706d10c0477580eec'
    fetch(url)
      .then((res) => res.json())
      .then(datos => {
        console.log(datos)
        return this.setState({
          peliculas: datos.results,

        })
      })
      .catch(err => console.log(err))
  }

  agregarMas(){
    const url = this.state.nexturl
    fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      this.setState({
        nexturl: data.info.next, 
        peliculas: this.state.peliculas.concat(data.results)
      })
    })
    .catch( e => console.log(e))
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
        <button className='formu' onClick={() => this.agregarMas()}>Mas Peliculas</button>
        <div><h2>Peliculas Populares</h2></div>
        <div>
          <section className="peliculas-populares">
            {this.state.cargando === false ? (
              <p>Cargando...</p>
            ) : (
            this.state.peliculas.map(peliculas => (
              <Pelicula
                key={peliculas.id}
                peliculas={peliculas}
                favoritos={(peliculas) => this.handleFavoritos(peliculas)}
              />
            )))}
          </section>
        </div>
      </>
    )
  }
}


export default Peliculas