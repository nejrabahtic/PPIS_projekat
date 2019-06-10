import React from 'react';
import { Redirect } from 'react-router-dom';

import Auth from '../src/services/Auth';

import Login from './views/Login';
import Overview from './views/Overview';
import Home from './views/Home';
import DetailedRequest from './views/DetailedRequest';
import Analytics from './views/Analytics';
import Report from './views/Report';

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
      path: '/requestPreview/:id',
      exact: true,
      component: (props) => Authorized(<DetailedRequest {...props} />)
    },
    {
      path: '/analytics',
      exact: true,
      component:(props) => Authorized(<Analytics {...props} />)

    },
    {
      path: "/incident",
      exact: false,
      component: (props) => Authorized()
    },
    {
      path: '/report',
      exact: true,
      component:(props) => Authorized(<Report {...props} />)
    }
  ];

export default routes;
