import roundDao from "../dao/roundDao.js";

class RoundService {
    async getAvailableRounds() {
        return await roundDao.getAllRounds();
    }

    async getRoundById(roundId) {
        return await roundDao.getRoundById(roundId);
    }
}

export default new RoundService();