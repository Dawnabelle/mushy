import React from 'react';

import AdminPage from './AdminPage';
import DrinkPage from './DrinkPage';
import Home from './Home';

import Error404 from './Error404';
import {Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <style jsx="jsx">
        {
          ` .appStyle {
            margin: 0;
            padding: 0;
            width: 1024;
            text-align: center;
            }
          `
        }
      </style>
      <div className='appStyle'>
        <Switch>
          <Route exact='exact' path='/' component={Home}/>
          <Route path='/drinks' component={DrinkPage}/>
          <Route path='/admin' component={AdminPage}/>
          <Route path='/add' render={() => <NewDrinkControl onNewDrinkCreation={this.handleNewDrinkFormSubmit} } />
          <Route component={Error404}/>
        </Switch>
      </div>
    </div>);
}

export default App;
