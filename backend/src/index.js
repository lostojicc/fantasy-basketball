import readline from "readline";
import clubUI from "./ui-handler/clubUI.js";
import roundUI from "./ui-handler/roundUI.js";
import teamUI from "./ui-handler/teamUI.js";
import gameUI from "./ui-handler/gameUI.js";
import playerUI from "./ui-handler/playerUI.js";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const showMenu = () => {
    console.log('\n=== FANTASY BASKETBALL INFORMATION SYSTEM ===');
    console.log('1. Display all clubs and their players');
    console.log('2. Check final scores for round');
    console.log('3. Display game results');
    console.log('4. Register new player to the league');
    console.log('5. Exit');
    console.log('=============================================');
    
    rl.question('Choose an option: ', (choice) => {
        handleMenuChoice(choice);
    });
}

const handleMenuChoice = async (choice) => {
    switch (choice) {
        case '1':
            await clubUI.displayAllClubsAndPlayers();
            showMenu();
            break;
        case '2':
            await handleTeamReport();
            break;
        case '3':
            await gameUI.displayAllResults();
            showMenu();
            break;
        case '4':
            await startNewPlayerRegister();
            break;
        case '5':
            console.log('Goodbye!');
            rl.close();
            break;
        default:
            console.log('Invalid choice. Please try again.');
            showMenu();
    }
}

const startNewPlayerRegister = async () => {
    await playerUI.displayPlayerRegistration(rl);
    showMenu();
}

const handleTeamReport = async () => {
    const rounds = await roundUI.displayRoundSelection();
    if (!rounds || rounds.length === 0) {
        showMenu();
        return;
    }
    
    rl.question('Enter round number: ', async (roundChoice) => {
        const roundId = parseInt(roundChoice);
        const selectedRound = rounds.find(r => r.id === roundId);
        
        if (!selectedRound) {
            console.log('Invalid round number.');
            await handleTeamReport();
            return;
        }
        
        rl.question('Enter team ID: ', async (teamChoice) => {
            const teamId = parseInt(teamChoice);
            
            if (isNaN(teamId)) {
                console.log('Invalid team ID.');
                await handleTeamReport();
                return;
            }
            
            await teamUI.displayTeamReportForRound(teamId, roundId);
            showMenu();
        });
    });
}

console.log('Welcome to Fantasy Basketball Information System!');
showMenu();