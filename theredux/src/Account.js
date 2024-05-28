import React from 'react'
import { useSelector } from 'react-redux'

function Account() {
    const data = useSelector((state)=>{
        return state;
    })
  return (
    <div className="container">
        <h2 className='text-primary'>Account details</h2>
        <table className="table table-bordered w-50">
            <thead>
                <tr>
                    <th>BALANCE</th>
                    <th>Name</th>
                    <th>mobilenumber</th>

                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{data.balance}</td>
                    <td>{data.name}</td>
                    <td>{data.mobilenumber}</td>
                </tr>
                <tr>
                    <td>{data.balance}</td>
                    <td>{data.name}</td>
                    <td>{data.mobilenumber}</td>
                </tr>
                <tr>
                    <td>{data.balance}</td>
                    <td>{data.name}</td>
                    <td>{data.mobilenumber}</td>
                </tr>
            </tbody>
        </table>
        </div>
  )
}

export default Account