
function startGame() {
    gameMenu.classList.add('view-hide');
    gameBoard.classList.remove('view-hide');

    
    playAvengersSound();

    prepareCardBoard();
    cardBoardAnimationStartShow();
}

async function handleClick() {
    if (openCards.length < 2) {
        this.classList.add('box-open');
        openCards.push(this);
    }

    if (openCards.length === 2) {
        await sleep(500);
        checkMatch();
    }
}

function checkMatch() {
    console.log(openCards);

    if (openCards[0].innerHTML === openCards[1].innerHTML) {
        soundFxMatch.currentTime = 0;
        soundFxMatch.play();
        openCards[0].classList.add('box-match');
        openCards[1].classList.add('box-match');
        openCards = [];
    } else {
        soundFxError.currentTime = 0;
        soundFxError.play();
        openCards[0].classList.remove('box-open');
        openCards[1].classList.remove('box-open');
        openCards = [];
    }

    if (document.querySelectorAll('.box-match').length === unorderedCardsPairs.length) {
        cardBoardAnimationEndGameShow();

        
        soundFxMizeravi.currentTime = 0;
        soundFxMizeravi.play();

        sleep(5000).then(() => {
            gameBoard.classList.add('view-hide');
            gameOver.classList.remove('view-hide');
        });
    }
}

function cardBoardAnimationEndGameShow() {
    

    
    soundFxMizeravi.currentTime = 0;
    soundFxMizeravi.play();
}

function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

function reloadGame() {
    window.location.reload("/");
}

function showOptions() {
    gameMenu.classList.add('view-hide');
    gameOptions.classList.remove('view-hide');
}

function closeOptions() {
    gameMenu.classList.remove('view-hide');
    gameOptions.classList.add('view-hide');
}


function startGame(){
    gameMenu.classList.add('view-hide');
    gameBoard.classList.remove('view-hide');
    prepareCardBoard();
    cardBoardAnimationStartShow();
}

volumeControlSoundFx.addEventListener('change', () => {
    
    soundFxCardShow.currentTime = 0;
    soundFxError.volume = volumeControlSoundFx.value * 0.1;
    soundFxMatch.volume = volumeControlSoundFx.value * 0.1;

    soundFxCardShow.volume = volumeControlSoundFx.value * 0.1;
    soundFxCardShow.play();
});

