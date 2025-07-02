import PlayerDTO from "../dto/PlayerDTO.js";
import playerService from "../service/playerService.js";
import clubDao from "../dao/clubDao.js";

class PlayerUI {
    async displayPlayerRegistration(rl) {
        console.log('\n=== REGISTER NEW PLAYER ===');
        
        try {
            // Get available clubs (simpler method)
            const clubs = await clubDao.getAllClubs();
            
            if (!clubs || clubs.length === 0) {
                console.log('No clubs available for registration.');
                return;
            }

            console.log('\nAvailable clubs:');
            clubs.forEach(club => {
                console.log(`${club.id}. ${club.name} (${club.country})`);
            });

            // Collect player information
            const playerData = await this.collectPlayerData(clubs, rl);
            
            if (playerData) {
                // Register the player
                await playerService.registerNewPlayer(playerData);
                console.log('\n✅ Player registered successfully!');
            }
            
        } catch (error) {
            console.error('❌ Error registering player:', error.message);
        }
    }

    async collectPlayerData(clubs, rl) {
        return new Promise((resolve) => {
            const questions = [
                { key: 'clubId', text: 'Enter club ID: ' },
                { key: 'firstName', text: 'Enter player first name: ' },
                { key: 'lastName', text: 'Enter player last name: ' },
                { key: 'isGuard', text: 'Is player a guard? (y/n): ' },
                { key: 'isForward', text: 'Is player a forward? (y/n): ' },
                { key: 'isCenter', text: 'Is player a center? (y/n): ' }
            ];

            const playerData = {};
            let questionIndex = 0;

            const askQuestion = () => {
                if (questionIndex >= questions.length) {
                    // Convert y/n to boolean
                    const playerDto = new PlayerDTO(
                        playerData.firstName,
                        playerData.lastName,
                        playerData.isGuard.toLowerCase() === 'y',
                        playerData.isForward.toLowerCase() === 'y',
                        playerData.isCenter.toLowerCase() === 'y',
                        parseInt(playerData.clubId)
                    );
                    
                    resolve(playerDto);
                    return;
                }

                const question = questions[questionIndex];
                rl.question(question.text, (answer) => {
                    if (answer.trim() === '') {
                        console.log('❌ This field is required. Please try again.');
                        askQuestion();
                        return;
                    }
                    
                    // Special validation for club ID
                    if (question.key === 'clubId') {
                        const clubId = parseInt(answer.trim());
                        const validClub = clubs.find(c => c.id === clubId);
                        
                        if (!validClub) {
                            console.log('❌ Invalid club ID. Please try again.');
                            askQuestion();
                            return;
                        }
                    }
                    
                    playerData[question.key] = answer.trim();
                    questionIndex++;
                    askQuestion();
                });
            };

            askQuestion();
        });
    }
}

export default new PlayerUI();