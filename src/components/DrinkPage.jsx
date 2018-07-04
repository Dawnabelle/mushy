import React from 'react';
import DrinkList from './DrinkList';
import NavBar from './NavBar';
import foam from '../assets/foam.jpeg';

function DrinkPage() {
  return (
    <div>
      <style jsx="jsx">
        {
          ` .homeStyle {
            padding-top: 100px;
            padding-bottom: 100px;
            background-image: url(${foam});
          }
          .homeStyle h1 {

          }
           `
        }
      </style>
      <div className="homeStyle">
        <NavBar/>
          <h1>On Tap at Dawn's</h1>
        <DrinkList/>
      </div>
    </div>
  );
}

export default DrinkPage;
