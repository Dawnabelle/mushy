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
          display: flex;
          justify-content: space-between;
          padding: 10px 100px;
        }
        .sellButton {
          max-height: 30px;
          margin-top: 30px;
        }
      `}
    </style>
    <div className="pintInfo">
      <div>
        {props.image}
      </div>
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
