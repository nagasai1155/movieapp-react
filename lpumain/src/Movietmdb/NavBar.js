import React from 'react'
import {Link} from 'react-router-dom';
function NavBar() {
  return (
  <>
  <div>
    <header className='header'>
        <h2>NAGA RTAD</h2>
    </header>
    <ul className='nav'>


        <li className='list'>
            <Link to='/'>Home</Link>

        </li>
        <li>
            <Link to='/movies'>Movies</Link>
        </li>
        <li>

            <Link to="/tv" >TV</Link>
        </li>
        <li>

            <Link to="/movlib">Movielibrary</Link>
        </li>
        <li>
            <Link to="/tvlib">Tvlibrary</Link>
        </li>
    </ul>
  
  </div>
  
  </>
  )
}

export default NavBar