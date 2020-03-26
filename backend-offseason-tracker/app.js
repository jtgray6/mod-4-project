const express = require('express')
const cors = require('cors')
const app = express()
const port = 4000
const database = require("./database_connection")


function getTeamsWithAddedAndLostPlayers(teams, players, additions, losses){
    console.log(teams)
    return teams.map(team => {
        team.addedPlayers = additions.filter(addition => {
            return addition.team_id === team.id
        }).map(teamAddition => {
            const playerId = teamAddition.player_id
            return players.find(player => {
                return player.id === playerId
            })
        })
        team.lostPlayers = losses.filter(loss => {
            return loss.team_id === team.id
        }).map(teamLoss => {
            const playerId = teamLoss.player_id
            return players.find(player => {
                return player.id === playerId
            })
        })

        return team
    })
}

app.use(cors())

app.get('/teams', async(request, response) => {
    const teams = await database("teams").select()
    const players = await database("players").select()
    const additions = await database("additions").select()
    const losses = await database("losses").select()
    console.log(teams)

    response.json({
        teamsWithAddedAndLostPlayers: getTeamsWithAddedAndLostPlayers(teams, players, additions, losses)
    })
})

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})