import React, { Suspense, lazy, useState } from 'react'
import Ram from './Ram.js';

 lazy(()=>import('./Ram.js'));
function Joh() {
 const [show,setShow] = useState(true);
  return (
    <>
    <div>


        <h2>loading ..,....</h2>

        <button  onClick={()=>{
          setShow(false);
        


        }}>OPEN </button>
    </div>

    {show===!true && <Suspense>
        <Ram/>
        </Suspense>
        }
    
    </>
  )
}

export default Joh