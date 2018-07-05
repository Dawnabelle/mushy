import React from 'react';
import PropTypes from 'prop-types';

function Drink(props) {

  function handleSellPint(Drink) {
    props.pintsRemaining = props.pintsRemaining -= 1;
  }

  const drinkInfo =
  <div>
    <style jsx>
      {`
        .pintInfo {
          padding: 10px 40px;
          background-color: rgba(222, 127, 33, .9);
          max-width: 50%;
          margin: auto;
        }
        .sellButton {
          max-height: 30px;
          margin-top: 30px;
        }
      `}
    </style>
    <div className="pintInfo">
      <div>
        <p>{props.name}</p>
        <p>Brewery: {props.brand}</p>
        <p>Price: {props.price}</p>
        <p>Alcohol Content: {props.alcoholContent}%</p>
        <p>Pints Remaining: {props.pintsRemaining}</p>
      </div>
    </div>
  </div>

    return (
      <div className="pintInfo">
        {drinkInfo}
        <button className="sellButton" onClick={() => this.props.handleSellPint(Drink)}>Bye Bye Pint</button>
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
