import React, { useState } from 'react'
import TwoChild from './TwoChild'
function OneParent() {
  

   const [Todos,setTodos] =useState(['item1','item2'])

   const addNew =(task)=>{
        setTodos([...Todos,task])
   }
  return (
    <>
     <TwoChild add={addNew} />
    <ul>

        {Todos.map((t)=>{
        return <li>{t}</li>})}
    </ul>
   
    
  
    
    </>
  )
}

export default OneParent