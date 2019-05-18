import React, { Component } from 'react';
import { List, Icon, Image } from 'semantic-ui-react';

import '../styles/Sidemenu.css';
import '../styles/Color.css';

export default class Sidemenu extends Component {
    
    render(){
        return (
            <div className="navigation-list">
                <Image src="/logo_transparent.png" />
                <List animated size="big" verticalAlign="middle" relaxed >
                
                    <List.Item >
                        <Icon className="empthy-color" name="home" />
                        <List.Content className="empthy-color"> Home </List.Content>
                    </List.Item>
                    <List.Item>
                        <Icon className="empthy-color" name="book" />
                        <List.Content className="empthy-color" > Overview </List.Content>
                    </List.Item>
                </List>

            </div>
        )
    }
}