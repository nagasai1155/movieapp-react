import React from 'react';
import './Main.css';
export function SubMain({author,title,urlToImage,url}){
    return(


        <>
      <div className='card'>
      <h1>author:{author?author.slice(0,25):"no author"}</h1>
        <h1>title:{title?title.slice(0,23):"title not there"}</h1>
        <img src={urlToImage}/>
        <h3>url:{url}</h3>
        
      </div>
        </>
    )
}