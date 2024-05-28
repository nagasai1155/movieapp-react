import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

function Form() {
  let dispatch =   useDispatch();
 const [uname,setUname]= useState('');
 const [password,setPassword] = useState('');
 const [amount,setAmount] = useState('');
  return (
    <>
    <div className='container'>

        <div className='from-control' >
            <h2 className='text-primary'> FORM</h2>

            <input className='col-4' type='text' value={uname}  placeholder='enter username'
            onChange={(e)=>{
             let valu = e.target.value;
             setUname(valu);
            }}
            
            />
            <button className='btn btn-primary'
            onClick={()=>{
                dispatch({type:'updatename',payload:uname})
                setUname('');
            }}
            
            >ADD</button>




        </div>

        <div className='form-control'>

            <input className='col-4' type='password' placeholder='enter password' value={password}
            onChange={(e)=>{
                let val = e.target.value;
                setPassword(val);
            }}
            
            
            />
            <button  className='btn btn-danger '
            
            
            onClick={()=>{
                dispatch({type:'password',payload:password});
                setPassword('');
            }}>add</button>

        </div>


        <div className='form-control'>
            <input  className= 'col-3' type='number' placeholder='enter amount' value={amount}
            
            onChange={(e)=>{
              let val =   e.target.value;
              setAmount(val);
            }}/>
            <button className='btn btn-secondary'
            onClick={()=>{
                dispatch({type:'deposite',payload:amount});
                dispatch({type:'add',payload:{
                    amount:amount,
                    type:'deposite',
                    time:new Date()//we can write .toLocaleString();
                }})
                setAmount('')
            }}
            
            >DEPOSITE</button>
            <button className='btn btn-danger '
            
            onClick={()=>{
                dispatch({type:'withdraw',payload:amount});
                dispatch({type:'add',payload:{
                    amount:amount,
                    type:'withdraw',
                    time:new Date()
                }})
                setAmount('')
            }}

            >Withdraw</button>

        </div>
    </div>
    
    
    
    </>
  )
}

export default Form