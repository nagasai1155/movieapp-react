import React from 'react'



function Authetication(){
       const aut = true;
    return (props)=>{
      

        if(aut){
            return <Login {...props}  />
        }
        else{
            return <User/>
        }

    }
}

let FinalComponent = Authetication(Login);
function Hoc() {
  return (
    <>
    <FinalComponent name={'naga'} age={23} />

    
    
    
    
    </>
  )
}

export default Hoc

function Login(props){
    return (
        <>
        <h1>Login component </h1>
        <p>age:{props.age}</p>
        <p>name:{props.name}</p>
        </>
    )
}

function User(){
    return (

        <>
        <h1>user component </h1>
        
        </>
    )
}