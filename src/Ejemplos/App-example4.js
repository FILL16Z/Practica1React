import React,{Component, Fragment} from 'react';


class App extends Component{
  render(){
    const peliculas=[
      {id:1001,title:"Back to the Future",year:1985},
      {id:1652,title:"Home Alone",year:1990},
      {id:1734,title:"Titanic",year:1997},
      ]
      return (
        <>
         {
           peliculas.map((p,index)=>{
            return <Fragment key={index}>
                    <h1>Id: {p.id}</h1>
                    <h1>Titulo: {p.title}</h1>
                    <h1>Año: {p.year}</h1>
                  </Fragment>
           })
         } 
        </>
    )};
}

export default App;
