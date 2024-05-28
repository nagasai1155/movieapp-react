import React from 'react'
import {context,useContext} from './Context.js';

function SubContext() {
    let data = useContext(context);


  return (
    <>
    <h2>{data.name}</h2>
    <h2>{data.price}</h2>
    </>
  )
}

export default SubContext