import React, { Component } from 'react';

export default class DetailedRequest extends Component {
  constructor(props){
      super(props);
      this.state = {
        requests:  [{
          'id': '1',
          'title': 'PRvi request',
          'date': '02/09/2019',
          'department': 'IT department',
          'creator': 'Neko Nekic',
          'priority': 'high',
          'urgency':'high',
          'status':'created',
          'report_method': 'By application',
          'contact_method': 'Telephone',
          'description': 'A long description A long description A long description A long DescriptionA short descriptionA long description A long description A long description A long description A long DescriptionA short descriptionA long description A long description A long description A long description A long DescriptionA short descriptionA long description A long description A long description A long description A long DescriptionA short descriptionA long description A long description A long description A long description A long DescriptionA short descriptionA long description'
        }]

      }
}
    render(){
        return(
<div>
{this.state.requests.map(item => (
    <div class="ui computer reversed equal width grid" key={item}>


            <div class="row">
              <div class="column"></div>
              <div class="column"></div>
              <div class="column"></div>
              <div class="column"></div>
              <div class="column"></div>

              <div class="left floated left aligned column">
                  <h1 class="naslov"> {item.title}</h1>
                                    <h3>Type: Request</h3>
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
            <div class="column">

            </div>
            <div class="column">
              <h5>High </h5>
              <h5>Medium </h5>
              <h5>Created </h5>
              <h5>By application </h5>
              <h5>Telephone </h5>
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
              <div class="column"></div>
                <div class="column"></div>
              <div class="column">
              <br></br>
              <h4>Detailed Description </h4>
              </div>
              <div class="column"></div>
              <div class="column"></div>
              <div class="column"></div>
              <div class="right floated right aligned column">
              <br></br>
                    <h4>Comments </h4>
              </div>
            </div>
            <div class="row">
              <div class="column">{item.description}</div>
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
))}
</div>


        )
    }
}
