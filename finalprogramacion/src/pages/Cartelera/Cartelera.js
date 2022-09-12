import React, { Component } from 'react'
import Cartel from '../../components/Cartel/Cartel';

export default class Cartelera extends Component {
    constructor() {
        super();
        this.state = {
          cartel: [],
          
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
     
    render() {
    return (
      <>
      <div>
        <h2>Cartelera</h2>
      {this.state.cartel.map(cartel => (
          <Cartel key={cartel.id} cartel={cartel}/>
      ))}
      </div>
      </>
    )
  }
}