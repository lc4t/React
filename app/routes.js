import React from 'react';
import {Route} from 'react-router';
import App from './components/App';
import Regist from './components/Regist';
import Index from './components/Index';


export default (
  <Route handler={App}>
    <Route path='/' handler={Index} />
    <Route path='/regist' handler={Regist} />
  </Route>
);
