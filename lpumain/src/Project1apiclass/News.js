import React, { useEffect, useState } from 'react'

import "./App.css"
export default function  News() {
    const [data,setData] = useState([])
    const [search,setSearch] = useState("");
    const [page,setPage] = useState()
const fetchData =async ()=>{
        const data =await fetch(`https://newsapi.org/v2/everything?q=${search}&from=2023-12-20&sortBy=publishedAt&apiKey=d6c3f800582a4b13984ae2d099576468`)
        const response = await data.json()
        setData(response.articles)
     }
useEffect(()=>{
 
 fetchData();
 
},[search])
const handleSubmit = (e)=>{
    e.preventDefault();
    fetchData()
}



  return (
    <>
    <form className='form' onSubmit={handleSubmit}>
        <input placeholder='Enter search query'style={{background:'lightgreen'}} className='input' type="text" value={search} onChange={(e)=>setSearch(e.target.value)} />
        <button className='btnn'>Search</button>
       </form>
    <div className='main'>
       
       {data ? (
        <ul className='container'>
        {data.map((item,index)=>(
          <Products key={index} title={item.title} description={item.description} img ={item.urlToImage} url={item.url}/>
        ))}
       </ul>
       ):(
        <div>
            <h1>Please enter a query to make a search</h1>
        </div>
       )}
   
  </div>
    </>
  
    
  )
}