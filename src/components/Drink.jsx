import React from 'react';
import PropTypes from 'prop-types';

function Drink(props){
  return (
    <div>
      <div>
        <p>{props.name}</p>
        <p>{props.brand}</p>
        <p>{props.price}</p>
        <p>{props.alcoholContent}</p>
      </div>
      <div>
        <p>{props.pintsRemaining}</p>
        <button onClick={Drink.sellPint}>Sell</button>
      </div>
      function sellPint(drink){
        Drink.pintsRemaining = Drink.pintsRemaining - 1};
    </div>
  );
}

Drink.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  alcoholContent: PropTypes.string.isRequired,
  pintsRemaining: PropTypes.number.isRequired
};

export default Drink;
