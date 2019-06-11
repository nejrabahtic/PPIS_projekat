import React, { Component } from 'react';
import '../styles/Overview.css';



function ShowRequests(props) {
  return (
    <div className={props.warn ? "showa": "hidea"}>
    <div class="ui three cards" >

        {
          props.requests.map( (item, index) => (
            <a href={"/requestPreview/"+item.id} className={(() => {
                switch (item.priority) {
                case 'high':   return 'red card';
                case "medium": return 'yellow card';
                default:      return 'green card';
              }
            })()} key={index}>


            <p class="statuss">Status: {item.status}</p>
              <div class="content">
                <div class="meta">
                  <span class="right floated time">{item.date}</span>
                </div>
                <div class="header">{item.title}</div>
                <br></br>
                <div class="meta">
                  <span class="category">Urgency: {item.urgency}</span>
                </div>
                <div class="description">
                  <p>{item.short_text}</p>
                </div>
              </div>
              <div class="extra content">
                {item.department}
                <span class="right floated time">Priority: <strong>{item.priority}</strong></span>
              </div>
            </a>
          ))
        }
        </div>
    </div>
  );
}

function ShowIncidents(props) {
  return (
    <div className={props.warn ? "showa": "hidea"}>

    <div role="list" class="ui huge celled selection middle aligned list">

{
    props.incidents.map((item,index) =>(
<div role="listitem" href={"/requestPreview/"+item.id} class="item" key={index}>
    ))
    <a href={"/requestPreview/"+item.id} c>
    <a  className={(() => {
      switch (item.priority) {
      case 'high':   return 'ui red ribbon label';
      case "medium": return 'ui yellow ribbon label';
      default:      return 'ui green ribbon label';
      }
    })()} >Priotity: {item.priority}
    </a><p></p>
        
        <div class="content">

          <a class="header">{item.title}</a>
          <div class="fontt"> Status: {item.status} </div>
          <div class="fontt"> Urgency: {item.urgency} </div>
          <div class="description">
          {item.short_text}
          </div>
          <span class="datum">{item.date}</span>
                  </div>
          <a class="ui label"><i aria-hidden="true" class="users icon"/>{item.department}</a>
  </a>
      </div>



))

}
    </div>

    </div>

  );
}

export default class Overview extends Component {
    constructor(props){
        super(props);
        this.state = {
            showWarning: true,
            ShowRequest:true,
            ShowIncident: false,
            currentTab: "active item",
            inactiveTab: "item",
            requests:  [{
              'id': '1',
              'title': 'Reviewing books online permission',
              'date': '02/09/2019',
              'short_text': 'I need permission in order to access module for reviewing books. Can you provide that for me?',
              'department': 'Copy editing',
              'priority': 'high',
              'urgency':'high',
              'status':'created',
            },{
              'id': '2',
              'title': 'Change template',
              'date': '03/09/2019',
              'short_text': 'Suggestions for changing book template',
              'department': 'Production',
              'priority': 'medium',
              'urgency':'medium',
              'status':'pending',
            },{
              'id':'3',
              'title': 'New cover page',
              'date': '06/09/2019',
              'short_text': 'Changes in design',
              'department': 'Production',
              'priority': 'low',
              'urgency':'medium',
              'status':'created',
            },{
              'id': '4',
              'title': 'Designing books online permission',
              'date': '06/09/2019',
              'short_text': 'I need permission for access design module',
              'department': 'Aquisition',
              'priority': 'low',
              'urgency':'high',
              'status':'created',
            },
            {
              'id': '5',
              'title': 'Marketing issues',
              'date': '06/09/2019',
              'short_text': 'Needed mail and number of company that do marketing',
              'department': 'Marketing',
              'priority': 'low',
              'urgency':'high',
              'status':'pending',
            }
          ],

            incidents:  [{
              'id': '1',
              'title': 'Network unavailable',
              'date': '02/09/2019',
              'short_text': 'Something regarding network is broken and we can not connected on our network in odred to have access to internet',
              'department': 'IT department',
              'priority': 'high',
              'urgency':'high',
              'status':'created',
            },{
              'id': '2',
              'title': 'Printer broken',
              'date': '03/09/2019',
              'short_text': 'Main printer for book printing is broken. It is not missing paper or cartridge.',
              'department': 'IT department',
              'priority': 'high',
              'urgency':'high',
              'status':'pending',
            },{
              'id':'3',
              'title': 'Email is not working',
              'date': '06/09/2019',
              'short_text': 'My email is not working. Please help.',
              'department': 'IT department',
              'priority': 'medium',
              'urgency':'medium',
              'status':'pending',
            },{
              'id':'4',
              'title': 'Unable to open PDF documents',
              'date': '06/09/2019',
              'short_text': 'After I updated windows last night, I am not able to open PDF documents',
              'department': 'IT department',
              'priority': 'high',
              'urgency':'high',
              'status':'created',
            }]
        }
    }




    chageTab = () => {
        this.setState(prevState => ({
        ShowRequest: !prevState.ShowRequest,
        ShowIncident: !prevState.ShowIncident
      }))
        if(this.state.currentTab === "active item"){
            this.setState({ inactiveTab: "active item"})
            this.setState({currentTab: "item"})}
        else
            {this.setState({ currentTab: "active item"})
            this.setState({inactiveTab:"item"})}

    }
    render() {
     return (

    <div>

        <div class="ui huge header">Overview</div>

        <div class="ui pointing secondary menu">
          <span onClick={this.chageTab} className={this.state.currentTab}> Requests</span>
          <span onClick={this.chageTab} className={this.state.inactiveTab}>Incidents</span>
        </div>
        <ShowRequests warn={this.state.ShowRequest} requests={this.state.requests}/>
        <ShowIncidents warn={this.state.ShowIncident} incidents={this.state.incidents}/>


       </div>

     );
    }

}
