import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';

import PropTypes from 'prop-types';

export default class RequestItem extends Component {
    static defaultProps = {
        title: "NOT SET",
        description: "NOT SET",
        created: Date.now().toString(),
        priority: "Not determinated",
        urgency: "URGENT",
        status: "NOT VERIFIED",
        department: "Not assigned"
    }


    render() {
        const { title,
                description, 
                created, 
                priority, 
                urgency, 
                status, 
                department 
            } = this.props;

        return(
            <Card as="a">
                <Card.Content>
                    <Card.Header>{ title }</Card.Header>
                    <Card.Meta>{ created }</Card.Meta>
                    <Card.Description>{ description }</Card.Description>
                </Card.Content>
                <Card.Content>
                    <Card.Meta>{" Urgency: " + urgency }</Card.Meta>
                    <Card.Meta>{ "Priortiy: " + priority } </Card.Meta>
                </Card.Content>
                <Card.Content>    
                    <Card.Meta>{ "Status: " + status}</Card.Meta>
                    <Card.Meta>{ "Department: " + department}</Card.Meta>
                </Card.Content>
                
            </Card>
        )   
    }
}