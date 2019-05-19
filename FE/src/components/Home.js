import React, { Component } from 'react';

import { Header, Button } from 'semantic-ui-react';

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
                <ReportButton />
            </div>
        )
    }
}