import React, { Component } from 'react';
import { List, Icon, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom'


import '../styles/Sidemenu.css';
import '../styles/Color.css';

export default class Sidemenu extends Component {
    
    render(){
        return (
            <div className="navigation-list">
                <Image src="/logo_transparent.png" />
                <List animated size="big" verticalAlign="middle" relaxed >
                    <List.Item  as={ Link } to="/">
                        <Icon className="empty-color" name="home" />
                        <List.Content className="empty-color"> Home </List.Content>
                    </List.Item>
                    <List.Item as={ Link } to="/overview">
                        <Icon className="empty-color" name="book" />
                        <List.Content className="empty-color" > Overview </List.Content>
                    </List.Item>
                </List>

            </div>
        )
    }
}