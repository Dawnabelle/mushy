import React from 'react';

import DrinkPage from './DrinkPage';
import NavBar from './NavBar';

import night from '../assets/night.jpg';
import pdx from '../assets/pdx.jpg';
import field from '../assets/field.jpg';

function Home() {
  return (<div>
    <div>
      <style jsx="jsx">
        {
          ` body {
            background-image: url(${night});
          }
          .appStyle {
            text-align: center;
            margin: auto;
            color: white;
            background-image: url(${night});
            height: 1000px;
            padding: 50px;
            background-size: contain;
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
    <NavBar/>
      <DrinkPage/>
    <div>
      <img src={night}/>
        <img src={pdx}/>
        <img src={field}/>
      </div>
    </div>);
}

export default Home;
