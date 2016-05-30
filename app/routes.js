import React from 'react';
import {Route} from 'react-router';
import App from './components/App';
import Regist from './components/Regist';

export default (
  <Route handler={App}>
    <Route path='/' handler={Regist} />
    <Route path='/regist' handler={Regist} />
  </Route>
);
