import React, { Component } from 'react';
import Sidemenu from './components/Sidemenu';

import Overview from './components/Overview';
import Home from './components/Home';

import { BrowserRouter, Route } from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'

import './App.css';
import './styles/Color.css';

const routes = [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/overview',
    exact: true,
    component: Overview
  }
]



class App extends Component {
  render(){
    return (
      <div className="App">
        <BrowserRouter>
        <div className="page-wrapper empty-color-bg" >
          <div className="sidemenu-wrapper secondary-color-bg" >
            <Sidemenu />
          </div>
          <div className="content-wrapper" >
            {routes.map( 
              (route, index) => 
                <Route 
                  key={index}  
                  path={route.path}
                  exact={route.exact}
                  component={route.component}
                />
            )}
          </div>
          </div>
        </BrowserRouter>
      </div>
    )
}
}

export default App;
