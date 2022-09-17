import React, { Component } from 'react'
import Pelicula from '../../components/Pelicula/Pelicula';


 class Peliculas extends Component {
  constructor() {
    super();
    this.state = {
      peliculas: [],
      cargando: true,
      nexturl: "",
      filterBy: "",
      buscadas: [],
      favoritos: []

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
          peliculas: datos.results,

        })
      })
      .catch(err => console.log(err))
  }

  filtradoPeli(filtro){
    if (filtro == ""){
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
        <div className="botones1">
          <form>
            <input className="formu" type="search" name="search" placeholder="Buscar..." value={this.state.filterBy} onChange={(e)=>
              {this.handleChange(e)}} />
          </form>
        </div>
        {this.state.filterBy == "" ? <>
        <div>
          <h2>Peliculas Populares</h2>
        </div>
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
          {/* <button className='formu' onClick={() => this.agregarMas()}>Mas Peliculas</button> */}
        </div>
        </> : <>
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


export default Peliculas