import React, { useState } from 'react'
import Child from './Child'

function Parent() {

  const [data,setData] = useState(['item','nagasai'])
  const addN=(task)=>{
    setData([...data,task])
  }
  
  console.log(data);
  return (
   <>
    <Child  data={addN}  />

    {data.map((d)=>{
        return <li>{d}</li>
    })}
   
   
   </>
  )
}

export default Parent