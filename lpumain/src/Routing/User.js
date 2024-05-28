import React from 'react'

import { Outlet ,Link, useParams} from 'react-router-dom'
function User() {
    let params = useParams();
    console.log(params);
   
  return (
    <>
    <h2>this is user component</h2>
    <button ><Link to='subuser' element={<SubUser1/>}>subuser</Link></button>
<button ><Link to='subuser1' element={<SubUser1/>}>SubUser1</Link></button>
    <Outlet/>

    </>
  )
}

export default User

 export function SubUser(){
    return(
        <>
        <h2>subuser</h2>
        
        
        </>
    )
}

export function SubUser1(){
    return (
        <>
       

        <h2>hello this is subuser1</h2>
        </>
    )
}