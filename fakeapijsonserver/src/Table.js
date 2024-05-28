import React from 'react'

function Table(props) {
  return (
    <>
    <table className='table m-3'>
        
 <thead>
    <tr>
        <th>ID</th>
        <th>NAME</th>
        <th>PRICE</th>
        <th>CATEGORY</th>
    </tr>
 </thead>
 <tbody>
    {
        props.products.map((ele,i)=>{
                return <tr key={i.id}>
                    <td>{ele.id}</td>
                    <td>{ele.name}</td>
                    <td>{ele.price}</td>
                    <td>{ele.category}</td>
                    <td>
                      <button className='btn btn-primary m-2'
                      onClick={()=>{
                        props.edit(ele);
                      }}
                      
                      
                      >Edit</button>
                      <button className='btn btn-danger' 
                      onClick={()=>{
                        props.delete(ele.id);
                      }}
                      >Delete</button>
                    </td>
                </tr>
        })
    }
 </tbody>


    </table>
    
    </>
  )
}

export default Table