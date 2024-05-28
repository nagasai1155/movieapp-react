import React, { useMemo, useState } from 'react'

function ClassExample() {


    const [count,setCount] = useState(0);
    const [final,setFinal] = useState(1000)

    let isEven = useMemo(()=>{
        let i = 0;
        while(i<2000000){
            i++;
        }
        return count%2===0;
    },[count])

    let isODD = useMemo(()=>{
        let j = 0;
        while(j<2000000){
            j++;
        }
        return  final%2===0; 
    },[final])
  return (
    <>
    <h1>{count}</h1>

    <button onClick={()=>{
        return setCount(count+1);
        
    }}>update</button>
    <h1>{isEven?'even':'odd'}</h1>
    
    <h1>{final}</h1>
    <button onClick={()=>{
        return setFinal(final-1)
    }}>decrement</button>

    <h1>{isODD?'EVEN':'ODD'}</h1>
    </>
  )
}

export default ClassExample