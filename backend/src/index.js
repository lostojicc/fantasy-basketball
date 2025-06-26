import readline from "readline";
import clubUI from "./ui-handler/clubUI.js";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const showMenu = () => {
    console.log('\n=== FANTASY BASKETBALL INFORMATION SYSTEM ===');
    console.log('1. Display all clubs and their players');
    console.log('2. Exit');
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
            console.log('Goodbye!');
            rl.close();
            break;
        default:
            console.log('Invalid choice. Please try again.');
            showMenu();
    }
}

console.log('Welcome to Fantasy Basketball Information System!');
showMenu();