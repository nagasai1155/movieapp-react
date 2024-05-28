import React, { useEffect, useState } from 'react'
// import Vegetable from './Vegetable';
import { useGetApi } from './Vegetable'
function Fruit() {
   let end= useGetApi()
  return (
    <>
    <h1>{Object.keys(end)}</h1>
<div>{end.title}</div>
<h1>{end.id}</h1>

{/* {update.map((ele,index)=>{
    return <Vegetable key={index} {...ele} />
})}
    */}
   
    
    </>
  )
}

export default Fruit