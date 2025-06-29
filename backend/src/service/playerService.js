import playerDao from "../dao/playerDao.js";

class PlayerService {
    async getPlayersByClub(clubId) {
        return await playerDao.getPlayersByClub(clubId);
    }

    async getRecruitedPlayersForTeamAndRound(teamId, roundId) {
        return await playerDao.getRecruitedPlayersForTeamAndRound(teamId, roundId);
    }
}

export default new PlayerService();