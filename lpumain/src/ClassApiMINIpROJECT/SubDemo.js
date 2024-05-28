import React from 'react'
import SubDemo2 from './SubDemo2'

function SubDemo({name,image,id,height,weight,setCondition}) {
  return (
    <>
    
    <div className='second'>

         <h2>id.{id}</h2>
        <h1>$ {name} $</h1>
        <img src={image} alt={name}/>
        <p>height: {height}</p>
        <p>weight: {weight}</p>
        <input type='button' value="knowmore" onClick={setCondition} />

</div>
    <div>

      <SubDemo2/>
      </div>   
    </>
    
  
    
    
  )
}

export default SubDemo