import React from 'react'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';


export default function TeamCard({team}) {

    console.log(team)

    const showAddedPlayers = () => {
        return team.addedPlayers.map(player => {
            return (
                <div className='player-item'>
                    <p className='player-position'>{player.position}</p>
                    <p className='player-name'>{player.name}</p>
                </div>
            )
        }
    )}
    const showLostPlayers = () => {
        return team.lostPlayers.map(player => {
            return (
                <div className='player-item'>
                    <p className='player-position'>{player.position}</p>
                    <p className='player-name'>{player.name}</p>
                </div>
            )
        }
    )}

    return (
        <Card className='team-card'>
          <CardContent className='team-card-content'>
            <Typography component='div' className='team-card-header'>
                <img src={team.logo_url} alt={team.name} className='card-logo'/>
                <p className="team-card-name">{team.name}</p>
            </Typography>
                <h3 className='player-container-title'>Added Players</h3>
            <Typography className='players-list'>
                {showAddedPlayers()}
            </Typography>
                <h3 className='player-container-title'>Lost Players</h3>
            <Typography className='players-list'>
                {showLostPlayers()}
            </Typography>
          
            <CardActions className='card-actions'>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
            </CardActions>
          </CardContent>
        </Card>
      );
}
