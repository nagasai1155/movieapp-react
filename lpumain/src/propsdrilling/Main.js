import React from 'react'
// import Product from './Product'
import ProductList from './ProductList'
import './Main.css'
function Main({data}) {
  return (
    <>
<>
     <h1>this is main component </h1>
     <h1>data:{data}</h1>

</>     
     <ProductList  data={data}/>
    </>
   
  )
}

export default Main