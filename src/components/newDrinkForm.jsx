import React from 'react';
import PropTypes from 'prop-types';

function NewDrinkForm(props) {
  let _name = null;
  let _brand = null;
  let _price = null;
  let _alcoholContent = null;
  let _pintsRemaining = null;

  function handleNewDrinkFormSubmit(e) {
    e.preventDefault();

    props.onNewDrinkCreation ({
      name: _name.value,
      brand: _brand.value,
      price: _price.value,
      alcoholContent: _alcoholContent.value,
      pintsRemaining: _pintsRemaining.value
    });
    _name.value = '';
    _brand.value = '';
    _price.value = '';
    _alcoholContent.value = '';
    _pintsRemaining.value = '';


  return (
    <div>
      <form onSubmit={handleNewDrinkFormSubmit}>
        <h2>Add a Drink</h2>
        <input type='text' placeholder='drink name' ref={(input) => {_name = input;}}/>
        <input type='text' placeholder='brand' ref={(input) => {_brand = input;}}/>
        <input type='text' placeholder='price' ref={(input) => {_price = input;}}/>
        <input type='text' placeholder='alcohol content' ref={(input) => {_alcoholContent = input;}}/>
        <input type='text' placeholder='number of pints' ref={(input) => {_pintsRemaining = input;}}/>
        <button type='submit'>Add New Drink</button>
      </form>
    </div>
  )
};

NewDrinkForm.propTypes = {
  onNewDrinkCreation: PropTypes.func
};

export default NewDrinkForm;
