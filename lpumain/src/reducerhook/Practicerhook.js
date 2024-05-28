import React,{useReducer} from 'react'

function Main(prevstate,value){
    console.log(prevstate,value)
    return prevstate+value;

}
function Practicerhook(){

    const [count,dispatch] = useReducer(Main,100)
    return(
        <>

        <button onClick={()=>{dispatch(+100)}}>+</button>
        <h1>{count}</h1>
        <button onClick={()=>{dispatch(-100)}}>-</button>
        
        
        
        </>

    )
}

export default Practicerhook