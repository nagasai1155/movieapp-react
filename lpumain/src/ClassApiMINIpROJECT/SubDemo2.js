import React from 'react'

export default function SubDemo2({height,weight,setCondition}) {
  return (
    <div className='modal'>
        <h1>Height: {height}</h1>
        <h1>weight:{weight}</h1>
        <button onClick={()=>setCondition(false)}>close</button>
    </div>
  )
}