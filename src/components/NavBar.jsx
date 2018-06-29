import React from 'react';
import {Link} from 'react-router-dom';


function NavBar(){
  return(
    <div>
      <div className='NavBarStyle'>
        <Link to="/">Home</Link>
        <Link to="/drink">Drink List</Link>
      </div>
    </div>
  );
}

export default NavBar;