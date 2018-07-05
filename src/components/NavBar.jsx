import React from 'react';
import {Link} from 'react-router-dom';

function NavBar(){
  return(
    <div>
      <style jsx>
        {`
          .NavBarStyle {
            margin: auto;
            text-decoration: none;
          }
          .navButtons {
            color: teal;
            text-decoration: none;
            font-size: 1.5em;
          }
        `}
      </style>
      <div className='NavBarStyle'>
        <Link className="navButtons" to='/'>Home</Link><span> | </span>
        <Link className="navButtons" to='/drinks'>Drink List</Link>
      </div>
    </div>
  );
}

export default NavBar;
