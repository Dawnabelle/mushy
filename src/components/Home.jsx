import React from 'react';
import NavBar from './NavBar';
import bar from '../assets/bar.jpg';

function Home() {
  return (<div>
    <div>
      <style jsx="jsx">
        {
          ` .appStyle {
            text-align: center;
            margin: auto;
            color: white;
            background-image: url(${bar});
            height: 2000px; padding: 50px;
          }
           `
        }</style>
    </div>

    <h1>Jessica Fletcher's Famous</h1>
    <NavBar/>
  </div>);
}

export default Home;