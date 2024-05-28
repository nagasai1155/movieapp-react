import React from 'react';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';
import {SubUser,SubUser1} from './User.js'
import User from './User';


function Header(){
  return(
    <>
    <div>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
        <li><Link to="/user ">User</Link></li>
      </ul>
    </div>
    </>
  )
}
function Rrouting(){
  return(
    <>
    
   <BrowserRouter>
   <Header/>
  
   <Routes>
    
     
  
       <Route path="/" element={<Home/>}/>
       <Route path="/about" element={<About/>}/>
       <Route path="/contact" element={<Contact/>}/>

       <Route path='/user/:id/:name' element={<User/>}>
       <Route path='SubUser' element = {<SubUser/>}/>
       <Route path='SubUser1' element={<SubUser1/>}/>
       </Route>

    
   </Routes>
   </BrowserRouter>
    </>
  )
}
export default Rrouting;
