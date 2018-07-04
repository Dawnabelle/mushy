import React from 'react';
import PropTypes from 'prop-types';

function Drink(props) {
  function handleSellPint() {
    props.pintsRemaining = props.pintsRemaining -= 1;
  }

  const drinkInfo =

    <div className="pintInfo">
      <div>
        <p>{props.name}</p>
        <p>Brewery: {props.brand}</p>
        <p>Price: {props.price}</p>
        <p>Alcohol Content: {props.alcoholContent}</p>
        <p>Pints Remaining: {props.pintsRemaining}</p>
      </div>
    </div>;

    return (
      <div>
        {drinkInfo}
        <button onClick={() => this.props.handleSellPint(Drink)}>Bye Bye Pint</button>
      </div>)
}

Drink.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  alcoholContent: PropTypes.string.isRequired,
  pintsRemaining: PropTypes.number.isRequired
};

export default Drink;
