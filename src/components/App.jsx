import React from 'react';

import DrinkPage from './DrinkPage';
import Home from './Home';

import Error404 from './Error404';
import {Switch, Route} from 'react-router-dom';

import night from '../assets/night.jpg';
import pdx from '../assets/pdx.jpg';
import field from '../assets/field.jpg';

class App extends React.Component {

  render() {
    return (
      <div>
        <style jsx>
          {
            ` .appStyle {
              margin: 0;
              padding: 0;
              width: 1024;
              text-align: center;
              background: url(${night}) right bottom no-repeat, url(${pdx}) left top repeat;
              background-size: cover;
              }
            `
          }
        </style>
        <div className='appStyle'>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/drinks' component={DrinkPage}/>
            <Route path='/add' render={() => <NewDrinkForm onNewDrinkCreation={this.handleNewDrinkFormSubmit}/> } />
            <Route component={Error404}/>
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
