import gameDao from "../dao/gameDao.js";
import GameDTO from "../dto/GameDTO.js";
import clubService from "./clubService.js";
import roundService from "./roundService.js";

class GameService {
    getAllGamesPlayed = async () => {
        const games = await gameDao.getAllGames();

        const gameDTOs = await Promise.all(
            games.map(async game => {
                const homeClub = await clubService.getClubById(game.homeClubId);
                const awayClub = await clubService.getClubById(game.awayClubId);
                const round = await roundService.getRoundById(game.roundId);

                return new GameDTO(
                    game.gameDate,
                    round,
                    homeClub,
                    awayClub,
                    game.result
                );
            })
        );

        return gameDTOs;
    }
}

export default new GameService();