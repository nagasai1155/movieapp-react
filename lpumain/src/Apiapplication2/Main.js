import React from 'react';
import './Main.css';
import { SubMain } from './SubMain';
import { useState,useEffect } from 'react';
export function Main (){
      

    let [counters,updateCounters] = useState([]);

    async function datalist(){
        let xresponse = await fetch('https://newsapi.org/v2/everything?q=tesla&from=2023-12-20&sortBy=publishedAt&apiKey=d6c3f800582a4b13984ae2d099576468')
        let yusefulresponse = await xresponse.json();
        
         updateCounters(yusefulresponse.articles);
    }
    useEffect(()=>{
        datalist(); 
    },[])

   console.log(counters)
    return(
        <>
        <div className='nav'>
            <input className='input' placeholder='searchbar'/>
            <button>search</button>
        </div>
       <div className='main'>
       {counters.map((ele,index)=>{
              return <SubMain {...ele}></SubMain>
        })}
       </div>
        </>
    )
}