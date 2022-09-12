import React, { Component } from 'react'
import Pelicula from '../../components/Pelicula/Pelicula';
import './Home.css'


class Home extends Component {
    constructor() {
        super();
        this.state = {
          peliculas: [],
          
        };
      }    
    componentDidMount(){
         const url = 'https://api.themoviedb.org/3/movie/popular?api_key=809187852af3a04706d10c0477580eec'
         fetch(url)
             .then((res)=> res.json())
             .then(datos =>{ 
                 console.log(datos)
                  return this.setState({
                 peliculas: datos.results.slice(0,6),
                
             })})
             .catch( err => console.log(err))
      }
     
    render() {
    return (
      <>
      {this.state.peliculas.map(peliculas => (
          <Pelicula key={peliculas.id} peliculas={peliculas}/>
      ))}
      </>
    )
  }
}
export default Home