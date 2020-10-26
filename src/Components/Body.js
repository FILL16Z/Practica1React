import React from 'react';
import './Body.css';
//import { Button } from 'react-bootstrap';

function Body(props){ 
    return(
        <div className="Body">
            <p>
                {props.practica}
            </p>
            <br></br>     
            <ol>
                <li>{props.tema1}</li>
                <li>{props.tema2}</li>
                <li>{props.tema3}</li>
                <li>{props.tema4}</li>
                <li>{props.tema5}</li>
            </ol>
         <br></br>
             <button type="button" class="btn btn-outline-primary">Dale Click</button>            
        </div>
    )
}

export default Body;