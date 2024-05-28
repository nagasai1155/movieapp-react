import React  from 'react'

function AuthCheck(Login){
    let auth = true;
return (props)=>{
    
    if(auth){
       return  <Login {...props}/>
    }
    else{
        return  <Details/>
    }
}

}



function Login(props){
    return(
        <>
        <h1>Login component</h1>
        <h1>name:{props.uname}</h1>
       
        </>
    )
}

function Details(){
    return(
        <>
        <h1>details component </h1>
        </>
    )
}








const WrappedComponent = AuthCheck(Login);
function User() {
  return (
    <>
    <h1>User Component    </h1>
    <WrappedComponent  uname={"nagasaibalam"}
    />
    
    
    </>
  )
}

export default User