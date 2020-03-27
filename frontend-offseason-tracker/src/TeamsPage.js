import React from 'react'
import TeamCard from './components/TeamCard'

export default function TeamsPage(props) {


    const showTeams = () => { 
        return props.teamData.map(team => {
            return <TeamCard key={team.id} team={team} addTeamToFavorites={props.addTeamToFavorites}/>
        })
    }

    return (
        <div className='team-card-container'>
            {showTeams()}
        </div>
    )
}
