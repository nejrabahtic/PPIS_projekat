import React, { Component } from 'react';
import { Bar, Doughnut } from 'react-chartjs-2';
import { Header } from 'semantic-ui-react';

export default class Analytics extends Component {
    constructor(props){
        super(props);
        this.state = {
             dataRequests: {
                labels: ['Waiting approval', 'Approved', 'In process', 'Waiting review', 'In review', 'Fulfiled'],
                datasets: [{
                    label: '# of Votes',
                    data: [12, 19, 3, 5, 2, 3],
                    backgroundColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },

            dataIncidents: {
                labels: ['Waiting approval', 'Approved', 'In process', 'Waiting review', 'In review', 'Fulfiled'],
                datasets: [{
                    label: '# of Votes',
                    data: [2, 11, 20, 15, 22, 20],
                    backgroundColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            }
        }
    }

    render(){
        return (
            <div>
            <p></p>
            <h1 align='center'>Analytics</h1>
            <h3 align='center'>Za Vas svakodnevno vršimo analizu zahtjeva i incidenata. U nastavku možete pogledati koliko procenata requesta i incidenata se nalaze u kojem stanju </h3>
                <div className="flex-column">
                    <div>
                        <Header><h1>Requests</h1></Header>
                    <Bar
                        data={this.state.dataRequests}
                        width={250}
                        height={150}
                        align='center'
                        options={{ maintainAspectRatio: false }}
                    />
                    </div>
                    <div>
                    <Header><h1>Incidents</h1></Header>
                     <Bar
                        data={this.state.dataIncidents}
                        width={250}
                        height={150}
                        options={{ maintainAspectRatio: false }}
                    />
                    </div>
                </div>
            </div>






        );
    }
}
