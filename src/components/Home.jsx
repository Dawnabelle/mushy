import React from 'react';

import DrinkPage from './DrinkPage';

import night from '../assets/night.jpg';
import pdx from '../assets/pdx.jpg';
import field from '../assets/field.jpg';

function Home() {
  return (<div>
    <div>
      <style jsx>
        {
          `
          .appStyle {
            text-align: center;
            margin: auto;
            color: white;
            height: 1000px;
            padding: 50px;
            background-size: cover;
            background-repeat: no-repeat;
          }
           `
        }</style>
    </div>
    <div>
      <h1>
        Dawn's Bar
      </h1>
      <h2>
        Where you come when React drives you to drink!
      </h2>
    </div>
    <div>
      <DrinkPage/>
      <img src={night}/>
      <img src={pdx}/>
      <img src={field}/>
    </div>
  </div>);
}

export default Home;
