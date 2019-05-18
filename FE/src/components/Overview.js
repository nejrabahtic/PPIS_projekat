import React, { Component } from 'react';
import '../styles/Overview.css';

import { Button } from 'semantic-ui-react';

export default class Overview extends Component {
    constructor(props){
        super(props);

        this.state = {
            currentTab: "activeTab"
        }
    }
    chageTab = () => {
        if(this.state.currentTab === "activeTab")
            this.setState({ currentTab: "normalTab"})
        else
            this.setState({ currentTab: "activeTab"})
        
    }
    render() {
     return (
        <div>
            Overview
            <Button onClick={this.chageTab} >Test</Button>
            <div className={this.state.currentTab}>
            </div>        
        </div>
     );   
    }

}