import React, { useState } from 'react'

function Form(props) {
  const[product,setProduct] =   useState(props.data);

  let changeFormDate= (e)=>{
    {
      const {name,value} = e.target;

  setProduct({...product,[name]:value});

    }
  }
  return (
    <>

    <div className='form-overlay'>
        <form>
            <div className='form-group'>
                <label>Name</label>
                <input type='text'
                 onChange={changeFormDate}
                className='form-control mt-2' name='name'  placeholder="product name"  value={product.name}/>
            </div>
            <div className='form-group '>
                <label>price</label>
                <input  type='number' className='form-control mt-2' name='price' value={product.price}
                 onChange={changeFormDate}
                placeholder="product price" />
            </div>

            <div className='form-group'>
                <label>category</label>
                <select className='form-control mt-2' name="category" value={product.category}
                
                onChange={changeFormDate}>
                     <option value='-1'>

                     </option>
                     <option value={'mobiles'}>mobiles</option>
                     <option value={'mobiles'}>mobiles</option>
                     <option value={'laptops'}>laptops</option>
                     <option value={'tv'}>tv's</option>

                </select>
            </div>
            <button className='btn btn-primary float-end' 
            
            onClick={(e)=>{
                e.preventDefault();
            props.add(product)
                

            }}
            >send</button>
            <button className='btn btn-danger float-end'
            onClick={(e)=>{
                e.preventDefault();
                props.closeForm();
                
            }}
            >cancel</button>
        </form>
    </div>
    
    </>
  )
}

export default Form