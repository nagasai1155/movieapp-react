import React from 'react'
import Product from './Product'

function ProductList({data}) {
  return (
<>
       <h1>this is productlist component</h1>
       <h1>data:{data}</h1>
       <Product  data={data}/>

</>

    )
}

export default ProductList