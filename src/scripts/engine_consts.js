/***
 * List of Game Cards Files name
 */
const cardPictures = [
    "aranha1.gif",
    "black-panther.gif",
    "captain1.gif",
    "thor.gif",
    "groot.gif",
    "captain2.gif",
    "rocket.gif",
    "iron-flying.gif",
    "iron-mask.gif",
    "spider1.gif",
    "rocket-groot.gif",
    "manopla1.gif",
    "kidSpider.gif",
    "drStrange.gif",
    "mult-faces.gif",
    "hulk-nutella.gif",
];

/*** 
 * Host of Game
 */
const HOST = window.location.host;

/***
 * Source folder for Card Images
 */
const cardImageUrl = "src/images/cardboard/";

/***
 * Source folder for Musics
 */
const musicUrl ="../audio/music/";

/***
 * Source folder for Sound Effects
 */
const soundFxUrl = "../audio/soundfx/";


/**
 * Selector for Game Board ID
 */
var gameMenu = document.getElementById('main-screen');
var gameBoardId = document.getElementById("game-board_board");
var gameBoard = document.getElementById('game-board');
var gameCard = gameBoardId.querySelectorAll('.game-card');
var gameOptions = document.getElementById("game-options");
var gameOver = document.getElementById('game-over');

var volumeControlSoundFx = document.getElementById('soundfx-volume');

var soundFxCardShow = new Audio('src/audio/avengers-sound.wav');
var soundFxError = new Audio('src/audio/errou.wav');
var soundFxMatch = new Audio('src/audio/acertou.wav');
var soundFxMizeravi = new Audio('src/audio/ah-mizeravi.wav');
cardsPairsAmount = 8;
let cardsMixed = [];

