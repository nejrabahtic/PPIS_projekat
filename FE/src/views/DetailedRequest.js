import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';

import "../styles/DetailedRequest.css";
import Auth from '../services/Auth.js';

export default class DetailedRequest extends Component {
  constructor(props){
      super(props);
      this.state = {
        role: null,
        id: 1,
        requests:  [{
          'id': '1',
          'title': 'Zahtjev za pristup bazi',
          'date': '02/09/2019',
          'short_text': 'Trebaju admin privilegije korisniku Muhamed_Dev za pristup bazi Fakture radi korekcije pogrešno unesene stavke.',
          'department': 'DevOps Department',
          'priority': 'high',
          'urgency':'high',
          'status':'Approved',
          "creator":"Nedim Džonlagić"
        },{
          'id': '2',
          'title': 'Change template',
          'date': '03/09/2019',
          'short_text': 'Suggestions for changing book template',
          'department': 'Production',
          'priority': 'medium',
          'urgency':'medium',
          'status':'Waiting review',
          "creator":"Nedim Džonlagić"
        },{
          'id':'3',
          'title': 'New cover page',
          'date': '06/09/2019',
          'short_text': 'Changes in design',
          'department': 'Production',
          'priority': 'low',
          'urgency':'medium',
          'status':'In process',
          "creator":"Nedim Džonlagić"
        },{
          'id': '4',
          'title': 'Designing books online permission',
          'date': '06/09/2019',
          'short_text': 'I need permission for access design module',
          'department': 'Aquisition',
          'priority': 'low',
          'urgency':'high',
          'status':'Rejected',
          "creator":"Nedim Džonlagić"
        },
        {
          'id': '5',
          'title': 'Marketing issues',
          'date': '06/09/2019',
          'short_text': 'Needed mail and number of company that do marketing',
          'department': 'Marketing',
          'priority': 'low',
          'urgency':'high',
          'status':'Waiting approval',
          "creator":"Nejra Bahtić"
        },
        {
          'id': '6',
          'title': 'Dodatni copy editing potreban',
          'date': '03/09/2019',
          'short_text': 'Primijćene su dodatne nekonzistentnosti prilikom pregleda knjige "Naučite c++ za 365 dana", te je potrebno uraditi još jedan ili više copy editinga',
          'department': 'Not set',
          'priority': 'medium',
          'urgency':'high',
          'status':'Waiting approval',
          "creator":"Nejra Bahtić"
        },
        {
          'id':'7',
          'title': 'Otkazati distribuciju u Etiopiji',
          'date': '06/08/2019',
          'short_text': 'Nema smisla prodavati knjigu "Gurmetska hrana" po regijama Etiopije te treba otkazati sve planove i dogovore.',
          'department': 'Sales department',
          'priority': 'high',
          'urgency':'low',
          'status':'Approved',
          "creator":"Muhamed Delalić"
        },
        {
          'id':'8',
          'title': 'Potreban dodatni marketing',
          'date': '06/09/2019',
          'short_text': 'Novo izdanje knjige "100 dana ispita" treba dodatni društveni marketing. Ciljna grupa su osobe starosnih dobi od 15 do 25 godina, ',
          'department': 'Marketing department ',
          'priority': 'medium',
          'urgency':'high',
          'status':'Waiting review',
          "creator":"Nedim Džonlagić"
        },
        {
          'id':'9',
          'title': 'Potrebna nova cover slika',
          'date': '30/08/2019',
          'short_text': 'Stara slika za knjigu "Nema predavanja" se ne slaže sa starom. Potrebno je dizajnirati novu sliku koja je više adekvatna.',
          'department': 'Design department',
          'priority': 'low',
          'urgency':'low',
          'status':'Fulfilled',
          "creator":"Amina Aljićević"
        }
      ]

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
            <div>
            <p></p>
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
                      <p></p>
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
                                <div class="content"><h4>{item.department}</h4></div>
                              </div>  <p></p>
                              <div role="listitem" class="item">
                              <i aria-hidden="true" class="user icon"></i>
                                <div class="content"><h4>{item.creator}</h4></div>
                              </div>
                          </div>
                    </div>
                    <div class="right floated right aligned column">
                    <p></p>
                            <h3 class="meta">Assigned to:</h3>
                            <h3 class="meta">Created by:</h3><br></br>
                        </div>
                        <div class="column">
                        <p></p>
                        <h3>By application </h3>
                        <h3>Telephone </h3>
                        </div>
                      <div class="right floated right aligned column">
                      <p></p>
                      <h3>Report method: </h3>
                      <h3>Contact method: </h3>
                      </div>
                      <div class="column">
                        <h3>{item.priority} </h3>
                        <h3>{item.urgency} </h3>
                        <h3>{item.status} </h3>
                      </div>
                      <div class="right floated right aligned column">
                          <h3>Priority: </h3>
                          <h3>Urgency: </h3>
                          <h3>Status: </h3>
                      </div>
                </div>
                    <div class="row">
                      <div class="column">
                      </div>
                      <div class="left floated left aligned column">

                      <br></br>
                      <h2>History</h2>
                      </div>
                      <div class="column"></div>
                      <div class="right floated right aligned column">
                      <br></br>
                            <h2>Detailed Description </h2>
                      </div>
                    </div>


                    <div class="row">

                      <div class="column">
                      <div class="ui comments">
                        <div class="comment">

                          <div class="content">
                            <a class="author">Admin</a>
                            <div class="metadata"><h5>2 days ago</h5></div>
                            <div class="meta"><p class="tekstic">Status changed to waiting for approval!</p></div>
                          </div>
                          <br></br>

                          <div class="content">
                            <a class="author">Admin</a>
                            <div class="metadata"><h5>2 days ago</h5></div>
                            <div class="meta"><p class="tekstic">Status changed to Approved!</p></div>
                          </div>
                          <br></br>


                          <div class="content">
                            <a class="author">Admin</a>
                            <div class="metadata"><h5>2 days ago</h5></div>
                            <div class="meta"><p class="tekstic">Status changed to In process!</p></div>
                          </div>
                              <br></br>

                          <div class="content">
                            <a class="author">Admin</a>
                            <div class="metadata"><h5>2 days ago</h5></div>
                            <div class="meta"><p class="tekstic">Status changed to waiting review!</p></div>
                          </div>
                              <br></br>

                          <div class="content">
                            <a class="author">Admin</a>
                            <div class="metadata"><h5>2 days ago</h5></div>
                            <div class="meta"><p class="tekstic">Status changed to In review!</p></div>
                          </div>
                              <br></br>

                        </div>

                      </div>


                      </div>
                              <div class="column"><p class="tekstic">{item.short_text} Molimo da provjerite zahtjev. </p></div>
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
