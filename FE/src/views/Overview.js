import React, { Component } from 'react';
import '../styles/Overview.css';

import { Button } from 'semantic-ui-react';


function ShowRequests(props) {
  return (
    <div className={props.warn ? "showa": "hidea"}>
    <div class="ui three cards" >

        {
          props.requests.map( (item, index) => (
            <a className={(() => {
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
       <a class="ui red ribbon label">High priority</a>
      <div role="listitem" class="item">
        <i aria-hidden="true" class="marker red icon"></i>
        <div class="content">
          <a class="header">Krowlewskie Jadlo</a>
          <div class="description">
            An excellent polish restaurant, quick delivery and hearty, filling
            meals.
          </div><a class="ui label"><i aria-hidden="true" class="user icon"/>Aamina1</a>
          <span>20/05/2019</span>
        </div>
      </div>
      <div role="listitem" class="item">
        <i aria-hidden="true" class="marker red icon"></i>
        <div class="content">
          <a class="header">Xian Famous Foods</a>
          <div class="description">
            A taste of Shaanxi&#x27;s delicious culinary traditions, with delights
            like spicy cold noodles and lamb burgers.
          </div>
        </div>
      </div>
      <div role="listitem" class="item">
        <i aria-hidden="true" class="marker orange icon"></i>
        <div class="content">
          <a class="header">Sapporo Haru</a>
          <div class="description">
            Greenpoint&#x27;s best choice for quick and delicious sushi.
          </div>
        </div>
      </div>
      <div role="listitem" class="item">
        <i aria-hidden="true" class="marker yellow icon"></i>
        <div class="content">
          <a class="header">Enid&#x27;s</a>
          <div class="description">
            At night a bar, during the day a delicious brunch spot.
          </div>
        </div>
      </div>
    </div>


    <div role="list" class="ui huge celled selection middle aligned list">
  <a class="ui yellow ribbon label">Medium priority</a>
 <div role="listitem" class="item">
   <i aria-hidden="true" class="marker red icon"></i>
   <div class="content">
     <a class="header">Krowlewskie Jadlo</a>
     <div class="description">
       An excellent polish restaurant, quick delivery and hearty, filling
       meals.
     </div>
     <span>aamina1</span>
   </div>
 </div>
 <div role="listitem" class="item">
   <i aria-hidden="true" class="marker red icon"></i>
   <div class="content">
     <a class="header">Xian Famous Foods</a>
     <div class="description">
       A taste of Shaanxi&#x27;s delicious culinary traditions, with delights
       like spicy cold noodles and lamb burgers.
     </div>
   </div>
 </div>
 <div role="listitem" class="item">
   <i aria-hidden="true" class="marker orange icon"></i>
   <div class="content">
     <a class="header">Sapporo Haru</a>
     <div class="description">
       Greenpoint&#x27;s best choice for quick and delicious sushi.
     </div>
   </div>
 </div>
 <div role="listitem" class="item">
   <i aria-hidden="true" class="marker yellow icon"></i>
   <div class="content">
     <a class="header">Enid&#x27;s</a>
     <div class="description">
       At night a bar, during the day a delicious brunch spot.
     </div>
   </div>
 </div>
</div>


<div role="list" class="ui huge celled selection middle aligned list">
  <a class="ui green ribbon label">Low priority</a>
 <div role="listitem" class="item">
   <i aria-hidden="true" class="marker red icon"></i>
   <div class="content">
     <a class="header">Krowlewskie Jadlo</a>
     <div class="description">
       An excellent polish restaurant, quick delivery and hearty, filling
       meals.
     </div>
     <span>aamina1</span>
   </div>
 </div>
 <div role="listitem" class="item">
   <i aria-hidden="true" class="marker red icon"></i>
   <div class="content">
     <a class="header">Xian Famous Foods</a>
     <div class="description">
       A taste of Shaanxi&#x27;s delicious culinary traditions, with delights
       like spicy cold noodles and lamb burgers.
     </div>
   </div>
 </div>
 <div role="listitem" class="item">
   <i aria-hidden="true" class="marker orange icon"></i>
   <div class="content">
     <a class="header">Sapporo Haru</a>
     <div class="description">
       Greenpoint&#x27;s best choice for quick and delicious sushi.
     </div>
   </div>
 </div>
 <div role="listitem" class="item">
   <i aria-hidden="true" class="marker yellow icon"></i>
   <div class="content">
     <a class="header">Enid&#x27;s</a>
     <div class="description">
       At night a bar, during the day a delicious brunch spot.
     </div>
   </div>
   </div>
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
              'title': 'PRvi request',
              'date': '02/09/2019',
              'short_text': 'NEki tekst koji je kraci ya prvi request tekst koji je kraci jhzhzub tekst koji je kraci jhzhzub tekst koji je kraci jhzhzub',
              'department': 'IT department',
              'priority': 'high',
              'urgency':'high',
              'status':'created',
            },{
              'title': 'Drugi incident',
              'date': '03/09/2019',
              'short_text': 'NEki tekst koji ,je kraci ya drugi request jhzhzub tekst koji je kraci jhzhzub tekst koji je kraci jhzhzub tekst koji je kraci jhzhzub',
              'department': 'IT department',
              'priority': 'medium',
              'urgency':'high',
              'status':'pending',
            },{
              'title': 'PRvi incident',
              'date': '06/09/2019',
              'short_text': 'NEki tekst koji je kraci ya treci requestjhzhzub tekst koji je kraci jhzhzub tekst koji je kraci jhzhzub tekst koji je kraci jhzhzub',
              'department': 'IT department',
              'priority': 'low',
              'urgency':'medium',
              'status':'created',
            },{
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
        <ShowIncidents warn={this.state.ShowIncident} />




       </div>

     );
    }

}
