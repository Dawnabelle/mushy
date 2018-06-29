import React from 'react';
import {Link} from 'react-router-dom';

function NavBar(){
  return(
    <div>
      <style jsx>{`
          .NavBarStyle {
            display: flex;
            justify-content: space-around;
          }
          `}
      </style>

      <div className='NavBarStyle'>
        <Link to='/'>Home</Link>
        <Link to='/drinks'>Drink List</Link>
      </div>
    </div>
  );
}

export default NavBar;