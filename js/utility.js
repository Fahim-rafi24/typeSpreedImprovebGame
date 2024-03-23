
// Genarate Another Word Again
function continueGame(){
    // highlight key down
    let pressedKeys = document.getElementsByClassName('kbd');
    for (let i = 0; i < pressedKeys.length; i++) {
        pressedKeys[i].classList.add('bg-white');
        pressedKeys[i].classList.remove('text-amber-300');
        pressedKeys[i].classList.remove('bg-orange-500');
    }


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

// Generate the Random Alphabet Function
function genarateAlphabet(){
    const randomNumber = Math.floor(Math.random() * 26);
    const randomAlphabet = String.fromCharCode(65 + randomNumber);
    // console.log(randomAlphabet);
    return randomAlphabet;
}



// life bar function
function lifeScore() {
    let lifeScore = document.getElementById('life-score');
    let currentLifeScore = parseInt(lifeScore.innerText); 

    if (!isNaN(currentLifeScore) && currentLifeScore > 0) {
        // Decrease the value by 1
        currentLifeScore -= 1;

        // Update the inner text with the new value
        lifeScore.innerText = currentLifeScore.toString(); 

        // Check if the life score is zero
        if (currentLifeScore === 0) {
            goToEndPage();
        }
    } else {
        console.log("Life score is already zero or not a valid number.");
    }
}




// point bar function
function addPoint() {
    let lifeScore = document.getElementById('score-bar');
    let currentLifeScore = parseInt(lifeScore.innerText);
    // Increase the value by 1
    currentLifeScore += 1;
    // Update the inner text with the new value
    lifeScore.innerText = currentLifeScore.toString();
}






// show the point score page    (end page)
function goToEndPage(){
    // hide the game feld page
    let gameField =document.getElementById('gameField');
    gameField.classList.add('hidden');
    // show the end page
    let endField =document.getElementById('endField');
    endField.classList.remove('hidden');
    // show the point
    let scoreBarPoint = document.getElementById('score-bar');
    let finalScore = document.getElementById('final-score');
    finalScore.innerText = scoreBarPoint.innerText;
}