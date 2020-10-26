import React,{Component} from 'react';
import './App.css';
import Banner from './Components/Banner';
import Header from './Components/Header';
import Body from './Components/Body';
import Footer from './Components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App(){ 
  return (
    <div className="App">
      <Banner
          texto="Desarrollo de Aplicaciones para Dispositivos Móviles"
      />
      <Header/>
      <Banner
          texto="26/Oct/2020"
      />    
      <Body
          practica="Práctica 1 - Unidad 2"
          tema1="Tipos de componentes"
          tema2="Contenedores"
          tema3="Usar mas de un componente"
          tema4="Funciones"
          tema5="Props"
      />
      <Footer
         pie="Copyright &copy; Todos los derechos reservados"
      />
    </div>
  );
}
export default App;


