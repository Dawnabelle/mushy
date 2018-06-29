import React from 'react';
import PropTypes from 'prop-types';

function Drink(props){
  return (
    <div>
      <style jsx>{`
          .drinkView {
            display: flex;
            background-color: coral;
          }
          `}
      </style>
      <div className='drinkView'>
      </div>
      <div>
        <p>{props.name}</p>
        <p>{props.brand}</p>
        <p>{props.price}</p>
        <p>{props.alcoholContent}</p>
      </div>
    </div>
  );
}

Drink.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  alcoholContent: PropTypes.string.isRequired
};

export default Drink;