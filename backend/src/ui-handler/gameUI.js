import gameService from "../service/gameService.js";

class GameUI {
    async displayAllResults() {
        const games = await gameService.getAllGamesPlayed();

        if (!games || games.length === 0) {
            console.log("No results to display.");
            return;
        }

        // Group games by round
        const gamesByRound = {};
        for (const game of games) {
            const roundId = game.round.id;
            if (!gamesByRound[roundId]) {
                gamesByRound[roundId] = {
                    round: game.round,
                    games: []
                };
            }
            gamesByRound[roundId].games.push(game);
        }

        console.log("\n=== RESULTS ===\n");
        Object.values(gamesByRound).forEach(({ round, games }) => {
            console.log(`Round ${round.id} (${round.startDate} to ${round.endDate}):`);
            games.forEach((game, idx) => {
                console.log(
                    `  ${idx + 1}. ${game.getFormattedResult()}`
                );
            });
            console.log(""); // Blank line between rounds
        });
    }
}

export default new GameUI();