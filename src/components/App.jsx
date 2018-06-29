import DrinkPage from './DrinkPage';
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
          <Route path="/drinks" component={DrinkPage}/>
        </Switch>
      </div>
    </div>
  );
}

export default App;