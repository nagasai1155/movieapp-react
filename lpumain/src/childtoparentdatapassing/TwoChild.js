import React, { useState } from 'react'

function TwoChild(props) {

    const[newTask,setNewTask] = useState('')
  return (
    <>
        <input  value={newTask} onChange={(e)=>{
            setNewTask(e.target.value);
        }} />

        <button  onClick={()=>{props.add(newTask)}}>addtodo</button>
    
    </>
  )
}

export default TwoChild