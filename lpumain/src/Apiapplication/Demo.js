import React, { useEffect } from 'react';
import { useState } from 'react';
import Dog from './Dog.js';
import './Demo.css'
import ff from './free.jpeg'
export function Demo(){
const [products,updateProducts] = useState([]);


async function Productlist(){
     let response=   await fetch("https://fakestoreapi.com/products")
     let geteed = await response.json();
     updateProducts(geteed);

}

useEffect(()=>{
    Productlist();
},[])

console.log(products)


    return(
        <>
        <img src={ff} style={{width:60,float:'right',marginTop:26}}/>
        <div className='nac'>
            <nav>
                <a href='/' >Home</a>
                <a href='/' >About Us</a>
                <a href='/' >Products</a>
                <a href='/' >Information</a>

            </nav>
        </div>
        <div className='productlistget'>
        {products.map((ele,index)=>{
            return <Dog key={index} {...ele}></Dog>
        
        })}
     
        </div>
        </>
    )
}
