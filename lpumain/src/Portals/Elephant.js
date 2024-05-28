import React, { useState } from 'react'

import './Modal.css';

function Modal(props){
    return(
        <>
   
        
        <div className='first'>
        <div className='second'>
            <h2>this is modal component click close button to close this </h2>
            <button onClick={props.close}>close</button>
        </div>
        </div>
        
        </>
    )
}
function Elephant() {
   const [show ,setShow] =  useState(false);
   

   function showData(){
    setShow(!show);
   }
  return (
   <>
   <div className="third">
    <button onClick={showData}>OPEN</button>
 
    </div>
   {show && <Modal close={showData}></Modal>}
  
   </>
  )
}

export default Elephant