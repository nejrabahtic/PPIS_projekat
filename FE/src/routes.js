import React from 'react';
import { Redirect } from 'react-router-dom';

import Auth from '../src/services/Auth';

import Login from './components/Login';
import Overview from './components/Overview';
import Home from './components/Home';
import Analytics from './components/Analytics';
import Report from './components/Report';

const Authorized = ( component ) => {
  if(!Auth.isIdSet())
    return <Redirect to={{pathname: "/login"}} />;
  return component;
}

const routes = [
    {
      path: '/login',
      exact: true,
      component: (props) => <Login {...props} />
    },
    {
      path: '/',
      exact: true,
      component: (props) => Authorized(<Home {...props} />)
      
    },
    {
      path: '/overview',
      exact: true,
      component: (props) => Authorized(<Overview {...props} />)
    },  
    {
      path: '/analytics',
      exact: true,
      component:(props) => Authorized(<Analytics {...props} />)

    },
    {
      path: '/report',
      exact: true,
      component:(props) => Authorized(<Report {...props} />)
    }
  ];

export default routes;