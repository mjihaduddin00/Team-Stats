const team = {
  _players: [
    {firstName: 'Mohammad Jihad', lastName: 'Uddin', age: 20},
    {firstName: 'Amina', lastName: 'Yusuf', age: 20},
    {firstName: 'Mochi', lastName: 'Nala', age: 15}
  ],

  _games: [
    {opponent: 'Broncos', teamPoints: 37, opponentPoints: 44},
    {opponent: 'Packers', teamPoints: 56, opponentPoints: 38},
    {opponent: 'Bears', teamPoints: 26, opponentPoints: 23}
    ],

    get players () {
      return this._players;
    },

    get games() {
      return this._games;
    },

    addPlayer(firstName, lastName, age) {
      let player = {
        firstName: firstName,
        lastName: lastName,
        age: age
      };
      this.players.push(player);
    },

    addGame(oppName, points, oppPoints) {
      const game = {
        opponent: oppName,
        points: points,
        oppPoints: oppPoints
      }
      this.games.push(game);
    }
};

team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);


console.log(team.players);

team.addGame("Sea Lions", 100, 50);
team.addGame("Wolves", 56, 90);
team.addGame("Tigers", 30, 47);

console.log(team.games);