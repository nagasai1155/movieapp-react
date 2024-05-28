import React, { useReducer } from 'react'
//color changingγin background using useRedcerhook
const reducer = (state,action) => {
        console.log(state,action);

        switch(action.type){
            case 'red':
                return{color:action.payload}
                case 'green':
                    return{color:action.payload}

                    case 'yellow':
                        return{color:action.payload}
                        case 'blue':
                            return{color:action.payload}

                            case 'black':
                                return{color:action.payload}

                default:
                    return state
        }
        
// if(action.type==='red'){
//     document.body.style.backgroundColor = "red";
// }
// else if(action.type==='green'){
//     document.body.style.backgroundColor = "green";
// }
// else if(action.type ==='black'){
//     document.body.style.backgroundColor= 'black';
// }
// else if(action.type==='yellow'){
//     document.body.style.backgroundColor='yellow';
// }
// else if(action.type==='blue'){
//     document.body.style.backgroundColor='blue';
// }



            
}
function ReducerHooke() {

    
    



const [state,dispatch] = useReducer(reducer,{color:'green',color:'red',color:'black'})
  return (

     <>
     
     <div style={{height:'100px' ,backgroundColor:state.color,width:'300px',border:'3px solid yellow'}}></div>
     <button onClick={()=>{dispatch({type:'red',payload:'red'})}} >red</button>
     <button onClick={()=>{dispatch({type:'green',payload:'green'})}}>green</button>
     <button onClick={()=>{dispatch({type:'black',payload:'black'})}}>black</button>
     <button onClick={()=>{dispatch({type:'yellow',payload:'yellow'})}}>yellow</button>
     <button onClick={()=>{dispatch({type:'blue',payload:'blue'})}}>blue</button>
    
     
     
     </>

  )
}

export default ReducerHooke