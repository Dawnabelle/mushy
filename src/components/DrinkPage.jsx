import React from 'react';
import DrinkList from './DrinkList';
import NavBar from './NavBar';

function DrinkPage() {
  return (
    <div>
      <style jsx="jsx">
        {
          ` .NavStyle {
            display: flex;
            background-color: coral;
          }
           `
        }
      </style>
      <div>
        <NavBar/>
        <DrinkList/>
      </div>
    </div>
  );
}

export default DrinkPage;
