import React, { Component } from 'react'

export default class Practice extends React.Component {

   state={
        count:0,
        number:199,
       
    }

 
  render() {
    return (
     <>
     <h1>count:{this.state.count}</h1>
     <h1>number:{this.state.number}</h1>
     <button onClick={()=>{
        this.setState({
            count:this.state.count+1
            
        },()=>{
            if(this.state.count>15){
                alert("congratulation you win the game");
            }
        }
           
        )
     }}>increment</button>


     <button onClick={()=>{
        this.setState({
            number:this.state.number-1
        },()=>{
            if(this.state.number<194){
                alert("dangerzoneyou..")
            }
        })
     }}>decrement</button>
     </>
    )
  }
}
