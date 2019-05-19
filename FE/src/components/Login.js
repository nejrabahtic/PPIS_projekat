import React, { Component } from 'react';

import { Form, Header, Container } from 'semantic-ui-react'

import Auth from '../services/Auth';

import { withRouter } from 'react-router-dom';  

import '../styles/Color.css';
import '../styles/Login.css';

const LoginButton = withRouter(({ history }) => (
    <Form.Button onClick={() => {
        Auth.setId(2);
        history.push("/");
    }} >Submit</Form.Button>

) )


export default class Login extends Component{
   
    componentDidMount(){
        Auth.removeId();
    }
    login = () => {
        Auth.setId(2);

    } 
    render(){
        return (
            <div className="login-page-wrapper">
                <Container className="login-form-wrapper secondary-color-bg">
                    <Header size="huge" className="accent-color">Login</Header>
                    <Form>
                        <Form.Field required={true}>
                            <label className="empty-color" >Username:</label>
                            <input type="text" placeholder="Himzo Polovina"/>
                        </Form.Field>
                        <Form.Field required={true}>
                            <label className="empty-color" >Password:</label>
                            <input type="password" placeholder="********"/>
                        </Form.Field>
                        <LoginButton />
                    </Form>
                </Container>
            </div>
        );
    }
} 