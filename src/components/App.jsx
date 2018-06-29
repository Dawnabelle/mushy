import DrinkPage from './DrinkPage';
import Error404 from './Error404';
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';

function App(){
  return (
    <div>
      <style jsx>{`
          .appStyle {
            margin: 0;
          }
            `}</style>
      <div className='appStyle'>
        <Switch><Route exact path='/' component={Home} />
          <Route path="/drinks" component={DrinkPage} /><Route component={Error404} />
        </Switch>
      </div>
    </div>
  );
}

export default App;