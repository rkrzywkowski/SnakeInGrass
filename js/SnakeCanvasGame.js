function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }

class SnakeCanvasGame extends CanvasGame
{
    
    constructor()
    {
        super();
        
    }

    collisionDetection()
    {   
         //to zakomentowac
        let distanceHead = 
        ((apple.getCentreX() - bodySnake[0].getCentreX()) * (apple.getCentreX() - bodySnake[0].getCentreX())) +
        ((apple.getCentreY() - bodySnake[0].getCentreY()) * (apple.getCentreY() - bodySnake[0].getCentreY()));
        
        distanceHead = Math.sqrt(distanceHead);

       
        if( distanceHead === 0){
           // console.log("Am am am");
            // apple.move();
            // // console.log("apple " + apple.getX());
            // // console.log(apple.getY());
            // bodySnake[bodySnake.length] = new BodySnake(snakeBodyImage, apple.getX(), apple.getY(), 20, 20);

            changeImage = 1;


        }
        //

        
        let distance = 
        ((apple.getCentreX() - bodySnake[bodySnake.length-1].getCentreX()) * (apple.getCentreX() - bodySnake[bodySnake.length-1].getCentreX())) +
        ((apple.getCentreY() - bodySnake[bodySnake.length-1].getCentreY()) * (apple.getCentreY() - bodySnake[bodySnake.length-1].getCentreY()));
       
        // console.log(apple.getX());
        // console.log(apple.getY());

        distance = Math.sqrt(distance);

        if( distance === 0){
            // console.log("Am am am");
            apple.move();
            // console.log("apple " + apple.getX());
            // console.log(apple.getY());
            bodySnake[bodySnake.length-1].changeImage(snakeBodyImage);//to zakomentowac
            bodySnake[bodySnake.length] = new BodySnake(snakeBodyImage, apple.getX(), apple.getY(), 20, 20);
            changeImage = 0;//to zakomentowac
        }

        if(
            (bodySnake[0].getX() < 0) || (bodySnake[0].getX() >= canvas.width) ||
            (bodySnake[0].getY() < 0) || (bodySnake[0].getY() >= canvas.height)
          )
            {   
                // console.log( bodySnake[0].getX());
                // console.log( bodySnake[0].getY());
                // console.log(screen.width);
                // console.log(screen.height);
                this.lostGame();
                //console.log("dupa");

                // for (let i = 0; i < bodySnake.length; i++) /* stop all gameObjects from animating */
                // {
                //     bodySnake[i].stop();
                // }
                // gameObjects[WIN_LOSE_MESSAGE] = new StaticText("LOSE!", 100, 270, "Times Roman", 100, "red");
                // gameObjects[WIN_LOSE_MESSAGE].start(); /* render lose message */
            }

        
        // if(!selfCollision){
            for(let i = bodySnake.length - 1; i > 1; i--){
                
                if((bodySnake[0].getX() === bodySnake[i].getX()) && (bodySnake[0].getY() === bodySnake[i].getY())){
                    // console.log( bodySnake[0].getX() + "d" + bodySnake[i].getX());
                    // console.log( bodySnake[0].getY() + " " + bodySnake[i].getY());
                    this.lostGame();
                }

            // }
        }
        

        if(level === 2){
            let distanceBadApple = 
            ((badApple.getCentreX() - bodySnake[0].getCentreX()) * (badApple.getCentreX() - bodySnake[0].getCentreX())) +
            ((badApple.getCentreY() - bodySnake[0].getCentreY()) * (badApple.getCentreY() - bodySnake[0].getCentreY()));


            
            if( distanceBadApple === 0){
                // console.log("Blee");
                badApple.move();
                // console.log("apple " + badApple.getX());
                // console.log(badApple.getY());

                // for(let i=0;i<bodySnake.length;i++){
                //     console.log("przed:" + i + " "+ bodySnake[i].getX() + " " + bodySnake[i].getY());
                // }

                let tmpBodySnake = [];
                tmpBodySnake[0] = new BodySnake(snakeHeadImage, bodySnake[0].getX(), bodySnake[0].getY(), 
                bodySnake[0].getHeight()/scal, bodySnake[0].getWidth()/scal);

                for(let i = 1; i < bodySnake.length; i++){
                tmpBodySnake[i] = new BodySnake(snakeBodyImage, bodySnake[i].getX(), bodySnake[i].getY(), bodySnake[i].getHeight()/scal, bodySnake[i].getWidth()/scal);
                }

                
                
                let k = bodySnake.length - 1;
                bodySnake[k].setAll(snakeBodyImage, tmpBodySnake[0].getX(), tmpBodySnake[0].getY(), 
                tmpBodySnake[0].getHeight()/scal, tmpBodySnake[0].getWidth()/scal);
                k--;

                for(let j = 1; j < bodySnake.length-1; j++){
                
                bodySnake[k].setAll(snakeBodyImage, tmpBodySnake[j].getX(), tmpBodySnake[j].getY(), 
                tmpBodySnake[j].getHeight()/scal, tmpBodySnake[j].getWidth()/scal);
                k--;
                }
                bodySnake[k].setAll(snakeHeadImage, tmpBodySnake[bodySnake.length-1].getX(), tmpBodySnake[bodySnake.length-1].getY(), 
                tmpBodySnake[bodySnake.length-1].getHeight()/scal, tmpBodySnake[bodySnake.length-1].getWidth()/scal);

                
                selfCollision = 0;

                // odbijanie
                // if(destination === 'R'){
                //     destination = 'L';
                //     console.log("lewo");
                            
                //     bodySnake[0].increaseVa(-bodySnake[0].getWidth(),0);
                //     snakeHeadImage.src = "img/headLL.png";
                // }
                // else if(destination === 'L'){
                //     destination = 'R';
                //     console.log("prawo");
                    
                //     bodySnake[0].increaseVd(bodySnake[0].getWidth(),0);
                //     snakeHeadImage.src = "img/headRR.png";
                //     console.log(destination);
                // }
                // else if(destination === 'D'){
                //     destination = 'U';
                //     bodySnake[0].increaseVw(0, -bodySnake[0].getHeight());
                //     snakeHeadImage.src = "img/headUU.png";
                //     console.log(destination);
                // }
                // else if(destination === 'U'){
                //     destination = 'D';
                //     snakeHeadImage.src = "img/headDD.png";
                //     bodySnake[0].increaseVs(0, bodySnake[0].getHeight());
                //     console.log(destination);
                // }



                // zamiana glowy z ogonem
                if(direction === "right"){
                    destination = 'L';
                    // console.log("lewoooooooooooo");
                            
                    bodySnake[0].increaseVa(-bodySnake[0].getWidth(),0);
                    snakeHeadImage.src = "img/headLL.png";

                }
                else if(direction === "left"){
                    destination = 'R';
                    // console.log("prawoooooooooooooooo");
                    
                    bodySnake[0].increaseVd(bodySnake[0].getWidth(),0);
                    snakeHeadImage.src = "img/headRR.png";

                }
                else if(direction === "down"){
                    destination = 'U';
                    bodySnake[0].increaseVw(0, -bodySnake[0].getHeight());
                    snakeHeadImage.src = "img/headUU.png";
                    // console.log("goraaaaaaaaaaaaaaa");
                }
                else if(direction === "up") {
                    destination = 'D';
                    snakeHeadImage.src = "img/headDD.png";
                    bodySnake[0].increaseVs(0, bodySnake[0].getHeight());
                    // console.log("dolllllllllllllll");

                }
                
            }

            for(let i = 1; i < bodySnake.length; i++){
                if((bodySnake[0].getX() != bodySnake[i].getX()) && (bodySnake[0].getY() != bodySnake[i].getY())){
                    if(bodySnake.length === i){
                        // console.log("tu");
                        selfCollision = 1;
                    }
                }
                
            }
        }

       
    }


    render()
    {
      
        super.render();  
        if(level === 1) this.render1();
        
        if(level === 2) this.render2();
    }

    render1(){
        
       
        //snakeHead.render();
        
        this.move();
        apple.render();
        //sleep(2000).then(() => { this.move(); });
        if(changeImage){
            this.changeImageSnake();
        }
        

        for (let i = 0; i < bodySnake.length; i++)
        {
            bodySnake[i].render();
        }
      
        this.showScoreLvl();

        sleep(timeToSleep);

        if(bodySnake.length - 4 === 1 && level === 1){
            level = 2;
            changeLvl = 1;
        }

        if(changeLvl === 1)this.newLevel();
    }
    

    render2(){
     
      //badApple = new BadAppple(badAppleImage, 200 * scal, 100 * scal, 20); 
      
      badApple.render();
      this.move();

      if(changeImage){
        this.changeImageSnake();
      }
      apple.render();
      //sleep(2000).then(() => { this.move(); });
      for (let i = 0; i < bodySnake.length; i++)
      {
          bodySnake[i].render();
      }
      
      this.showScoreLvl();

      sleep(timeToSleep);
    }


    newLevel(){
        // gameObjects[WIN_LOSE_MESSAGE] = new StaticText("Next level", 150, 270, "Times Roman", 100, "black");
        // gameObjects[WIN_LOSE_MESSAGE].start(); /* render win message */
        changeLvl = 0;
        timeToSleep = 70;
        badApple.move();
        // sleep(3000);
        //sleep(3000);
        
    }   

    move(){
        if(isAlive){
            let beforePositionX = bodySnake[bodySnake.length-1].getX();
            let beforePositionY = bodySnake[bodySnake.length-1].getY();

            for(var j = bodySnake.length - 1; j > 0; j--){

                bodySnake[j].move(bodySnake[j-1].getX(), bodySnake[j-1].getY());
                
                // console.log( bodySnake[j].getX());
                // console.log( bodySnake[j].getY());
            }
            
            bodySnake[0].move(
            bodySnake[0].getX() + bodySnake[0].getVX(), 
            bodySnake[0].getY() + bodySnake[0].getVY() );
            // console.log( bodySnake[0].getX());
            // console.log( bodySnake[0].getY());

            let afterPositionX = bodySnake[bodySnake.length-1].getX();
            let afterPositionY = bodySnake[bodySnake.length-1].getY();

            // console.log("before: " + beforePositionX);
            // console.log("before: " + beforePositionY);

            // console.log("after: " + afterPositionX);
            // console.log("after: " + afterPositionY);

            this.whichDirection(beforePositionX,beforePositionY,afterPositionX,afterPositionY);

            // console.log("-");
            // console.log( "cw "+ canvas.width);
            // console.log( "ch " + canvas.height);
            // console.log("-");
        }
    }

    showScoreLvl(){
        let scoreOnScreen = "score: ";
        scoreOnScreen += (bodySnake.length - 4);
        document.getElementById('score').innerText = scoreOnScreen;

        let levelOnScreen = "level: ";
        levelOnScreen += level;
        document.getElementById('level').innerText = levelOnScreen;
    }

    lostGame(){


        if(isAlive){
        gameObjects[WIN_LOSE_MESSAGE] = new StaticText("LOSE!", 25, 270, "Times Roman", 100, "red");
        gameObjects[WIN_LOSE_MESSAGE].start(); /* render lose message */

        var scores = bodySnake.length - 4;
        
        var player = prompt("Best scores: " + scores + "\nPlease enter your name", "noname");
            



        var highScore = app.database().ref('highScores/');
        
        highScore.push({
            'name': player,
            'score': scores
        });

        var tableScore = "";
        var scoresRef = firebase.database().ref('highScores/');


        scoresRef.orderByChild("score").limitToLast(3).on("value", function(snapshot) {
            snapshot.forEach(function(data) {
            //   console.log(data.key); // "-M-...."
              console.log(data.val().name); // "Anrzej"
              console.log(data.val().score); // 11
            //   tableScore += data.val().name + " " + data.val().score + "\n";
            });
        });

        
        // console.log("dd " + tableScore);
        


        isAlive = false;
        // alert("d");
        }
        
        
    }

    whichDirection(beforePositionX, beforePositionY, afterPositionX, afterPositionY){

        if(beforePositionX > afterPositionX){
            // console.log("lewo");
            direction = "left";
        }
        else if(beforePositionX < afterPositionX){
            // console.log("prawo");
            direction = "right";
        }
        else if(beforePositionY > afterPositionY){
            // console.log("gora");
            direction = "up";
        }
        else if(beforePositionY < afterPositionY){
            // console.log("dol");
            direction = "down";
        }

    }

    changeImageSnake(){

        for(let i = 1; i < bodySnake.length; i++){
            if(apple.getX() === bodySnake[i].getX() && 
                apple.getY() === bodySnake[i].getY()){
                    bodySnake[i].changeImage(redSquareImage);
                }
                else{
                    bodySnake[i].changeImage(snakeBodyImage);
                }
        }
    }
}


