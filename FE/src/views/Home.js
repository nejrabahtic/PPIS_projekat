import React, { Component } from 'react';

import { Header, Button } from 'semantic-ui-react';

import RequestItem from "../components/RequestItem";

import { withRouter } from 'react-router-dom';
import "../styles/Color.css";
import "../styles/Home.css";

const ReportButton = withRouter(({history}) => 
    <Button onClick={() => {
        history.push('/report')
    }}>Report a problem</Button> 
)


export default class Home extends Component {

    constructor(props){
        super(props);
        this.state = {
            username: "Muhamed Delalic",
            role: "Developer"
        };
    }
    
    render(){
        const { username, role } = this.state;

        return(
            <div>
                <Header size='huge'>Welcome!</Header>
                <Header
                    size="large"
                    content={username}
                    subheader={role}
                />
                <RequestItem 
                    title="New request"
                    created="08/05/2019"
                    description="Cute dogs come in a variety of shapes and sizes. Some cute dogs are cute for their adorable faces, others for their tiny stature, and even others for their massive size."
                />
                <ReportButton />
            </div>
        )
    }
}