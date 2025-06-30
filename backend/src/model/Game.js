class Game {
    constructor(gameDate, roundId, homeClubId, awayClubId, result) {
        this.gameDate = gameDate;
        this.roundId = roundId;
        this.homeClubId = homeClubId;
        this.awayClubId = awayClubId;
        this.result = result;
    }
}

export default Game;