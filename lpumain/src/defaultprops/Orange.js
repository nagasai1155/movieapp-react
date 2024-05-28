import React from 'react'



function User4(props){
return(
    <>
    <h1>name:{props.name}</h1>
    <h1>age:{props.age}</h1>
    </>
)

}

User4.defaultProps={
    name:'no name',
    age:'undefined'
}
function Orange() {
  return (
   <>
   <User4   name='nagasaibalam'  age={232}  />

   
   </>
  )
}

export default Orange