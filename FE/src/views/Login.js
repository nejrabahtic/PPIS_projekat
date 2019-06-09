import React, { Component } from 'react';

import { Form, Header, Container } from 'semantic-ui-react'

import Auth from '../services/Auth';

import { withRouter } from 'react-router-dom';  

import '../styles/Color.css';
import '../styles/Login.css';


class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            username: ""
        }
    }
    login = () => {
        switch(this.state.username){
            case "admin":
                Auth.setId(1);
                Auth.setRole("administrator");
                Auth.setUsername("Muhamed Delalic")
                break;
            case "developer":
                Auth.setId(2);
                Auth.setRole("developer");
                Auth.setUsername("Nedim Dzonlagic")
                break;
            default:
                Auth.setId(3);
                Auth.setRole("user");
                Auth.setUsername("Nejra Bahtic")
                
        }
        this.props.history.push("/");       
    } 

    componentDidMount(){
        console.log(this.props);
        if(Auth.isLoggedIn()){
            this.props.history.push("/");
        }
    }
    handleUsernameChange = (e) => {
        this.setState({ username: e.target.value })
    }
    render(){
        const { username } = this.state;
        return (
            <div className="login-page-wrapper">
                <Container className="login-form-wrapper secondary-color-bg">
                    <Header size="huge" className="accent-color">Login</Header>
                    <Form>
                        <Form.Field required={true}>
                            <label className="empty-color" >Username:</label>
                            <input type="text" value={username} onChange={this.handleUsernameChange} placeholder="Himzo Polovina"/>
                        </Form.Field>
                        <Form.Field required={true}>
                            <label className="empty-color" >Password:</label>
                            <input type="password" placeholder="********"/>
                        </Form.Field>
                        <Form.Button onClick={this.login} >Submit</Form.Button>
                    </Form>
                </Container>
            </div>
        );
    }
} 
export default withRouter(Login);