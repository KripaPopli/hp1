var canvas;
var backgroundImage, car1_img, car2_img, track;
var database, gameState;
var form, player, playerCount;
var allPlayers, hp1, hp2;
var hps= [];

function preload() {
  backgroundImage = loadImage("./assets/bg.jpg");
  hp1_img = loadImage("../assets/hp1.png");
  hp2_img = loadImage("../assets/hp2.png");
  track = loadImage("../assets/track.jpg");
  caveimg = loadImage("../assets/cave.png");
  centaurimg = loadImage("../assets/centaur.png");
  forestimg = loadImage("../assets/forest.png");
  riddle1img = loadImage("../assets/spell1.png");
  riddle2img = loadImage("../assets/centaur1.png");
  forestRidimg = loadImage("../assets/forest1.png");
  riddle1Ansimg =loadImage("../assets/spell1Answer.png");
  riddle2Ansimg = loadImage("../assets/rid2Ans.png");
  riddle3Ansimg = loadImage("../assets/rid3Ans.png");
  riddle1Optimg = loadImage("../assets/rid1Option.png");
  riddle2Optimg = loadImage("../assets/rid2Option.png");
  riddle3Optimg = loadImage("../assets/rid3Option.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  background(backgroundImage);
  if (playerCount === 2) {
    game.update(1);
  }
  

  if (gameState === 1) {
    game.play();
  }

  spawnCave();
  spawnCentaur();
  spawnForest();
  spawnCav();
  spawnFor();
  spawnCen();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
