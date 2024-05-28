import React, { useRef } from 'react'
import './Naga.css'
function Naga() {
  
   let man  =  useRef([])//multiple elements selecting with use ref


   function updataFinal(e){
    for(let elem of man.current){
        elem.classList.remove('container')
       
        //i want to remove the style for the current element and update the styles according to button click 
   }
   e.target.classList.add('container');
   }
  return (
    <>
    <h1 ref={(ele)=>{ man.current[0]= ele}} onClick={(eve)=>{
        updataFinal(eve);
    
    }}>heading 1 </h1>
    <h2 ref={(ele)=>{ man.current[1]= ele} }  onClick={(eve)=>{
        updataFinal(eve);
    }}>heading 2 </h2>
    <h3 ref={(ele)=>{ man.current[2]= ele}}  onClick={(eve)=>{
        updataFinal(eve);
    }} >heading 3 </h3>
    

    
    
    </>
  )
}

export default Naga