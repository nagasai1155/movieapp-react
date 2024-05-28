
import React, { useState } from 'react';

function ThreeParent(){

  const [change,setChange] = useState(['item1','item2'])
 const [nitem,setNitem]=  useState('')
  const addNew=()=>{
    setChange([...change,nitem])
  setNitem('')
  }

 const uDelete= (index)=>{
  const ulist = [...change];
  ulist.splice(index,1);
  setChange(ulist);

 }
  return(

    <>
    
    <input  value={nitem} onChange={(e)=>{
      setNitem(e.target.value);
    }} />

    <button onClick={addNew}>add</button>

    {change.map((i,index)=>{
     return(
      <><li>{i}</li>
      <button onClick={()=>{uDelete(0)}}>❌</button></>
     )
      
    })}
    </>
  )
}
export default ThreeParent;