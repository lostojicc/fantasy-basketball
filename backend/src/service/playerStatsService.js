import playerStatsDao from "../dao/playerStatsDao.js";

class PlayerStatsService {
    async getPlayerStatsForRoundAndTeam(playerId, roundId, teamId) {
        return await playerStatsDao.getPlayerStatsForRoundAndTeam(playerId, roundId, teamId);
    }
}

export default new PlayerStatsService();