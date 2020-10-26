import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Body from './Components/Body';
import Footer from './Components/Footer';

function App() {
    return (
    <div className="App">
    <Body
    texto="Este es un texto"
    numero={100}
    booleano={false}
    arreglo={[1,2,3,4,5]}
    funcion={(num)=>num*2}
    objeto={{nombre:"Daniela", apellido:"Sánchez"}}
    etiqueta={<h3>Hola esta es una etiqueta</h3>}
    />
    </div>
    );
    }

export default App;