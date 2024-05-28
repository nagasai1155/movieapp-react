import React, { useContext } from 'react'
import {final} from './ContextP'


function Fog() {


  let flower=   useContext(final)
  return (
    <div>

        <h1>{flower.name}</h1>
        <h1>{flower.name1}</h1>
    <h1>{flower.name2}</h1>
    </div>

    
  )
}

export default Fog