import clubDao from "../dao/clubDao.js";
import playerService from "./playerService.js";
import ClubWithPlayersDTO from "../dto/ClubWithPlayersDTO.js";

class ClubService {
    async getAllClubsWithPlayers() {
        const clubs = await clubDao.getAllClubs();
        const clubsWithPlayers = [];

        for (const club of clubs) {
            const players = await playerService.getPlayersByClub(club.id);
            clubsWithPlayers.push(new ClubWithPlayersDTO(club, players));
        }

        return clubsWithPlayers;
    }
}

export default new ClubService();