import React, { useMemo, useState } from 'react';

function First(){


    const [counter,setCounter]= useState(0);
let n= 3;
let h = 33;

  let result =   useMemo(()=>{
   return n+h;
    },[n,h])
    console.log(result);

    return (

        <>
        
        <h1>{counter}</h1>
        <button  onClick={()=>{
            setCounter(counter+1)
        }}>updatacounter</button>
        
        <h1>{result}</h1>
        
        </>
    )

}
export default First;