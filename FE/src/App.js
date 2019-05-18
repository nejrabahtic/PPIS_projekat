import React, { Component } from 'react';
import Sidemenu from './components/Sidemenu';
import Overview from './components/Overview';

import { BrowserRouter, Route } from 'react-router-dom'
import './App.css';
import 'semantic-ui-css/semantic.min.css'

const routes = [
  {
    path: '/',
    exact: true,
    component: Overview
  }
]



class App extends Component {
  render(){
    return (
      <div className="App">
        <BrowserRouter>
        <div className="page-wrapper" >
          <div className="sidemenu-wrapper" >
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
