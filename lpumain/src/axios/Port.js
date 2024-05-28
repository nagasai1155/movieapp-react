import React, { useEffect } from 'react'
import axios from 'axios';
function Port() {

   useEffect(()=>{
    Ared();
   })
   async function Ared (){
        const response = await axios.delete('https://fakestoreapi.com/products');
        console.log(response.data);
    }

  return (
   <>

   <h1>this axios </h1>
   </>
  )
}

export default Port