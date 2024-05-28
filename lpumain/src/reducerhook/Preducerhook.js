import React, { useReducer } from 'react'


function counterFun(pstate,action){
    console.log(pstate,action);
    return pstate+action;

}
function Preducerhook() {
   const[count,dispatch]=  useReducer(counterFun,0);
  return (

    <>
      <button onClick={()=>dispatch(-1)} >-</button>
      <h1>{count}</h1>
      <button onClick={()=>{dispatch(1)}}>+</button>
    
    </>
   
  )
}

export default Preducerhook