import clubService from "../service/clubService.js";

class ClubUI {
    async displayAllClubsAndPlayers() {
        try {
            console.log('\n=== FANTASY BASKETBALL - ALL CLUBS AND PLAYERS ===\n');
            
            const clubsWithPlayers = await clubService.getAllClubsWithPlayers();
            
            if (clubsWithPlayers.length === 0) {
                console.log('No clubs found in the database.');
                return;
            }

            clubsWithPlayers.forEach((clubDTO, index) => {
                console.log(`${index + 1}. ${clubDTO.name} (${clubDTO.country})`);
                console.log(`   Players: ${clubDTO.playerCount}`);
                console.log('   ──────────────────────────────────────────────');
                
                if (clubDTO.players.length === 0) {
                    console.log('   No players found for this club.');
                } else {
                    clubDTO.players.forEach((player, playerIndex) => {
                        console.log(`   ${playerIndex + 1}. ${player.fullName}`);
                        console.log(`      Positions: ${player.positions} | Average PIR: ${player.averagePir}`);
                    });
                }
                console.log('');
            });

            console.log(`Total clubs: ${clubsWithPlayers.length}`);
            const totalPlayers = clubsWithPlayers.reduce((sum, club) => sum + club.playerCount, 0);
            console.log(`Total players: ${totalPlayers}`);
            console.log('==================================================\n');

        } catch (error) {
            console.error('Error displaying clubs and players:', error);
        }
    }
}

export default new ClubUI(); 