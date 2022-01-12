
let backgroundImage = new Image();
backgroundImage.src = "img/grass.png";

let appleImage = new Image();
appleImage.src = "img/apple2.png";

let snakeHeadImage = new Image();
snakeHeadImage.src = "img/headRR.png";

let snakeBodyImage = new Image();
snakeBodyImage.src = "img/bodyG.png";

let badAppleImage = new Image();
badAppleImage.src = "img/badApple.png";

let redSquareImage = new Image();
redSquareImage.src = "img/redSquare.png";

const BACKGROUND = 0;
const WIN_LOSE_MESSAGE = 1;
let selfCollision = 1;
let scal = 0.8;

let changeImage = 0;

// var db = null;

let apple = null;
let badApple = null;

let direction = null;

let timeToSleep = 90;
//let snakeHead = null;

let bodySnake = [];
let sizeBody = 4;

let destination = 'R';
let flag = 1;
let isAlive = true;
let level = 1;
let changeLvl = 0;

let vjoy = null;    

/* Always have a playGame() function                                     */
/* However, the content of this function will be different for each game */
function playGame()
{
    /* We need to initialise the game objects outside of the Game class */
    /* This function does this initialisation.                          */
    /* Specifically, this function will:                                */
    /* 1. initialise the canvas and associated variables                */
    /* 2. create the various game gameObjects,                   */
    /* 3. store the gameObjects in an array                      */ 
    /* 4. create a new Game to display the gameObjects           */
    /* 5. start the Game                                                */



    bodySnake[0] = new BodySnake(snakeHeadImage, 80*scal, 100*scal, 20, 20);
    bodySnake[1] = new BodySnake(snakeBodyImage, 60*scal, 100*scal, 20, 20);
    bodySnake[2] = new BodySnake(snakeBodyImage, 40*scal, 100*scal, 20, 20);
    bodySnake[3] = new BodySnake(snakeBodyImage, 20*scal, 100*scal, 20, 20);
    vjoy = new VJoy();
    
    //ctx.clearRect(0,0,canvas.width,canvas.height);
    /* Create the various gameObjects for this game. */
    /* This is game specific code. It will be different for each game, as each game will have it own gameObjects */
    //console.log(canvas.width);
    gameObjects[BACKGROUND] = new StaticImage(backgroundImage, 0, 0, canvas.width, canvas.height);
    //snakeHead = new Head(snakeHeadImage, 50, 0, 50);
    apple = new Appple(appleImage, 200*scal, 100*scal, 20);
    badApple = new BadAppple(badAppleImage);
    
    // /* END OF game specific code. */
    

    // /* Always create a game that uses the gameObject array */
     let game = new SnakeCanvasGame();
    //  console.log(screen.height);
    //  console.log(screen.width);

    //  let iX;
    //     iX=left.style.pixelLeft; 
    //     console.log(iX);
    

    
    // /* Always play the game */
    if(isAlive){
     game.start();}
    //let g = setInterval(game.render, 2000);
    /* If they are needed, then include any game-specific mouse and keyboard listners */
    if(flag){
        bodySnake[0].increaseVa(bodySnake[0].getWidth(),0);
        // snakeHeadImage.src = "images/head.png";
        // destination = 'R';
    }
    document.addEventListener('click', vjoy.onclick.bind(vjoy));
    document.addEventListener("keydown", function (e)
    {   
        flag = 0;
        var stepSize = 10;
        //let speed = 0.5;
        switch(e.keyCode){
            
            case 65:
                if (destination != 'R')  // left
                    {
                        // console.log("lewo");
                        
                        bodySnake[0].increaseVa(-bodySnake[0].getWidth(),0);
                        snakeHeadImage.src = "img/headLL.png";
                        // console.log(destination);
                        destination = 'L';
                    } break;
            case 68:
                if (destination != 'L') // right
                    {
                    // bat.changeX(stepSize);
                    // console.log("prawo");
                   
                    bodySnake[0].increaseVd(bodySnake[0].getWidth(),0);
                    snakeHeadImage.src = "img/headRR.png";
                    // console.log(destination);
                    destination = 'R';
                    } break;
            case 87:
                if (destination != 'D') // up
                    {
                        // console.log("gora");
                        
                        bodySnake[0].increaseVw(0, -bodySnake[0].getHeight());
                        snakeHeadImage.src = "img/headUU.png";
                        // console.log(destination);
                        destination = 'U';
                    }
                    break;
            case 83:
                if (destination != 'U') // down
                    {
                    // bat.changeX(stepSize);
                    // console.log("dol");
                    snakeHeadImage.src = "img/headDD.png";
                    bodySnake[0].increaseVs(0, bodySnake[0].getHeight());
                    // console.log(destination);
                    destination = 'D';
                    
                    } break;

        }
    });
}