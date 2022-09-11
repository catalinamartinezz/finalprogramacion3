import React, { Component } from 'react'
import Card from '../../components/Card/Card';
class Peliculas extends Component {
  constructor() {
    super();
    this.state = {
      cargando: false,
      peliculas: [],
      filterBy:'',
      nexturl: "",
      favoritos: [],
    };
  }
  componentDidMount(){
    console.log(this.state.favoritos)  
    this.setState({favoritos: JSON.parse(localStorage.getItem('favoritos')) || []})
      const url = "https://api.themoviedb.org/3/tv/popular?api_key=809187852af3a04706d10c0477580eec"
    
      fetch(url)
          .then((res)=> res.json())
          .then(datos =>{ 
              //console.log(datos)
               return this.setState({
              cargando: true,
              peliculas: datos.results,
              nexturl: datos.info.next
          })})
          .catch( err => console.log(err)
      )
   }
  

    render() {
    return (
      <>
      
      
      
      
      </>
    )
  }
}

export default Peliculas