import React, { Component } from 'react';
import { List, Icon, Image } from 'semantic-ui-react';
import { Header, Button } from 'semantic-ui-react';

import Picture1 from '../assets/Picture1.png';
import { withRouter } from 'react-router-dom';
import "../styles/Color.css";
import "../styles/Home.css";
import Auth from '../services/Auth';


class Home extends Component {

    constructor(props){
        super(props);
        this.state = {
            username: "",
            role: ""
        };
    }
    componentDidMount(){
        this.setState({
            username: Auth.getUsername(),
            role: Auth.getRole()
        })
    }
    render(){
        const { username, role } = this.state;
        const { history } = this.props;
        return(
            <div>
            <br></br>
            <Header size='huge' align="center">Welcome to Book Publishing, {username}</Header>
                <br></br>
                <p class="tekst" align="center">Book Publishing is publishing house with over 50 offices in 25 different countries. HQ is located in Sarajevo. Book Publishing provides support to its clients with whole process of making books or new literature. Book Publishing also takes full responsiblity over all processes that are necessary on path of making books and literature.
                Processes are separate in 6 phases:</p>
                <Image size='massive' centered={true} src={Picture1} />
                <br></br>
<p class="tekst" align="center">For all 7 listed processes we provide services that will allow users to be actively involved in realization of processes.</p>





                <br></br><br></br>
                  <div class="ui four statistics">
                    <div class="ui blue statistic">
                      <div class="value">
                      <i aria-hidden="true" class="point icon"></i>
                      </div>
                      <div class="label">Sarajevo</div>
                    </div>

                    <div class="ui orange statistic">
                      <div class="text value">Tri<br />Hiljade</div>
                      <div class="label">Zadovoljnih korisnika</div>
                    </div>

                    <div class="ui red statistic">
                      <div class="value"><i aria-hidden="true" class="plane icon"></i>25</div>
                      <div class="label">DRŽAVA</div>
                    </div>

                    <div class="ui purple statistic">
                      <div class="value">50</div>
                      <div class="label">FILIJALA</div>
                    </div>
                </div>
                {/* <RequestItem
                    title="New request"
                    created="08/05/2019"
                    description="Cute dogs come in a variety of shapes and sizes. Some cute dogs are cute for their adorable faces, others for their tiny stature, and even others for their massive size."
                /> */}
<br></br><br></br> <br></br>




    <button class="mybutton" onClick={() => {
        history.push('/report')
    }}>CREATE YOUR REQUEST <i aria-hidden="true" class="long arrow alternate right icon"></i></button>

            </div>
        )
    }
}

export default withRouter(Home);
