import teamService from "../service/teamService.js";

class TeamUI {
    async displayTeamReportForRound(teamId, roundId) {
        try {
            const teamReport = await teamService.generateTeamReportForRound(teamId, roundId);
            this.printTeamReport(teamReport);
        } catch (error) {
            console.log(`Error generating report: ${error.message}`);
        }
    }

    printTeamReport(teamReport) {
        console.log('\n' + '='.repeat(80));
        console.log(`TEAM REPORT: ${teamReport.team.name.toUpperCase()}`);
        console.log(`ROUND: ${teamReport.round.id} (${teamReport.round.startDate} - ${teamReport.round.endDate})`);
        console.log('='.repeat(80));

        if (teamReport.recruitedPlayers.length === 0) {
            console.log('No players recruited for this round.');
            return;
        }

        if (teamReport.recruitedPlayers.length > 0) {
            teamReport.recruitedPlayers.forEach(({ player, stats }) => {
                const fantasyPoints = stats.calculateFantasyPoints();
                console.log(`\n${player.getFullName()} (${player.getPositions()}) - FANTASY POINTS: ${fantasyPoints.toFixed(2)}`);
                console.log(`  Points: ${stats.points} | Rebounds: ${stats.rebounds} | Assists: ${stats.assists}`);
                console.log(`  Steals: ${stats.steals} | Blocks: ${stats.blocks} | Turnovers: ${stats.turnovers}`);
                console.log(`  Personal fouls: ${stats.personalFouls} | Fouls drawn: ${stats.foulsDrawn} | Blocks against: ${stats.blocksAgainst}`);
                console.log(`  Missed shots: ${stats.missedShots} | Missed free throws: ${stats.missedFreeThrows}`);
            });
        }

        console.log('\n' + '='.repeat(80));
        console.log(`TOTAL FANTASY POINTS: ${teamReport.getTotalFantasyPoints().toFixed(2)}`);
        console.log('='.repeat(80));
    }
}

export default new TeamUI(); 