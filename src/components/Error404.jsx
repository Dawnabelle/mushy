import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import cryingDonkey from '../assets/crying-donkey.gif';
import stars from '../assets/stars.jpg';
function Error404(props) {
  return (<div>
    <style jsx="jsx">
      {
        ` .appStyle {
          text-align: center;
          margin: auto; 
          color: white;
          background-image: url(${stars});
          height: 2000px;
        }
         `
      }</style>
    <div>
      <img className="img" src={cryingDonkey}/>
    </div>
    <h2>The page {props.location.pathname}
      does not exist!</h2>
    <h3>Would you like to return
      <Link to="/">
        home
      </Link>
      instead?</h3>
  </div>);
}

Error404.propTypes = {
  location: PropTypes.object
};

export default Error404;