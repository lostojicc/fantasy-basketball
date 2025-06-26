class ClubWithPlayersDTO {
    constructor(club, players) {
        this.id = club.id;
        this.name = club.name;
        this.country = club.country;
        this.players = players.map(player => ({
            id: player.id,
            fullName: player.getFullName(),
            positions: player.getPositions(),
            averagePir: player.averagePir
        }));
        this.playerCount = players.length;
    }
}

export default ClubWithPlayersDTO; 