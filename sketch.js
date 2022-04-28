var cannonKart1, cannonLauncher1, cannonKart2, cannonLauncher2;
var 
    cannonKart1_Img, cannonLauncher1_Img, 
    cannonKart2_Img, cannonLauncher2_Img, 
    launchE
;
var castle1, castle2;
var cDoorOpened_Img, cDoorClosed_Img;
var gameTitle_Img;
var form, formBackground_Img, game, player, playerCount = 0, gameState;
var firebase;

var seconds = [], m;

function preload () {
    cannonKart1_Img = loadImage ("assets/cannonKart1.png");
    cannonLauncher1_Img = loadImage ("assets/cannonLauncher1.png");

    cannonKart2_Img = loadImage ("assets/cannonKart2.png");
    cannonLauncher2_Img = loadImage ("assets/cannonLauncher2.png");
    launchE = loadImage ("assets/fire.png");

    cDoorOpened_Img = loadImage ("assets/castleAssets/cDoorOpened.png");
    castle1_Img = loadImage ("assets/castleAssets/castle1.png");

    gameTitle_Img = loadImage ("assets/gameTitle.png");

    formBackground_Img = loadImage ("assets/formBackground.png");
}

function setup () {
    createCanvas (windowWidth, windowHeight);
    firebase = firebase.database ();

    game = new Game ();
    game.initializeGame ();

    game.reset();
}

function draw () {
    background (formBackground_Img);

    if (playerCount == 2 && !player.messageSetupExecuted) {
        // Message Setup Execution here

        player.messagingSetup ()
        player.messageSetupExecuted = true;
    }   else {
        // if (!seconds[0] && player.messageSetupExecuted) {
        //     const n = World.seconds;
        //     console.log (`${world.seconds} n: ${n}`)
        //     seconds.push (n);

        //     m = n + 3;
        //     console.log (m);
        // }

        // if (World.seconds === m) {
        //     game.gameStart ();
        // }
    }

    drawSprites ();
}