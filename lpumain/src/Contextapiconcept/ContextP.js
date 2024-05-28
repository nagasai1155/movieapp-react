import React, { createContext } from 'react';
import Fog from './Fog';


 export  let final = createContext()
function ContextP(){

    let names = {
        name:'nagasai',name1:'surya',name2:'rohit'
    }
    return(

        <>
        <final.Provider value={names}>

            <Fog/>
        </final.Provider>
        
        
        </>
    )
}
export default ContextP;