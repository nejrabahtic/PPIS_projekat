import React, { Component } from 'react';
import Sidemenu from './components/Sidemenu';

import { BrowserRouter, Route, Redirect } from 'react-router-dom'
import routes from './routes';
import { Sidebar } from 'semantic-ui-react'; 
import Auth from './services/Auth';

import 'semantic-ui-css/semantic.min.css'
import './App.css';
import './styles/Color.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      visible: Auth.isIdSet()
    }
  }
  componentDidMount(){
    Auth.subscribeToUpdate(
      () => { 
        this.setState({
          visible: Auth.isIdSet()
        })
      }
    )
  }

  render(){
    const { visible } = this.state;
    return (
      <div className="App">
        <BrowserRouter>
        <div className="page-wrapper empty-color-bg" >
          <Sidebar
              visible={visible}
              animation="push"
            >
            <div className="sidemenu-wrapper secondary-color-bg" >
              <Sidemenu />
            </div>
          </Sidebar>
          <Sidebar.Pusher className="sidebar-pusher">
            <div className="content-wrapper" >
              {routes.map( 
                (route, index) => 
                  <Route 
                    key={index}  
                    path={route.path}
                    exact={route.exact}
                    render={(props) => route.component({ ...props })}
                  />
              )}
              
            </div>
          </Sidebar.Pusher>
          </div>
        </BrowserRouter>
      </div>
    )
}
}

export default App;
