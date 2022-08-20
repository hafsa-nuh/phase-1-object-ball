function gameObject (){
    /**  u can also just use return {
     * home : {
            teamName : "Brooklyn Nets",
            colour : ['Black', 'White'],
            .....
        } instead of creating and variable (obj)= which also takes a storage to store this variable */
    const obj = {
        home : {
            teamName : "Brooklyn Nets",
            colour : ['Black', 'White'],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assits: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1,
                },
                "Reggie Evens": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assits: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assits: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15,
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assits: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5,
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assits: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1,
                },
            },
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assits: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,
                },
                "Bismack Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assits: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10,
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assits: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assits: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0,
                },
                "Brendan Hayword": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assits: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12,
                },
            },
        },
    };
    return obj;
}
console.log(gameObject());

const game = gameObject(); // we created a game variable and assigned it gameObject 

function playersObject() {
    return { ...game.home.players, ...game.away.players }; // we are using spread oparetor to copy our gameobject  
} // by using the game variable we spread the objects inside bodth home and away key to be able to access the players in each of the home and away keys . this is so that all the players can be in 1 object ( in this we can use object.assign{game.home.player, game.away.players}) 
playersObject()

const players = playersObject(); // by creating the players we want to be able to access the players objects points,shoes,,,,   (we  can also just create const players = {...game.home.players, ...game.away.players}


function numPointsScored(playerName){
    return players[playerName].points
} // [playername = is writen in a string form and do to that we have to use the bracket notation to access the name key] and by using the (. notation we were accessing the key of the name object)

console.log('jeff adriens points',numPointsScored('Jeff Adrien'))

function shoeSize(playerName){
    return players[playerName].shoe
}
console.log('alan andersons shoesize' ,shoeSize('Alan Anderson'))
/** in the above functions we found the shoeSize and Points for each players by passing it in the function */

/** finding teamcolor, teamName */

const teams = Object.values(game); // in this we wanted to access the values inside the game(both home and away object) object

function findByTeamName(teamName) {
    return teams.find((teamNameObject) => teamNameObject.teamName == teamName);
} // we created this function so that we can be able to access the colors of each by by teamName  , by passing the name of the team we get all the properties of that team
console.log('finding the teams by team name',findByTeamName('Brooklyn Nets'))

function teamColors(teamName) {
    return findByTeamName(teamName).colors;
}
console.log('finding the team colour by team name',teamColors('Charlotte Hornets')) 

function teamNames() {
    return teams.map((teamN) => teamN.teamName);
} // we used map to make a copy of teams object(both home and away object) to access the teamNames without altering the object.
console.log('the team name of both home and away is',teamNames())


/** below we are to build function of playerNumber,playerStats and bigShoeRebounds*/

function playerNumbers(targetTeamName) {
    for (const jersey of teams) {
      if (jersey.teamName == targetTeamName) {
        let player = Object.values(jersey.players);
        return player.map((stat) => stat.number);
      }
    }
} // in this we want to be able to access the jersey number of the all the  players by invoking the teamName 
console.log('each teams numbers by teamName',playerNumbers('Charlotte Hornets'))

function playerStats(playerName) {
    return players[playerName];
} // by passing the players name as an argument we return the object of that play
console.log('each players object by passing the player name',playerStats('Brook Lopez'))

function bigShoeRebounds() {
    const biggest = Object.values(players).sort((a, b) => {
        if (a.shoe > b.shoe) return -1; 
        if (a.shoe < b.shoe) return 1;
        if (a.shoe == b.shoe) return 0;
    })[0];
    return biggest.rebounds;
}
console.log(bigShoeRebounds()) // mason plumlee has the biggest shoesize of 19 , we are trying to find his rebounds which is (12)

/**Bonus Questions */
/** in this we have to Define functions to return the answer to the following questions: */
// 1.) Which player has the most points? Call the function mostPointsScored.

function mostPointsScored() {
    const sorted = Object.entries(players).sort((a, b) => {
        if (a[1].points > b[1].points) return -1;
        if (a[1].points < b[1].points) return 1;
        if (a[1].points == b[1].points) return 0;
      });
      return sorted[0][0];
}
console.log(mostPointsScored())

// 2.) Which team has the most points? Call the function winningTeam.

function winningTeam() {
    const homeStats = Object.values(game.home.players); 
    const awayStats = Object.values(game.away.players); 
    const homeScore = homeStats.reduce((total, stat) => total + stat.points, 0);
    const awayScore = awayStats.reduce((total, stat) => total + stat.points, 0);
    debugger;
    if (homeScore > awayScore) {
      return game.home.teamName;
    } else if (awayScore > homeScore) {
      return game.away.teamName;
    } else {
      return ;
    }
}
console.log(winningTeam())
