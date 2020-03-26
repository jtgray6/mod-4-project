import React, { Component } from 'react';
import './App.css';
import TeamsPage from './TeamsPage'

class App extends Component {

  state = {
    teamData: []
  }

  componentDidMount(){
    fetch('http://localhost:4000/teams')
      .then(response => response.json())
      .then(data => this.setState({teamData: data.teamsWithAddedAndLostPlayers}))
  }

  render(){
    return (
      <div className="App">
        <TeamsPage teamData={this.state.teamData}/>
      </div>
    );
  }
}

export default App;