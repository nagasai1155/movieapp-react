import React, { useRef, useState } from 'react'



//this is all about data capturing from form into console or in dom
function First() {

  const [email,setEmail] =   useState('');
 const [password,setPassword]= useState('');

  const pwd = useRef('');

  const handleSubmit= ()=>{
    
  }
  return (
    <>


    <div>

        <form onSubmit={(e)=>{
            e.preventDefault();
        }}>
             <label>Email:</label>
            <input  type='email' placeholder='enter gmail' value={email}  onChange={(e)=>{
                e.preventDefault();
                setEmail(e.target.value);
                if (email === ''){
                    alert("empty")
                }

            }}/>
            <h1>{email}</h1>
             <br/>         
             <label>password:</label>
            <input type='password'  placeholder='enter password' ref={pwd}  onChange={(e)=>{
                e.preventDefault();
                setPassword(e.target.value);
                
            }}/><br/>
            {<h1>{password}</h1> }

            <button  onClick={handleSubmit}>Login</button>
        </form>

    </div>
    
    </>
  )
}

export default First