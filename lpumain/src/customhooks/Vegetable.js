import React from 'react'
import { useState,useEffect } from 'react'
function Vegetable({id,title,image}) {
  return (
    <>
    {/* <h2>title:{title}</h2>
    <h2>id:{id}</h2>
    <img src={image} style={{width:100 ,height:200}}></img> */}
    </>
  )
}

export default Vegetable

 export  function useGetApi(){
    const [update,setUpdate] = useState({})
    async function updataDate(){
        const data = await fetch("https://fakestoreapi.com/products?limit=5")
        const finalData = await data.json();
        console.log(finalData);
        setUpdate(finalData)
    }
        useEffect(()=>{
            updataDate();
    
        },[])

        return update;
}