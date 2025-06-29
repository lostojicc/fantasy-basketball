import roundService from "../service/roundService.js";

class RoundUI {
    async displayRoundSelection() {
        console.log('\n=== ROUND SELECTION ===');
        const rounds = await roundService.getAvailableRounds();
        
        if (rounds.length === 0) {
            console.log('No rounds available.');
            return null;
        }

        console.log('Available rounds:');
        rounds.forEach(round => {
            console.log(`${round.id}. ${round.startDate} - ${round.endDate}`);
        });

        return rounds;
    }
}

export default new RoundUI();