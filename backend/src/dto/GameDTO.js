class GameDTO {
    constructor(gameDate, round, homeClub, awayClub, result) {
        this.gameDate = gameDate;
        this.round = round;
        this.homeClub = homeClub;
        this.awayClub = awayClub;
        this.result = result;
    }

    getFormattedResult = () => {
        return `${this.homeClub.name} (${this.homeClub.country})  ${this.result}  ${this.awayClub.name} (${this.awayClub.country})`;
    }
}

export default GameDTO;