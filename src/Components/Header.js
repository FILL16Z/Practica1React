import React,{Component} from 'react';
import './Header.css'
import logotec from '../logotec.jpg';

class Header extends Component{
    render(){
        return(
            <div className="Header">
                <img src={logotec} className="App-logo" alt="logtec" />
              
            </div>
        );
    }
}

export default Header;
