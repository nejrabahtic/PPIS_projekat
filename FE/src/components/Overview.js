import React, { Component } from 'react';
import '../styles/Overview.css';

import { Button } from 'semantic-ui-react';

export default class Overview extends Component {
    constructor(props){
        super(props);
        this.state = {
            currentTab: "activeTab"
        }
    }
    chageTab = () => {
        if(this.state.currentTab === "activeTab")
            this.setState({ currentTab: "normalTab"})
        else
            this.setState({ currentTab: "activeTab"})

    }
    render() {
     return (
       <div>
           Overview
           <Button onClick={this.chageTab} >Test</Button>
           <div className={this.state.currentTab}>
           </div>

        <div class="ui huge header">Overview</div>
        <div class="ui pointing secondary menu"><a class="active item">Requests</a><a class="item">Incidents</a></div>

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








}
