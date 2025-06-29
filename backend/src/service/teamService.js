import teamDao from "../dao/teamDao.js";
import playerService from "./playerService.js";
import playerStatsService from "./playerStatsService.js";
import roundService from "./roundService.js";
import TeamReport from "../dto/TeamReport.js";

class TeamService {
    async generateTeamReportForRound(teamId, roundId) {
        // Get team and round information
        const team = await teamDao.getTeamById(teamId);
        const round = await roundService.getRoundById(roundId);
        
        if (!team || !round) {
            throw new Error('Team or round not found');
        }

        // Create team report
        const teamReport = new TeamReport(team, round);

        // Get recruited players for this team and round
        const recruitedPlayers = await playerService.getRecruitedPlayersForTeamAndRound(teamId, roundId);

        // For each recruited player, get their stats for this round
        for (const player of recruitedPlayers) {
            const stats = await playerStatsService.getPlayerStatsForRoundAndTeam(player.id, roundId, teamId);
            teamReport.addPlayerStats(player, stats);
        }

        return teamReport;
    }
}

export default new TeamService();