import React from 'react';
import {Link} from 'react-router-dom';

function AdminBar(){
  return(
    <div>
      <style jsx>
        {`
          .AdminBarStyle {
            margin: auto;
            text-decoration: none;
          }
          .AdminButtons {
            color: teal;
            text-decoration: none;
            font-size: 1.5em;
          }
        `}
      </style>
      <div className='AdminBarStyle'>
        <Link className="AdminButtons" to='/admin'>Admin</Link>
      </div>
    </div>
  );
}

export default AdminBar;
