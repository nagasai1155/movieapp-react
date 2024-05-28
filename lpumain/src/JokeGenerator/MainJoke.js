import React, { useEffect, useState } from 'react';


function MainJoke() {
  const [joke, setJoke] = useState(" ");
  
async function fetchJoke(){
  const res = await fetchJoke("https://api.chucknorris.io/jokes/random");
  const response = await res.json();
  setJoke(response);
}
useEffect(()=>{
fetchJoke();
},[]);

  return (

    <div>
   
      <h1>Random Joke Generator</h1>
      <button onClick={fetchJoke}>Get Joke</button>
      <p>joke:{joke}</p>
      
    </div>
  );
}
export default MainJoke;