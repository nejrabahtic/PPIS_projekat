import React, { Component } from 'react';
import { Button, Form, Header } from 'semantic-ui-react'
import Auth from '../services/Auth';
import "../styles/Report.css";
import "../styles/Color.css"
let userTypes = {
    USER: 0,
    DEVELOPER: 1,
    ADMINISTRATOR: 2
}

export default class Report extends Component {


    constructor(props){
        super(props);
        this.state = {
            activeView: userTypes.USER,
            type: null
        }
    }
    componentDidMount(){
        switch(Auth.getRole()){
            case "administrator":
                this.setState({activeView: userTypes.ADMINISTRATOR});
                break;
            case "developer":
                this.setState({activeView: userTypes.DEVELOPER});
                break;
            default:
                this.setState({activeView: userTypes.USER});
        }
    }
    handleTypeChange = (event, data) => {
        this.setState({type: data.value});
    }
    render(){
        const { activeView, type } = this.state;
        return (
            <div className="report-page"> 
                <Form className="report-form secondary-color-bg">
                    <Header className="accent-color">Request/Incident</Header>
                        <Form.Field required={true}>
                            <label className="empty-color">Title:</label>
                            <input></input>
                        </Form.Field>
                        <Form.Field required={true}>
                            <label className="empty-color">Categorty</label>
                            <Form.Select options={[{text:"Editing"}, {text:"Marketing"}, {text:"Distribution"}, {text:"Printing"}]}>

                            </Form.Select>
                        </Form.Field>
                        <Form.Field required={true}>
                            <label className="empty-color">Description:</label>
                            <textarea className="description" rows="10" ></textarea>
                        </Form.Field>
                        <Form.Field required={true}>
                            <label className="empty-color">Type:</label>
                            <Form.Radio
                                label='Request'
                                value='req'
                                checked={type === 'req'}
                                onChange={this.handleTypeChange}
                                
                            />
                            <Form.Radio
                                label='Incident'    
                                value='inc'
                                checked={type === 'inc'}
                                onChange={this.handleTypeChange}
                            />
                            <Form.Radio
                                label='Not Sure'
                                value='nots'
                                disabled={activeView !== userTypes.USER}
                                checked={type === 'nots'}
                                onChange={this.handleTypeChange}
                            />
                        </Form.Field>

                    <Button type="sumbit"className="sumbit-button">Submit</Button>
                </Form>

            </div>
        );
    }
};
