import React from 'react'

function Product(props) {    
    console.log("props",props)
  return (
    <>
    <h1>Product</h1>
    <p>{props.title}</p>
    </>

  )
}

export function Navbar({navBar="default",name="default",apellido="default"}) {
  return (
    <>
    <h2>Navbar</h2>
    <p>{navBar}</p>
    <p>{name}</p>
    <p>{apellido}</p>
    </>
  )
}
    


export default Product //se exporta todo el componente