//firsrt we have to install the proptypes library 
//npm i prop-type



import React from 'react'
import propTypes from 'prop-types';
function User(props){
  return(
<>
    <h1>name:{props.name}</h1>
    <h2>age:{props.age}</h2>
    <h2>place:{props.place}</h2>


</>
  )
}
User.propTypes={
  name:propTypes.string,
  age:propTypes.number,
  place:propTypes.string
}

 function Apple() {

  return (
    <>  
  
<User name={1234} age={'asfja;s'}  place={324}  />
    
    
    </>
  )
}

export default Apple;