const cardsPairsList = [0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,]
const unorderedCardsPairs = cardsPairsList.sort(() => (Math.random() > .5 ? 2 : -1));
let boxCard = gameBoardId.getElementsByTagName('div');
let imageShow = gameBoardId.getElementsByTagName('img');
let openCards = [];

function prepareCardBoard() {
    for(let i = 0; i < unorderedCardsPairs.length; i++){
        var idCard = unorderedCardsPairs[i];
        let imgCard = document.createElement('img');
        imgCard.src = cardImageUrl + cardPictures[idCard];
        let divCard = document.createElement('div');
        divCard.className = 'game-card';
        divCard.appendChild(imgCard);
        gameBoardId.appendChild(divCard);
        divCard.classList.add('initial-card-hide');
        divCard.onclick = handleClick;
    }
}

async function cardBoardAnimationStartShow(){
    for(let i = 0; i < boxCard.length; i++){
        await sleep(125).then(() => {
            soundFxCardShow.currentTime = 0;
            boxCard[i].classList.replace('initial-card-hide', 'card-show')
            soundFxCardShow.play();
        });
    }
}

async function cardBoardAnimationEndGameShow(){
    gameBoardId.classList.add('game-board-zoom')
    for(let i = 0; i < boxCard.length; i++){
        await sleep(200).then(() => {
            boxCard[i].classList.add('end-game-card-animation');
        });
    }
}