const express = require('express')
const cors = require('cors')
const app = express()
const port = 4000
const database = require("./database_connection")
const bodyParser = require('body-parser')

function getTeamsWithAddedAndLostPlayers(teams, players, additions, losses){
    console.log(teams)
    return teams.map(team => {
        team.addedPlayers = additions.filter(addition => {
            return addition.team_id === team.id
        })
        team.addedPlayers.map(addition => {
            const playerId = addition.player_id
            return addition.player = players.find(player => {
                return player.id === playerId
            })
        })
        // .map(teamAddition => {
        //     const playerId = teamAddition.player_id
        //     return players.find(player => {
        //         return player.id === playerId
        //     })
        // })
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

function getFavoritesWithTeams (favorites, teams) {
    console.log(favorites)
    return favorites.map(favorite => {
        favorite.team_info = teams.filter(team => {
            return favorite.team_id === team.id
        })

        return favorite
    })
}

app.use(cors())
app.use(bodyParser())

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

app.get('/favorites', async(request, response) => {
    const teams = await database("teams").select()
    const players = await database("players").select()
    const additions = await database("additions").select()
    const losses = await database("losses").select()

    const teamsData = getTeamsWithAddedAndLostPlayers(teams, players, additions, losses)
    const favorites = await database("favorites").select()

    response.json({
        favorites: getFavoritesWithTeams(favorites, teamsData)
    })
})

app.post('/favorites', (request, response) => {
    const {team_id} = request.body
    database('favorites').insert({team_id})
    .returning('*')
    .then(rows => {
        response.json(rows[0])
    })
})

app.delete('/favorites/:id', (request, response) => {
    database('favorites').where({id: request.params.id}).del()
        .then(() => {
            response.json("Delete successful")
        })
})

// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
//   });

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})