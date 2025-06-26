import playerDao from "../dao/playerDao.js";

class PlayerService {
    async getPlayersByClub(clubId) {
        return await playerDao.getPlayersByClub(clubId);
    }
}

export default new PlayerService();