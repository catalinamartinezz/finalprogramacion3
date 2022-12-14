import React, { Component }from 'react'
import Pelicula from '../../components/Pelicula/Pelicula';
import Cartel from '../../components/Cartel/Cartel';
import './Home.css'
import { Link } from 'react-router-dom'


class Home extends Component {
  constructor() {
    super();
    this.state = {
      cargando: true,
      peliculas: [],
      cartel: [],
      favoritos: [],
      filterBy: "",
      buscadas: []

    };
  }
  componentDidMount() {
    this.setState({favoritos: JSON.parse(localStorage.getItem('favoritos')) || []})
    const url = 'https://api.themoviedb.org/3/movie/popular?api_key=809187852af3a04706d10c0477580eec'
    fetch(url)
      .then((res) => res.json())
      .then(datos => {
        console.log(datos)
        return this.setState({
          peliculas: datos.results.slice(0, 6),

        })
      })
      .catch(err => console.log(err))

    fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=809187852af3a04706d10c0477580eec')
      .then((res) => res.json())
      .then(datos => {
        //console.log(datos)
        return this.setState({
          cartel: datos.results.slice(0, 6),

        })
      })
      .catch(err => console.log(err))
  }

  filtradoPeli(filtro){
    if (filtro === ""){
      return 
    } else {
      fetch(`https://api.themoviedb.org/3/search/movie/?api_key=809187852af3a04706d10c0477580eec&query=${filtro}`)
      .then((res) => res.json())
      .then(datos => {
        this.setState({
          buscadas: datos.results,
        })
      })
      .catch(err => console.log(err))
      
    }
  }

  handleChange(e){
    this.setState({
      filterBy: e.target.value
    }, ()=>{this.filtradoPeli(this.state.filterBy)})
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
    handleFavoritosCartel(cartel) {
      if (this.state.favoritos.some(fav => cartel.id === fav.id)) {
        console.log("verdadero")
        this.setState({ favoritos: this.state.favoritos.filter(item => item.id !== cartel.id) }, () => {
          localStorage.setItem('favoritos', JSON.stringify(this.state.favoritos))
          //texto quitar de favoritos
        })
        console.log(this.state.favoritos.filter(item => item.id !== cartel.id))
      } else {
        this.setState({ favoritos: [...this.state.favoritos, cartel] }, () => {
          localStorage.setItem('favoritos', JSON.stringify(this.state.favoritos))
          //texto quitar de favoritos 
        })
      }
  }
  render() {
    return (
      <>
        <div className="botones1">
          <form >
            <input className="formu" type="search" name="search" placeholder="Buscar..." value={this.state.filterBy} onChange={(e)=>
              {this.handleChange(e)}}/>
          </form>
        </div>
        {this.state.filterBy === "" ?<>
        <div >
        <h2>Peliculas Populares</h2>
        <Link to={'/peliculas'}>
          <p>Ver todas</p>
        </Link>
          
        </div>
        <div>
          <section className="peliculas-populares">
          {this.state.cargando === false ? (
            <p>Cargando</p>
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
        <div>
        <h2>Cartelera</h2>
        <Link to={'/cartelera'}>
          <p>Ver todas</p>
        </Link>
          
        </div>
        <div>
          <section className="peliculas-cartelera">
            {this.state.cartel.map(cartel => (
              <Cartel 
              key={cartel.id} 
              cartel={cartel}
              favoritos={(cartel) => this.handleFavoritos(cartel)}
              />
            ))}
          </section>
        </div>
        </>: <>
        <div>
          <section className="peliculas-populares">

            {this.state.buscadas.map(buscada => (
              <Pelicula
                key={buscada.id}
                peliculas={buscada}
                favoritos={(buscada) => this.handleFavoritos(buscada)}
              />
            ))}
          </section>
        </div>
        </>}
      
      </>
    )
  }
}
export default Home