import React from 'react';
import { Redirect } from 'react-router-dom';

import Auth from '../src/services/Auth';

import Login from './components/Login';
import Overview from './components/Overview';
import Home from './components/Home';
import Analytics from './components/Analytics';

const routes = [
    {
      path: '/login',
      exact: true,
      component: (props) => <Login {...props} />
    },
    {
      path: '/',
      exact: true,
      component: (props) => {
        if(!Auth.isIdSet())
          return <Redirect to={{pathname: "/login"}} />;
  
        return <Home {...props} />
      }
    },
    {
      path: '/overview',
      exact: true,
      component: (props) => {
        if(!Auth.isIdSet())
          return <Redirect to={{pathname: "/login"}} />;

        return <Overview {...props} />
      }
    },  
    {
      path: '/analytics',
      exact: true,
      component:(props) => {
        if(!Auth.isIdSet())
          return <Redirect to={{pathname: "/login"}} />;

        return  <Analytics {...props} />
      }
    }
  ];

export default routes;