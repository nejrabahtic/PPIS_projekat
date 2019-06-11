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
            type: null,
            title: "",
            categorty: "",
            description: "",
            categories: ["Editing", "Marketing", "Distribution", "Printing"]
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
    submit = () => {
        console.log(this.state.title, this.state.categorty, this.state.description, this.state.type);
    }
    handleTitleChange = (e) => {
        this.setState({ title: e.target.value })
    }
    handleDescriptionChange = (e) => {
        this.setState({ description: e.target.value });
    }
    handleCategoryChange = (e, data) => {
        this.setState({ categorty: data.value})
    }
    render(){
        const { activeView, type, title, categorty, description, categories } = this.state;
        return (
            <div className="report-page">
            <h1 align="center"> Form for creating new request/incident</h1>
            <br></br>
                <Form className="report-form">
                    <Header className="accent-color"></Header>
                        <Form.Field required={true}>
                            <label className="polje"><p className="polje">Title</p></label>
                            <input type="text" value={title} onChange={this.handleTitleChange}></input>
                        </Form.Field>
                        <Form.Field required={true}>
                            <label className="polje"><p className="polje">Categorty</p></label>
                            <Form.Select
                                value={categorty}
                                onChange={this.handleCategoryChange}
                                options={categories.map(item => ({ key: item, text: item, value: item }))}>

                            </Form.Select>
                        </Form.Field>
                        <Form.Field required={true}>
                            <label className="polje">Description:</label>
                            <textarea className="description" rows="10" value={description} onChange={this.handleDescriptionChange}></textarea>
                        </Form.Field>
                        <Form.Field required={true}>
                            <label className=""><p class="polje">Type:</p></label>
                            <Form.Radio
                                label={() => <label className="">Request</label>}
                                value='req'
                                checked={type === 'req'}
                                onChange={this.handleTypeChange}

                            />
                            <Form.Radio
                                label={() => <label className="">Incident</label>}
                                value='inc'
                                checked={type === 'inc'}
                                onChange={this.handleTypeChange}
                            />
                            <Form.Radio
                                label={() => <label className="">Not Sure</label>}
                                value='nots'
                                disabled={activeView !== userTypes.USER}
                                checked={type === 'nots'}
                                onChange={this.handleTypeChange}
                            />
                        </Form.Field>

                    <Button type="sumbit"className="sumbit-button" onClick={this.submit}>Submit</Button>
                </Form>

            </div>
        );
    }
};
