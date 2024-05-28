import React, { useRef } from 'react'
import './Naga.css'
function Naga1() {
  let arr = new Array(5).fill(null)
 let again =  useRef([]);

 function updateAnd(e){
  for( let elel of again.current){
    elel.classList.remove('container');
  }
  e.target.classList.add('container');
  
 }
  return (
    <>
    {arr.map((e,i)=>{
      return(
        <>
        <h1 ref={(ag)=>{again.current[i]=ag}} onClick={(eve)=>{
          updateAnd(eve)
        }}> heading {i+0}</h1>
        </>
      )
    })}
    
    </>
  )
}

export default Naga1