import React, { Component } from 'react';

export default class DetailedRequest extends Component {
    render(){
        return(

          <div class="ui computer reversed equal width grid">
            <div class="row">

              <div class="column"></div>
              <div class="column"></div>
              <div class="column">
                  <h1> Naziv requesta </h1>
                                    <h3>Type: Request</h3>
                  <span class="time">09/06/2019</span>


              </div>
            </div>





          <div class="row">
              <div class="column"></div>
              <div class="column"></div>
            <div class="left floated left aligned column">
            <br></br><br></br>
                  <div role="list" class="ui selection middle aligned list">
                      <div role="listitem" class="item">
                      <i aria-hidden="true" class="users icon"></i>
                        <div class="content">Management department</div>
                      </div><br></br>
                      <div role="listitem" class="item">
                      <i aria-hidden="true" class="user icon"></i>
                        <div class="content">Neko Nekic</div>
                      </div>
                  </div>
            </div>


            <div class="right floated right aligned column">
            <br></br><br></br>
                    <h4 class="meta">Assigned to:</h4>
                    <h4 class="meta">Created by:</h4><br></br>
                </div>

              <div class="column"></div>
              <div class="column">
                <h5>High </h5>
                <h5>Medium </h5>
                <h5>Created </h5>
                <h5>By application </h5>
                <h5>Telephone </h5>
              </div>
              <div class="right floated right aligned column">
                  <h5>Priority: </h5>
                  <h5>Urgency: </h5>
                  <h5>Status: </h5>
                  <h5>Report method: </h5>
                  <h5>Contact method: </h5>
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
                    <h4>Description </h4>
              </div>
            </div>


            <div class="row">
              <div class="column">A long description A long description A long description A long DescriptionA short descriptionA long description A long description A long description A long description A long DescriptionA short descriptionA long description A long description A long description A long description A long DescriptionA short descriptionA long description A long description A long description A long description A long DescriptionA short descriptionA long description A long description A long description A long description A long DescriptionA short descriptionA long description</div>
              <div class="column"><h5>A short description A short description A short description A short DescriptionA short descriptionA short description</h5></div>
            </div>



          <div class="row">
            <div class="column"></div>
              <div class="column"></div>
            <div class="column"></div>
            <div class="column"></div>
            <div class="column"></div>
            <div class="column"></div>
            <div class="right floated right aligned column">
                  <h4>Comments </h4>
            </div>
          </div>


          <div class="row">
            <div class="column">
            <div class="ui comments">
              <div class="comment">
                <a class="avatar"
                  ><img src="https://react.semantic-ui.com/images/avatar/small/steve.jpg"
                /></a>
                <div class="content">
                  <a class="author">Admin</a>
                  <div class="metadata"><div>2 days ago</div></div>
                  <div class="text">This request is assigned to Management department!</div>
                  <div class="actions"><a class="active">Reply</a></div>
                  <form class="ui reply form">
                    <div class="field"><textarea  placeholder="Write your comment" rows="3"></textarea></div>
                    <button class="ui icon primary left labeled button">
                      <i aria-hidden="true" class="edit icon"></i>Add Reply
                    </button>
                  </form>
                </div>
              </div>
            </div>


            </div>
          </div>






    </div>




        )
    }
}
