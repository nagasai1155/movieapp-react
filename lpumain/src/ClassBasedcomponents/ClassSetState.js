//state in class component 
import React,{Component} from 'react';
class ClassSetState extends React.Component{
    state={
      name:'realme',
      price:20000
    }

  render(){
    return(
<>
<h1>stateconcept</h1>
    <h1>productName:{this.state.name}</h1>
    <h1>price:{this.state.price}</h1>

    <h3><input type='text' id='first' placeholder='enter pname'
    onChange={()=>{
      let p = document.getElementById('first').value
      this.setState({
      name:p
      })
      ;}}
      
      /></h3>
    <h3><input type='number' id='second' placeholder='price'
    onClick={()=>{
      let s = document.getElementById('second').value;
      this.setState({
        number:s
      },()=>{
        if(s>10){
          alert("high rate");
        }
      });
    }}
    
    
    
    
    /></h3>




</>

    )
  }
}

export default ClassSetState;