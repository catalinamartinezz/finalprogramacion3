import React, { Component } from 'react'
import Cartel from '../../components/Cartel/Cartel';
import Pelicula from '../../components/Pelicula/Pelicula';

export default class Cartelera extends Component {
    constructor() {
        super();
        this.state = {
          cartel: [],
          cargando: true,
          filterBy:"",
          buscadas: [],
       
          
        };
      }    
    componentDidMount(){
     
            fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=809187852af3a04706d10c0477580eec')
        .then((res)=> res.json())
             .then(datos =>{ 
                 //console.log(datos)
                  return this.setState({
                 cartel: datos.results,
                
             })})
             .catch( err => console.log(err))
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
        <h2>Cartelera</h2>
      <section className="peliculas-cartelera">
      {this.state.cargando === false ? (
        <p>Cragando...</p>
      ) : (
      this.state.cartel.map(cartel => (
          <Cartel key={cartel.id} cartel={cartel}/>
      )))}
      </section>
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
      </>}</>
    )
  }
}
