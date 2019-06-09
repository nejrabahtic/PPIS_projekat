import React, { Component } from 'react';

import { Header, Button } from 'semantic-ui-react';


import { withRouter } from 'react-router-dom';
import "../styles/Color.css";
import "../styles/Home.css";
import Auth from '../services/Auth';


class Home extends Component {

    constructor(props){
        super(props);
        this.state = {
            username: "",
            role: ""
        };
    }
    componentDidMount(){
        this.setState({
            username: Auth.getUsername(),
            role: Auth.getRole()
        })
    }
    render(){
        const { username, role } = this.state;
        const { history } = this.props;
        return(
            <div>
                <Header size='huge'>Welcome!</Header>
                <Header
                    size="large"
                    content={username}
                    subheader={role}
                />
                {/* <RequestItem 
                    title="New request"
                    created="08/05/2019"
                    description="Cute dogs come in a variety of shapes and sizes. Some cute dogs are cute for their adorable faces, others for their tiny stature, and even others for their massive size."
                /> */}
                <Button onClick={() => {
                    history.push('/report')
                }}>Report a problem</Button> 
            </div>
        )
    }
}

export default withRouter(Home);