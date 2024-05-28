import React, { useEffect, useState } from 'react'
import SubDemo from './SubDemo';
import './Demo1.css'
function Demo1() {

    const [polo,setPolo] = useState([]);

    async function Main (){

        let response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20")
        let finalResponse = await response.json();
        function getAllPokemon(x){
        x.map(async(item1,index)=>{
            let response1 = await fetch(`https://pokeapi.co/api/v2/pokemon/${item1.name}/`)
            let finalResponse1 = await response1.json();
            setPolo((prev)=>[...prev,finalResponse1]);
        })
        }
        getAllPokemon(finalResponse.results);
       
    }

 
    console.log(polo);
   
    useEffect(()=>{
        Main();
        
     
    },[])
  return (
    <>
    {/* <div>

        {finalResponse && (<img src={finalResponse1[0].sprites.other.dream_world.front_default}/>)}
    </div> */}
    <div className='first'>
        

        {
            polo.map((item,index)=>{
             return  <SubDemo  key={index}   id={item.id} name={item.name}  image={item.sprites.other?item.sprites.other.dream_world.front_default:""}/>  
            })
}

      
    </div>
    
    
    
    </>
  )
}

export default Demo1