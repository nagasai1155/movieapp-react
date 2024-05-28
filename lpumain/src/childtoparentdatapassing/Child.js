import React, { useState } from 'react'

function Child(props) {

  const [input,setInput] =   useState()
  return (
    <>
    <input  value={input}  onChange={(e)=>{
        setInput(e.target.value)
    }} />

    <button onClick={()=>{
            props.data(input)
    
    }}>addTODO</button>
    
    
    </>
  )
}

export default Child