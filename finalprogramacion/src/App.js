import React from 'react'
import {Route, Switch} from 'react-router-dom'
import './App.css';
import Footer from './components/Footer/Footer';
import Nav from './components/Nav/Nav';
import Home from './pages/Home/Home'
import Favs from './pages/Favs/Favs'
//import DetallePeli from './pages/DetallePeli/DetallePeli'
import NotFound from './pages/NotFound/NotFound'


function App() {
  return (
    <>
    <Nav/>
    <Switch>
          <Route path="/" exact  >
            <Home />
          </Route>
          <Route path="/favs" component={Favs} />
          {/* <Route path="/detallepelicula/id/:id" component={DetallePeli} /> */}
          <Route component={NotFound}/>
        </Switch>
    <Footer/> 
    </>
  );
}

export default App;
