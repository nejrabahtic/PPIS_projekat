import React, { Component } from 'react';
import '../styles/Overview.css';



function ShowRequests(props) {
  return (
    <div className={props.warn ? "showa": "hidea"}>
    <div class="ui three cards" >

        {
          props.requests.map( (item, index) => (
            <a href={"/requestPreview/"+item.id}className={(() => {
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
                <div class="header">{item.title}</div><br></br>
                <div class="meta">
                  <span class="category">Urgency: {item.urgency}</span>
                  </div>
                <div class="description">
                  <p>{item.short_text}</p>
                </div>
              </div>
              <div class="extra content">
                {item.department}
                              <span class="right floated time">Priority:{item.priority}</span>
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
              'title': 'PRvi request',
              'date': '02/09/2019',
              'short_text': 'NEki tekst koji je kraci ya prvi request tekst koji je kraci jhzhzub tekst koji je kraci jhzhzub tekst koji je kraci jhzhzub',
              'department': 'IT department',
              'priority': 'high',
              'urgency':'high',
              'status':'created',
            },{
              'id': '2',
              'title': 'Drugi incident',
              'date': '03/09/2019',
              'short_text': 'NEki tekst koji ,je kraci ya drugi request jhzhzub tekst koji je kraci jhzhzub tekst koji je kraci jhzhzub tekst koji je kraci jhzhzub',
              'department': 'IT department',
              'priority': 'medium',
              'urgency':'high',
              'status':'pending',
            },{
              'id':'3',
              'title': 'PRvi incident',
              'date': '06/09/2019',
              'short_text': 'NEki tekst koji je kraci ya treci requestjhzhzub tekst koji je kraci jhzhzub tekst koji je kraci jhzhzub tekst koji je kraci jhzhzub',
              'department': 'IT department',
              'priority': 'low',
              'urgency':'medium',
              'status':'created',
            },{
              'id':'4',
              'title': 'PRvi incident',
              'date': '06/09/2019',
              'short_text': 'NEki tekst koji je kraci jhzhzub tekst koji je kraci jhzhzub tekst koji je kraci jhzhzub tekst koji je kraci jhzhzub',
              'department': 'IT department',
              'priority': 'high',
              'urgency':'high',
              'status':'created',
            }],

            incidents:  [{
              'id': '1',
              'title': 'PRvi incident',
              'date': '02/09/2019',
              'short_text': 'NEki tekst koji je kraci ya prvi request tekst koji je kraci jhzhzub tekst koji je kraci jhzhzub tekst koji je kraci jhzhzub',
              'department': 'IT department',
              'priority': 'high',
              'urgency':'high',
              'status':'created',
            },{
              'id': '2',
              'title': 'Drugi incident',
              'date': '03/09/2019',
              'short_text': 'NEki tekst koji ,je kraci ya drugi request jhzhzub tekst koji je kraci jhzhzub tekst koji je kraci jhzhzub tekst koji je kraci jhzhzub',
              'department': 'IT department',
              'priority': 'medium',
              'urgency':'high',
              'status':'pending',
            },{
              'id':'3',
              'title': 'PRvi incident',
              'date': '06/09/2019',
              'short_text': 'NEki tekst koji je kraci ya treci requestjhzhzub tekst koji je kraci jhzhzub tekst koji je kraci jhzhzub tekst koji je kraci jhzhzub',
              'department': 'IT department',
              'priority': 'low',
              'urgency':'medium',
              'status':'created',
            },{
              'id':'4',
              'title': 'PRvi incident',
              'date': '06/09/2019',
              'short_text': 'NEki tekst koji je kraci jhzhzub tekst koji je kraci jhzhzub tekst koji je kraci jhzhzub tekst koji je kraci jhzhzub',
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

        <div class="ui pointing secondary menu"><a  onClick={this.chageTab} className={this.state.currentTab}> Requests</a><a onClick={this.chageTab} className={this.state.inactiveTab}>Incidents</a></div>
        <ShowRequests warn={this.state.ShowRequest} requests={this.state.requests}/>
        <ShowIncidents warn={this.state.ShowIncident} incidents={this.state.incidents}/>


       </div>

     );
    }

}
