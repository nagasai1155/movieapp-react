import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

function Form() {

    let dispatch = useDispatch()
 const [amount,setAmount] =    useState('');
 const [fullname,setFullName]= useState('');
 const[mobileupdate,setMobileupdate] = useState('');
  return (
    <div className='container'>
        <h1>Form </h1>
        <div className='row'>
            <div className='col-4'>
                <input className='form-control' type='number'  value={amount} placeholder='enter amount'
                onChange={(e)=>{
                    let val = e.target.value;
                    setAmount(val);

                }}
                
                />
            </div>
            <button className='btn btn-primary col-1'
            
            onClick={()=>{
                dispatch({type:'deposite' , payload:amount});
                setAmount('');
            }}>deposite</button>


<button className='btn btn-danger  mx-2  col-1'
            
            onClick={()=>{
                dispatch({type:'withdraw' , payload:amount});
                setAmount('');
            }}>withdraw</button>
        </div>

        


        <div className='row mt-3' >
            <div className='col-4'>
                <input className='form-control' type='text'  value={fullname} placeholder='enter name'
                onChange={(e)=>{
                    let val = e.target.value;
                    setFullName(val);

                }}
                
                />
            </div>
            <button className='btn btn-primary mx-2 col-1'
            
            onClick={()=>{
                dispatch({type:'name' , payload:fullname});
                setFullName('');
            }}>update</button>



        
        </div>



<div className='row mt-4'>
            <div className='col-4'>
                <input className='form-control' type='number'  value={mobileupdate} placeholder='enter phone number'
                onChange={(e)=>{
                    let val2 = e.target.value;
                    setMobileupdate(val2);

                }}
                
                />
            </div>
            <button className='btn btn-primary mx-2 col-1'
            
            onClick={(e)=>{
                e.preventDefault();
                dispatch({type:'mobileupdate' , payload:mobileupdate});
                setMobileupdate('');
                
            }}>addphone</button>



        

        </div>

        
        </div>
  )
}

export default Form