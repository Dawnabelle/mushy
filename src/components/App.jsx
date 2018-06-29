import DrinkPage from './DrinkPage';
import React from 'react';
import { Switch, Route } from 'react-router-dom';


function App(){
  return (
    <div>
      <style jsx>{`
          .appStyle {
            margin: 0;
          }
            `}</style>
      <div className='appStyle'>
        <Switch>
          <Route path="/drinks" component={DrinkPage}/>
        </Switch>
      </div>
    </div>
  );
}

export default App;