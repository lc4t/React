import React from 'react';
import {Route} from 'react-router';
import App from './components/App';
import Index from './components/Index';
import Login from './components/Login';
import Regist from './components/Regist';



export default (
  <Route handler={App}>
    <Route path='/' handler={Index} />
    <Route path='/login' handler={Login} />
    <Route path='/regist' handler={Regist} />
  </Route>
);
