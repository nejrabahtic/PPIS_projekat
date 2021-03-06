import React, { Component } from 'react';
import { List, Icon, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom'


import '../styles/Sidemenu.css';
import '../styles/Color.css';
import { withRouter } from 'react-router-dom';
import Auth from '../services/Auth';


class Sidemenu extends Component {
    logout = () => {
        Auth.clear();
        this.props.history.push("/login");
    }

    render(){
        return (
            <div className="navigation-list">
                <Image src="/logo_transparent.png" />
                <List animated size="middle" verticalAlign="middle" relaxed >
                    <List.Item  as={ Link } to="/">
                        <Icon className="empty-color" name="home" />
                        <List.Content className="empty-color"> Home </List.Content>
                    </List.Item>
                    <List.Item as={ Link } to="/overview">
                        <Icon className="empty-color" name="book" />
                        <List.Content className="empty-color" > Overview </List.Content>
                    </List.Item>
                    <List.Item as={ Link } to="/analytics">
                        <Icon className="empty-color" name="chart line" />
                        <List.Content className="empty-color" > Analytics </List.Content>
                    </List.Item>
                    <List.Item  className="logout" onClick={this.logout}>
                        <Icon className="empty-color" name="log out" />
                        <List.Content className="empty-color" > Log out </List.Content>
                    </List.Item>
                </List>

            </div>
        )
    }
}
export default withRouter(Sidemenu);
