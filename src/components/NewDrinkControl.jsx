import React from 'react';
import PropTypes from 'prop-types';
import NewDrinkForm from './NewDrinkForm';

function NewDrinkControl(props) {
  return (
    <div>
      <NewDrinkForm onNewDrinkCreation={props.onNewDrinkCreation}/>
    </div>
  );
}

NewDrinkControl.propTypes = {
  onNewDrinkCreation: PropTypes.func
};

export default NewDrinkControl;
