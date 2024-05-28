import React from 'react'
import axios from 'axios';
const url= 'http://localhost:3000/products/'
export async function getData() {
  return   await axios.get(url);
}
export async function getDelete(id) {
    return   await axios.delete(`${url}/${id}`);
  }

  export async function getPost(data) {
    return   await axios.post(url,data,{
        headers:{
            'Content-Type':'application/json'
        }
    });
  }
  export async function putData(data,id) {
    return   await axios.put(url+"/"+id,data,{
        headers:{
            'Content-Type':'application/json'
        }
    });
  }

export default api
function api(){
    return (
        <h1>hello</h1>
    )
}