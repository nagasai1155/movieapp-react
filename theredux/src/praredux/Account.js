import React from 'react'
import { useSelector } from 'react-redux'

function Account() {
   const data =  useSelector((state)=>{
    return state;
   });
   console.log(data);

  return (
   <>
   
   <div>
    <table className="table table-bordered w-50">
        <thead>
            <tr>
                <th>username</th>
                <th>password</th>
                <th>amount</th>
            </tr>
        </thead>
        <tbody>
       

            {/* {data.map((ele,index)=>{
                return <tr key={index}>
                    <td>{ele.data.balance}</td>
                    <td>{ele.data.password}</td>
                    <td>{ele.data.username}</td>
                </tr>
            })} */}
            <tr>
                <td>{data.account.username}</td>
                <td>{data.account.password}</td>
                <td>{data.account.balance}</td></tr>
               </tbody>
               </table>
            <table  className="table table-bordered w-50">
            
                <thead>
                    <tr>
                        <th>amount</th>
                        <th>type</th>
                        <th>time</th>
                    </tr>
                </thead>
            {data.transaction.map((ele,index)=>{
                return <tr key={index}>
                    <td>{ele.amount}</td>
                    <td>{ele.type}</td>
                    <td>{ele.time.toLocaleString()}</td>
                </tr>
            })}
            
       
            </table>
    
    </div>
    
    
    </>
  )
}

export default Account