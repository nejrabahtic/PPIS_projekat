import React, { Component } from 'react';
import '../styles/Overview.css';



function ShowRequests(props) {
  return (
    <div className={props.warn ? "showa": "hidea"}>
    <br></br><p></p>
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


            <p class="statuss">{item.status}</p>
              <div class="content">
                <div class="meta">
                  <span class="right floated time">{item.date}</span>
                </div>
                <div class="header"><h3>{item.title}</h3></div>
                <br></br>
                <div class="meta">
                  <span class="category">Urgency: {item.urgency}</span>
                </div>
                <div class="description">
                  <h4>{item.short_text}</h4>
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
    <br></br>
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
  <br></br> 
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
          ],

            incidents:  [{
              'id': '1',
              'title': 'Network unavailable',
              'date': '02/09/2019',
              'short_text': 'Something regarding network is broken and we can not connected on our network in odred to have access to internet',
              'department': 'IT department',
              'priority': 'high',
              'urgency':'high',
              'status':'Fulfilled',
            },{
              'id': '2',
              'title': 'Printer broken',
              'date': '03/09/2019',
              'short_text': 'Main printer for book printing is broken. It is not missing paper or cartridge.',
              'department': 'IT department',
              'priority': 'high',
              'urgency':'high',
              'status':'Waiting review',
            },{
              'id':'3',
              'title': 'Email is not working',
              'date': '06/09/2019',
              'short_text': 'My email is not working. Please help.',
              'department': 'IT department',
              'priority': 'medium',
              'urgency':'medium',
              'status':'Waiting review',
            },{
              'id':'4',
              'title': 'Unable to open PDF documents',
              'date': '06/09/2019',
              'short_text': 'After I updated windows last night, I am not able to open PDF documents',
              'department': 'IT department',
              'priority': 'high',
              'urgency':'high',
              'status':'Approved',
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
      <p></p>
        <div class="ui huge header" align='center'><h1>Overview</h1></div>

        <div class="ui pointing secondary menu">
          <span onClick={this.chageTab} className={this.state.currentTab}><h3> Requests</h3></span>
          <span onClick={this.chageTab} className={this.state.inactiveTab}><h3>Incidents</h3></span>
        </div>
        <ShowRequests warn={this.state.ShowRequest} requests={this.state.requests}/>
        <ShowIncidents warn={this.state.ShowIncident} incidents={this.state.incidents}/>


       </div>

     );
    }

}
