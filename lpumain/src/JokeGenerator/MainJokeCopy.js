import React, { useEffect, useState } from 'react';

function MainJokeCopy() {
  const [joke, setJoke] = useState("");

  async function fetchJoke() {
  
      const res = await fetch("https://api.chucknorris.io/jokes/random");
      const data = await res.json();
      setJoke(data.value);
   
  }

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <div>
      <h1>Random Joke Generator</h1>
      <button onClick={fetchJoke}>Get Joke</button>
      <p>Joke: {joke}</p>
    </div>
  );
}

export default MainJokeCopy;
