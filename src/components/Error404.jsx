import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import cryingDonkey from '../assets/crying-donkey.gif';
import stars from '../assets/stars.jpg';

function Error404() {
  return (
    <div>
      <style jsx="jsx">
        {
          ` .appStyle {
            text-align: center;
            margin: auto;
            color: teal;
            background-image: url(${stars});
            height: 2000px;
          }
          .img {
            border-radius: 50%;
            object-fit:cover;
            width: 50%;
            padding-top: 50px;
            opacity: .8;
          }
          .img:hover {
            opacity: .5;
          }
           `
        }
      </style>
      <div>
        <img className="img" src={cryingDonkey}/>
      </div>
      <h2>You made the donkey cry.</h2>
      <h3>Would you like to return <Link to="/"> home </Link> and leave them in peace?</h3>
      <h3>Or would you like to <Link to="/drinks"> drink </Link> now?</h3>
    </div>);
}

Error404.propTypes = {
  location: PropTypes.object
};

export default Error404;
