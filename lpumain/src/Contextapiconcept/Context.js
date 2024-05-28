import React from "react";
import { createContext } from "react";

import SubContext from "./SubContext";
//api context (useContext()  ) hook to pass data one component directly to anither component


 export let context = createContext()
function Context() {


  let employ={
    name:'nagasai',
    age:20,
    place:'vishakapatnam'
  }
  return (
   <>
   <context.Provider value={employ}>

<SubContext/>

   </context.Provider>
   
   
   
   
   </>
  )
}

export default Context