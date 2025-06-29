import Player from '../model/Player.js';
import PlayerStats from '../model/PlayerStats.js';

class TeamReport {
    constructor(team, round, recruitedPlayers = []) {
        this.team = team;
        this.round = round;
        this.recruitedPlayers = recruitedPlayers; // Array of {player, stats} objects
    }

    addPlayerStats(player, stats) {
        this.recruitedPlayers.push({ player, stats });
    }

    getTotalFantasyPoints() {
        return this.recruitedPlayers.reduce((total, { stats }) => {
            return total + (stats ? stats.calculateFantasyPoints() : 0);
        }, 0);
    }
}

export default TeamReport; 