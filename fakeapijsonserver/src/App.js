//import { Form } from "react-router-dom";
import Table from "./Table";
import Form from "./Form1.js";
import {getData,getDelete,getPost,putData} from './api';
import { useEffect, useState } from "react";



function App() {

 const[products,setProducts] =useState([]);
 const[openform,setOpenForm] = useState(false);
const[initialfomr,setInitialForm]  = useState({
  name:'',price:"",category:''
})
const[edit,setEdit] = useState();
  useEffect(()=>{
    getProductDetails();
    
  
  },[])


  let getProductDetails= async()=>{
    let res = await getData();
      setProducts(res.data);
          
  }
  let deleteProductDetails = async(id)=>{
         return  await getDelete(id);
         getProductDetails();
  }
  let addProduct = async(product)=>{

      let data ={
    name:product.name,
    price:product.price,
    category:product.category
      }

    if(edit){
  await putData(product.id,data);
    }else{
      await getPost(data);
    }
  
    getProductDetails();
    setOpenForm(false);
}

let editProduct = async(data)=>{
  setInitialForm(data);

 setOpenForm(true);
 setEdit(true);
}

  let closeform=()=>{
setOpenForm(false);
  }
   
       
  
  return (
    
   <>
   <div className="wrapper m-5 w-50">
    <h1 className="text-primary">Crud opeations</h1>
    <button className="btn btn-primary" onClick={()=>{
      setOpenForm(true);
      setOpenForm({
        name:'',price:"",category:''
      })
    }}>add product</button>
    <Table products= {products} delete={deleteProductDetails} edit={editProduct} ></Table>
    {
      openform&& <Form closeForm={closeform}  data={initialfomr} add={addProduct} />
    }
   </div>
   
   </>
  )
  }

export default App;
