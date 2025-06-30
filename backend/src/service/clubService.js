import clubDao from "../dao/clubDao.js";
import playerService from "./playerService.js";
import ClubWithPlayersDTO from "../dto/ClubWithPlayersDTO.js";

class ClubService {
    async getAllClubsWithPlayers() {
        const clubs = await clubDao.getAllClubs();
        const clubsWithPlayers = [];

        for (const club of clubs) {
            const players = await playerService.getPlayersByClub(club.id);
            const dto = new ClubWithPlayersDTO(club, players);
            
            // Add position statistics from the club model
            dto.guardCount = club.guards;
            dto.forwardCount = club.forwards;
            dto.centerCount = club.centers;
            
            clubsWithPlayers.push(dto);
        }

        return clubsWithPlayers;
    }

    getClubById = async (clubId) => {
        return await clubDao.getClubById(clubId);
    }
}

export default new ClubService();