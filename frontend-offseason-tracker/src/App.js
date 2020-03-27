import React, { Component } from 'react';
import './App.css';
import TeamsPage from './TeamsPage'
import FavoritesPage from './FavoritesPage'
import Header from './Header'
import {BrowserRouter as Router, Route} from 'react-router-dom'

class App extends Component {

  state = {
    teamData: [],
    favoriteTeams: []
  }

  componentDidMount(){
    fetch('http://localhost:4000/teams')
      .then(response => response.json())
      .then(data => this.setState({teamData: data.teamsWithAddedAndLostPlayers}))
    fetch('http://localhost:4000/favorites')
      .then(response => response.json())
      .then(favoriteTeams => this.setState({favoriteTeams}))
  }

  addTeamToFavorites = (faveTeam, event) => {
    if (!this.state.favoriteTeams.favorites.find(team => team.id === faveTeam.id)) {
      this.setState({
        favoriteTeams: [...this.state.favoriteTeams.favorites, faveTeam]
      })
      event.target.style.color = 'white'
      fetch('http://localhost:4000/favorites', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          team_id: faveTeam.id
        })
      })
    }
  }

  render(){
    return (
      <div className="App">
          <Header />
        <Router>
          <Route path='/home'>
            <TeamsPage teamData={this.state.teamData} addTeamToFavorites={this.addTeamToFavorites}/>
          </Route>
          <Route path='/favorites'>
            <FavoritesPage favoriteTeams={this.state.favoriteTeams.favorites}/>
          </Route>
        </Router>
      </div>
    );
  }
}

export default App;