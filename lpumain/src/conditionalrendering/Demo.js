import React, { useState } from 'react'
import Form from './Form';
function Demo() {

     const [show,setShow] = useState(false);
  return (
    <>

    <h1>conditional rendering </h1>
    <form>
       
        <button onClick={(e)=>{
            e.preventDefault();
          setShow(!show);
        }}>OPEN</button>
    </form>
     {show && <Form/>}
    </>
  )
}

export default Demo