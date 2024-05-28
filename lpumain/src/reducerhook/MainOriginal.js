import React, { useReducer } from 'react'

function setCount(pstate,action){

    if(action.type=='dec'){
        return pstate-action.payload;
    }
    else if(action.type=='inc'){
        return pstate+action.payload;
    }
    else if(action.type=='res'){
        return 0;
    }
    else{
        return pstate;
    }


}
function MainOriginal() {

   const [count,dispatch] =  useReducer(setCount,0);
  return (
    <>
    <button  onClick={()=>{
        dispatch({type:'dec',payload:2})
    }}>decrement</button>
    <h1>{count}</h1>
    <button onClick={()=>{
        dispatch({type:'inc',payload:2})
    }}>increment</button>

    <button onClick={()=>{
        dispatch({type:'res'})
    }}>Reset</button>
    </>
  )
}

export default MainOriginal