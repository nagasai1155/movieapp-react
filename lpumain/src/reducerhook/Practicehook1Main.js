import React,{useReducer} from 'react'
function Reducer(pstate,action){
    switch(action.type){
        case 'red':{
            return pstate+2;
        }
        case 'blue':{
            return pstate-2;
        }
        case 'yellow':{
            return 0;
        }
        default:{
            return pstate;
        }
    }

}
function Practicehook1Main() {
    //useReducer hook we are talking here 

    const [count,dispatch] = useReducer(Reducer,0)
  return (
   <>
   <h1>counter:{count}</h1>
   
   <button onClick={()=>{
    dispatch({type:'red',payload:'red'})
   }}>incre</button>
   <button onClick={()=>{
    dispatch({type:'blue',payload:'blue'})
   }}>decre</button>
   <button onClick={()=>{
    dispatch({type:'yellow'})
   }}>reset</button>
   
   </>
  )
}

export default Practicehook1Main