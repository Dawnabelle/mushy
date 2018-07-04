import React from 'react';
import NavBar from './NavBar';
import night from '../assets/night.jpg';

function Home() {
  return (<div>
    <div>
      <style jsx="jsx">
        {
          ` .appStyle {
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
    <h1>Dawn's Bar</h1>
    <h2>Where you come when React brings you to drink!</h2>
    <NavBar/>
  </div>);
}

export default Home;
