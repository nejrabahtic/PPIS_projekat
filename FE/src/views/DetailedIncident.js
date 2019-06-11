import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';

import "../styles/DetailedRequest.css";
import Auth from '../services/Auth.js';

export default class DetailedIncident extends Component {
  constructor(props){
      super(props);
      this.state = {
        role: null,
        id: 1,
        
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
    componentDidMount(){

      var rx = /.*\/(\d*)$/gm;
      var res = rx.exec(window.location);
      this.setState({id: parseInt(res[1]) - 1});
      this.setState({
        role: Auth.getRole()
      })
    }
    render(){
      var item = this.state.requests[this.state.id];
        return(
        <div>
            <h1 class="naslov"> {item.title}</h1>
            <h3>Type: Request</h3>

            <div class="ui computer reversed equal width grid" >
                    <div class="row">
                      <div class="column"></div>
                      <div class="column"></div>
                      <div class="column"></div>
                      <div class="column"></div>
                      <div class="column"></div>

                      <div class="left floated left aligned column">
                          <span class="time">{item.date}</span>
                      </div>
                    </div>
                  <div class="row">
                      <div class="column"></div>
                      <div class="column"></div>
                    <div class="left floated left aligned column">
                          <div role="list" class="ui selection middle aligned list">
                          <p></p>
                              <div role="listitem" class="item">
                              <i aria-hidden="true" class="users icon"></i>
                                <div class="content">{item.department}</div>
                              </div>  <p></p>
                              <div role="listitem" class="item">
                              <i aria-hidden="true" class="user icon"></i>
                                <div class="content">{item.creator}</div>
                              </div>
                          </div>
                    </div>
                    <div class="right floated right aligned column">
                    <p></p>
                            <h4 class="meta">Assigned to:</h4>
                            <h4 class="meta">Created by:</h4><br></br>
                        </div>
                        <div class="column">
                        <p></p>
                        <h5>By application </h5>
                        <h5>Telephone </h5>
                        </div>
                      <div class="right floated right aligned column">
                      <p></p>
                      <h5>Report method: </h5>
                      <h5>Contact method: </h5>
                      </div>
                      <div class="column">
                        <h5>{item.priority} </h5>
                        <h5>{item.urgency} </h5>
                        <h5>{item.status} </h5>
                      </div>
                      <div class="right floated right aligned column">
                          <h5>Priority: </h5>
                          <h5>Urgency: </h5>
                          <h5>Status: </h5>
                      </div>
                </div>
                    <div class="row">
                      <div class="column">
                      </div>
                      <div class="column">

                      <br></br>
                      <h4>Detailed Description </h4>
                      </div>
                      <div class="column"></div>
                      <div class="column"></div>
                      <div class="right floated right aligned column">
                      <br></br>
                            <h4>History </h4>
                      </div>
                    </div>


                    <div class="row">
                      <div class="column">{item.short_text}</div>
                      <div class="column">
                      <div class="ui comments">
                        <div class="comment">

                          <div class="content">
                            <a class="author">Admin</a>
                            <div class="metadata"><div>2 days ago</div></div>
                            <div class="text">Assigned to IT department!</div>
                          </div>

                        </div>
                      </div>
                      </div>
                    </div>
            </div>
            { (this.state.role === 'administrator' && item.status === "Waiting approval" )?
              <div className="center-flex-buttons">
                <Button primary>Edit</Button>
                <Button negative>Reject</Button>
                <Button positive >Approve</Button>
              </div>
              :
              null
            }
            { (this.state.role === 'administrator' && item.status === "Waiting review" )?
              <div className="center-flex-buttons">
                <Button primary>Edit</Button>
                <Button negative>Not fullfiled</Button>
                <Button positive >Fulfilled</Button>
              </div>
              :
              null
            }
        </div>

        )
    }
}