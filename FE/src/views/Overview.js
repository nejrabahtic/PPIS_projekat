import React, { Component } from 'react';
import '../styles/Overview.css';



function ShowRequests(props) {
  return (
    <div className={props.warn ? "showa": "hidea"}>
      <div class="ui three cards">
        <a class="red card">
          <div class="content">
            <div class="header">New request</div>
            <div class="meta">08/05/2019</div>
            <div class="description">
              <p>Cute dogs come in a variety of shapes and sizes. Some cute dogs are cute for their adorable faces, others for their tiny stature, and even others for their massive size.</p>
            </div>
          </div>
          <div class="extra content">
            IT department
          </div>
        </a>

      <a class="red card">
        <div class="content">
          <div class="header">New request</div>
          <div class="meta">08/05/2019</div>
          <div class="description">
            <p>Cute dogs come in a variety of shapes and sizes. Some cute dogs are cute for their adorable faces, others for their tiny stature, and even others for their massive size.</p>
          </div>
        </div>
        <div class="extra content">
          IT department
        </div>
      </a>


      <a class="red card">
        <div class="content">
          <div class="header">New request</div>
          <div class="meta">08/05/2019</div>
          <div class="description">
            <p>Cute dogs come in a variety of shapes and sizes. Some cute dogs are cute for their adorable faces, others for their tiny stature, and even others for their massive size.</p>
          </div>
        </div>
        <div class="extra content">
          IT department
        </div>
      </a>

      <a class="red card">
        <div class="content">
          <div class="header">New request</div>
          <div class="meta">08/05/2019</div>
          <div class="description">
            <p>Cute dogs come in a variety of shapes and sizes. Some cute dogs are cute for their adorable faces, others for their tiny stature, and even others for their massive size.</p>
          </div>
        </div>
        <div class="extra content">
          IT department
        </div>
      </a>


      <a class="red card">
        <div class="content">
          <div class="header">New request</div>
          <div class="meta">08/05/2019</div>
          <div class="description">
            <p>Cute dogs come in a variety of shapes and sizes. Some cute dogs are cute for their adorable faces, others for their tiny stature, and even others for their massive size.</p>
          </div>
        </div>
        <div class="extra content">
          IT department
        </div>
      </a>



    </div>


    <div class="ui teal card">
      <div class="content">
        <div class="header">New request</div>
        <div class="meta">08/05/2019</div>
        <div class="description">
          <p>Cute dogs come in a variety of shapes and sizes. Some cute dogs are cute for their adorable faces, others for their tiny stature, and even others for their massive size.</p>
        </div>
      </div>
      <div class="extra content">
        IT department
      </div>
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
            inactiveTab: "item"
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
        <ShowRequests warn={this.state.ShowRequest} />
        <ShowIncidents warn={this.state.ShowIncident} />




       </div>

     );
    }

}
