//api integration with get ,delete, put and post methods

import React, { useEffect } from 'react'

function Hello() {

    useEffect(()=>{
     getProducts();
    },[])

    const getProducts = async ()=>{
        const response = await fetch('https://fakestoreapi.com/products/4'
        ,{
          method:"GET",         //to retrieve all products from that server
          body:JSON.stringify(
              {
                  title: 'test product',
                  price: 13.5,
                  description: 'lorem ipsum set',
                  image: 'https://i.pravatar.cc',
                  category: 'electronic'
              }
          )

          // method:"POST",  //TO Create a new task here 
          // body:JSON.stringify(
          //     {
          //         title: 'test product',
          //         price: 13.5,
          //         description: 'lorem ipsum set',
          //         image: 'https://i.pravatar.cc',
          //         category: 'electronic'
          //     }
          // )

      // method:"PATCH",   //SAME as put but this will modify the few properties of a task object
      //     body:JSON.stringify(
      //         {
      //             title: 'test product',
      //             price: 13.5,
      //             description: 'lorem ipsum set',
      //             image: 'https://i.pravatar.cc',
      //             category: 'electronic'
      //         }
      //     )


      // method:"DELETE" //WE HAVE TO PASS AND ID what we are delteting in url no other header will be there
          
        }

        
        )
        const data = await response.json()
        console.log(data);
    }
  return (
   <>
     
     
   </>
  )
}

export default Hello;