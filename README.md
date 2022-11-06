![image](https://user-images.githubusercontent.com/93483481/200157537-d896e952-b7c3-4899-8132-2e09e952ba2a.png)


https://www.youtube.com/watch?v=rLoWMU4L_qE&list=PLB6KsGgo5nlb_GFAF1RRCFuJIPzeUuPNi&index=2&ab_channel=Fazt

<Product title="hola"/>
------------------------------------------------------------
import React from 'react'

function Product(props) {    
    console.log("props",props) //props-clg( {title: "hola"})
  return (
    <h1>Product</h1>
  )
}

export function Navbar() {
  return (
    <h2>Navbar</h2>
  )
}
    


export default Product //se exporta todo el componente

<input id="idHola "type="text" onChange={function(e){console.log(e.target.value+"...")}} />
<input id="idHola "type="text" onChange={(e)=>{console.log(e.target.value+"...")}} />
onDoubleClick={()=>{console.log("double click")}}
------------------------Fetch------------------------------------
<button onClick={()=>{
        fetch("https://jsonplaceholder.typicode.com/posts").then(res=>res.json()).then(data=>console.log(data)).catch(err=>console.log(err));
      }}>Get Data
</button>

pnpm add prop-types: "^15.8.1", //para validar los tipos de datos de las props
Button.propTypes = {
  text: PropTypes.string.isRequired,
};

pnpm add reac-icons/vsd,mui //mui Spotify amazon netflix unity
import { VscBug } from "react-icons/vsc";
        <VscBug />

useEffect(function () {
    console.log("useEffect");
  }); 
useEffect(() => {
    console.log("useEffect");
  }); 

useEffect(() => {
    console.log("useEffect");
  });// se ejecuta siempre que la pagina tenga alun cambio

useEffect(() => {
    console.log("useEffect");
  },[]);// se ejecuta solo una vez
