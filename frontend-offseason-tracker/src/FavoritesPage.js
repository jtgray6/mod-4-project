import React from 'react'

export default function FavoritesPage({favoriteTeams}) {

    const showFavoriteTeam = () => {
        if (favoriteTeams) {
            if (favoriteTeams.length > 0) {
                const firstTeam = favoriteTeams[0]
                return (
                    <div className='favorites-page'>
                        <div className='favorite-team-header'>
                            <img className='favorite-team-logo' src={firstTeam.team_info[0].logo_url} alt={firstTeam.team_info[0].name}/>
                            <h2 className='favorite-team-title'>{firstTeam.team_info[0].name}</h2>
                        </div>
                        <div className='favorite-added-players'>
                            <h3 className='favorite-added-players-title'>Added Players</h3>
                            <div className='favorite-added-players-container'>
                                {showAddedPlayers()}
                            </div>
                        </div>
                        <div className='favorite-lost-players'>
                            <h3 className='favorite-lost-players-title'>Lost Players</h3>
                            <div className='favorite-lost-players-container'>
                                {showLostPlayers()}
                            </div>
                        </div>
                    </div>
                    )
            }
        }
    }

    const showAddedPlayers = () => {
        if (favoriteTeams) {
            if (favoriteTeams.length > 0) {
                const firstTeam = favoriteTeams[0]
                return firstTeam.team_info[0].addedPlayers.map(player => {
                    return (
                        <div className='added-favorite-player' key={player.player.id}>
                            <div className='player-title'>
                                <div className='added-favorite-position'>
                                    {player.player.position}
                                </div>
                                <div>
                                    {player.player.name}
                                </div>
                            </div>
                            <div className='added-player-details'>
                                {player.details}
                            </div>
                        </div>
                    )
                })
            }
        }
    }

    const showLostPlayers = () => {
        if (favoriteTeams) {
            if (favoriteTeams.length > 0) {
                const firstTeam = favoriteTeams[0]
                return firstTeam.team_info[0].lostPlayers.map(player => {
                    return (
                        <div className='lost-favorite-player' key={player.id}>
                            <div className='player-title'>
                                <div class='lost-favorite-position'>
                                    {player.position}
                                </div>
                                <div>
                                    {player.name}
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        }
}

    return (
        <div>
            {showFavoriteTeam()}
        </div>
    )
}
