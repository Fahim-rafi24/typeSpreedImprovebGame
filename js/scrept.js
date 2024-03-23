// start game    (play the game)
function openGame(){
    // first hidden the entry page
    let entryGameField =document.getElementById('entryField');
    entryGameField.classList.add('hidden');
    // second show the game field
    let gameField = document.getElementById('gameField');
    gameField.classList.remove('hidden');
    // genarate the random alphabet
    let takeAlphabet =genarateAlphabet();
    // replace the genarate value in display
    let displayArea = document.getElementById('alphabet-display');
    displayArea.innerText=takeAlphabet;
    // highlight the key
    let keyboardKeys = document.querySelectorAll('.kbd');
    keyboardKeys.forEach(key => {
        if (key.innerText.toLowerCase() === takeAlphabet.toLowerCase()) {
            key.classList.add('bg-orange-500', 'text-amber-300');
        } 
        else {
            key.classList.remove('bg-white');
        }
    });
    
}



// restart game again

function againOpenGame(){
    // first hide the end page
    let endPage =document.getElementById('endField');
    endPage.classList.add('hidden');
    // play again
    // highlight key down
    let pressedKeys = document.getElementsByClassName('kbd');
    // Iterate through each element and add the class 'bg-white'
    for (let i = 0; i < pressedKeys.length; i++) {
        pressedKeys[i].classList.add('bg-white');
        pressedKeys[i].classList.remove('text-amber-300');
        pressedKeys[i].classList.remove('bg-orange-500');
    }
    // red alart hide
    let hideAlart = document.getElementById('alart-section');
    hideAlart.innerText='';
    // refresh the score bar
    let refreshScoreBar = document.getElementById('score-bar');
    refreshScoreBar.innerText= 0;
    // refresh the life bar
    let refreshLife = document.getElementById('life-score');
    refreshLife.innerText= 10
    openGame();
}








// key board pressed function

// function handleKeyboarButtonPress(event){
//     // Check if event is defined and key property exists
//     if (event && event.key) {
//         // Keyboard pressed key
//         const playerPressedKey = event.key;
//         // Get the text content of the targeted alphabet element
//         let targetedAlphabet = document.getElementById('alphabet-display').textContent;
//         // Convert the text content to lowercase
//         let mainTargetedAlphabet = targetedAlphabet.toLowerCase();
//         // Check if playerPressedKey value matches mainTargetedAlphabet value
//         if (playerPressedKey.toLowerCase() === mainTargetedAlphabet) {
//             console.log('Correct key clicked');
//             // Correct key clicked
//             let showAlartMassage = document.getElementById('alart-section');
//             showAlartMassage.innerText = "";
//             continueGame();
//             addPoint();
//         } else {
//             // Wrong key clicked
//             let showAlartMassage = document.getElementById('alart-section');
//             showAlartMassage.innerText = "Wrong Key was Clicked";
//             // Decrement the life score
//             lifeScore();
//         }
//     } else {
//         console.log("No event or event.key found.");
//     }
// }





function handleKeyboarButtonPress(event){
    // Check if event is defined and key property exists
    if (event && event.key) {
        // Keyboard pressed key
        const playerPressedKey = event.key;
        // Get the text content of the targeted alphabet element
        let targetedAlphabet = document.getElementById('alphabet-display').textContent;
        // Convert the text content to lowercase
        let mainTargetedAlphabet = targetedAlphabet.toLowerCase();
        // Check if playerPressedKey value matches mainTargetedAlphabet value
        if (playerPressedKey.toLowerCase() === mainTargetedAlphabet) {
            console.log('Correct key clicked');
            // Correct key clicked
            let showAlartMassage = document.getElementById('alart-section');
            showAlartMassage.innerText = "";
            continueGame();
            addPoint();
        } else {
            // Wrong key clicked
            let showAlartMassage = document.getElementById('alart-section');
            let errorMessage = "Wrong Key was Clicked";
            // Check screen size and adjust error message
            if (window.matchMedia("(max-width: 480px)").matches) {
                errorMessage = "Wrong";
            } else if (window.matchMedia("(max-width: 768px)").matches) {
                errorMessage = "Wrong Key";
            }
            showAlartMassage.innerText = errorMessage;
            // Decrement the life score
            lifeScore();
        }
    } else {
        console.log("No event or event.key found.");
    }
}
