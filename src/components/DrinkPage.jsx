import React from 'react';
import DrinkList from './DrinkList';

function DrinkPage() {
  return (
    <div>
      <style jsx="jsx">
        {
          ` .homeStyle {
            padding-top: 100px;
            padding-bottom: 100px;
          }
          .homeStyle h1 {
            padding-top: 10px;
          }
           `
        }
      </style>
      <div className="homeStyle">
        <h1>On Tap at Dawn's</h1>
        <DrinkList />
      </div>
    </div>
  );
}

export default DrinkPage;
