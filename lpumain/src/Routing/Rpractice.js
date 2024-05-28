import React from 'react';
import { BrowserRouter,Routes,Route,Link}  from 'react-router-dom';
import Home from './Home.js'
import About from './About.js'
import Contact from './Contact.js';
 function SubRouting(){
return(


    <>
    <ul>

        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
    </ul>
    </>
)
}
export function Rpractice(){
    return(
<>
        <BrowserRouter>

      <SubRouting/>

        <Routes>

            <Route path='/' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/contact' element={<Contact/>}/>

        
        </Routes>
        </BrowserRouter>
        </>
    )
}