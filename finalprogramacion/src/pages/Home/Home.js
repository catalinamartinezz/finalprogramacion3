import React, { Component } from 'react'
import Pelicula from '../../components/Pelicula/Pelicula';
import Cartel from '../../components/Cartel/Cartel';
import './Home.css'


class Home extends Component {
    constructor() {
        super();
        this.state = {
          peliculas: [],
          cartel: [],
          favoritos: [],
          cargando: true,
          
        };
      }    
    componentDidMount(){
         let favs = localStorage.getItem('favoritos')
         console.log(favs)
        const url = 'https://api.themoviedb.org/3/movie/popular?api_key=809187852af3a04706d10c0477580eec'
         fetch(url)
             .then((res)=> res.json())
             .then(datos =>{ 
                 //console.log(datos)
                return this.setState({
                peliculas: datos.results.slice(0,6),
                
             })})
             .catch( err => console.log(err))
        
            fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=809187852af3a04706d10c0477580eec')
        .then((res)=> res.json())
             .then(datos =>{ 
                 //console.log(datos)
                  return this.setState({
                 cartel: datos.results.slice(0,6),
                
             })})
             .catch( err => console.log(err))
      }
     
    handleFavoritos(pelicula){
      if(this.state.favoritos.some(fav => pelicula.id === fav.id)){
        console.log("verdadero")
        this.setState({favoritos: this.state.favoritos.filter(item => item.id !== pelicula.id)}, ()=>{
          localStorage.setItem('favoritos', JSON.stringify(this.state.favoritos))
          //texto quitar de favoritos
        })
        console.log(this.state.favoritos.filter(item=>item.id !== pelicula.id))
      }else{
        this.setState({favoritos: [...this.state.favoritos, pelicula]}, ()=> {
          localStorage.setItem('favoritos', JSON.stringify(this.state.favoritos))
          //texto quitar de favoritos 
        })
      }
    }
    render() {
    return (
      <>
      <div >
        <h2>Peliculas Populares</h2>
      {this.state.cargando === false ? (
        <p>Cargando...</p>
      ) : (
      this.state.peliculas.map(peliculas => (
          <Pelicula 
            key={peliculas.id} 
            peliculas={peliculas}
            favoritos={(peliculas)=> this.handleFavoritos(peliculas)}
            />
      )))}

      </div>
      <div>
        <h2>Cartelera</h2>
      {this.state.cargando === false ? (
          <p>Cargando...</p>
      ) : ( 
      this.state.cartel.map(cartel => (
          <Cartel key={cartel.id} cartel={cartel}/>
      )))}
      </div>
      </>
    )
  }
}
export default Home