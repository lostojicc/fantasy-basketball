class PlayerStats {
    constructor(playerId, clubId, gameNumber, roundId, clubGameId, points, rebounds, assists, steals, blocks, turnovers, missedFreeThrows, personalFouls, missedShots, foulsDrawn, blocksAgainst) {
        this.playerId = playerId;
        this.clubId = clubId;
        this.gameNumber = gameNumber;
        this.roundId = roundId;
        this.clubGameId = clubGameId;
        this.points = points;
        this.rebounds = rebounds;
        this.assists = assists;
        this.steals = steals;
        this.blocks = blocks;
        this.turnovers = turnovers;
        this.missedShots = missedShots;
        this.personalFouls = personalFouls;
        this.foulsDrawn = foulsDrawn;
        this.missedFreeThrows = missedFreeThrows;
        this.blocksAgainst = blocksAgainst;
    }

    calculateFantasyPoints() {
        return (
            this.points + 
            this.assists + 
            this.rebounds +
            this.steals +
            this.blocks +
            this.foulsDrawn
        ) - (
            this.turnovers +
            this.personalFouls +
            this.blocksAgainst +
            this.missedFreeThrows +
            this.missedShots
        );
    }
}

export default PlayerStats; 