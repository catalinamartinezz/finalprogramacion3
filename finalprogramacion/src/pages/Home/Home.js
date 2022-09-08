import React, { Component } from 'react'

class Home extends Component {
    constructor() {
        super();
        this.state = {
          cargando: false,
          peliculas: [],
          filterBy: '',
          nexturl: "",
          favoritos: []
        };
      }    
    componentDidMount(){
        this.setState({favoritos:localStorage.getItem('favoritos') || []})
         const url = 'https://api.themoviedb.org/3/tv/popular?api_key=809187852af3a04706d10c0477580eec'
         fetch(url)
             .then((res)=> res.json())
             .then(datos =>{ 
                 console.log(datos)
                  return this.setState({
                 cargando : true,
                 personajes: datos.results,
                 nexturl: datos.info.next
             })})
             .catch( err => console.log(err))
      }
     
    render() {
    return (
      <div>Home</div>
    )
  }
}
export default Home