class VJoy 
{

    constructor(){
        // this.x=X;
        // this.x=Y,
        
        // this.X=X;
        // this.Y=Y
    }



    onclick(ev){
        // console.log('klik');
        // console.log(ev.pageX);
        // console.log(ev.pageY);
        // document.getElementById('left').

        //position x,y left button 
        let xL = left.offsetLeft;
        // console.log("iX: " + xL);

        let yL = left.offsetTop;
        // console.log("iY: " + yL);


        //position x,y right button 
        let xR = right.offsetLeft;
        // console.log("iX: " + xR);

        let yR = right.offsetTop;
        // console.log("iY: " + yR);

        //position x,y up button 
        let xU = up.offsetLeft;
        // console.log("iX: " + xU);

        let yU = up.offsetTop;
        // console.log("iY: " + yU);


        //position x,y down button 
        let xD = down.offsetLeft;
        // console.log("iX: " + xD);

        let yD = down.offsetTop;
        // console.log("iY: " + yD);


        //iY=obiekt.style.pixelTop; 
        if(
            ev.pageX > xL && ev.pageX < (xL + 0.23 * screen.width ) && 
            ev.pageY > yL && ev.pageY < (yL + 0.12 * screen.height )){
            //    console.log("lewo");
               
               if (destination != 'R')  // left
                {
                    // console.log("lewo");
                    
                    bodySnake[0].increaseVa(-bodySnake[0].getWidth(),0);
                    snakeHeadImage.src = "img/headLL.png";
                    // console.log(destination);
                    destination = 'L';
                }
            }

        else if(
            ev.pageX > xU && ev.pageX < (xU + 0.42 * screen.width ) && 
            ev.pageY > yU && ev.pageY < (yU + 0.06 * screen.height)){
                // console.log("gora");

                if (destination != 'D') // up
                {
                    // console.log("gora");
                    
                    bodySnake[0].increaseVw(0, -bodySnake[0].getHeight());
                    snakeHeadImage.src = "img/headUU.png";
                    // console.log(destination);
                    destination = 'U';
                }
        
            }

        else if(
            ev.pageX > xD && ev.pageX < (xD + 0.42 * screen.width) && 
            ev.pageY > yD && ev.pageY < (yD + 0.06 * screen.height)){
                // console.log("dol");

                if (destination != 'U') // down
                {
                // bat.changeX(stepSize);
                // console.log("dol");
                snakeHeadImage.src = "img/headDD.png";
                bodySnake[0].increaseVs(0, bodySnake[0].getHeight());
                // console.log(destination);
                destination = 'D';
                
                }
    
            }
        else if(
            ev.pageX > xR && ev.pageX < (xR + 0.23 * screen.width) && 
            ev.pageY > yR && ev.pageY < (yR + 0.12 * screen.height)){
                // console.log("prawo");
                if (destination != 'L') // right
                    {
                    // bat.changeX(stepSize);
                    // console.log("prawo");
                   
                    bodySnake[0].increaseVd(bodySnake[0].getWidth(),0);
                    snakeHeadImage.src = "img/headRR.png";
                    // console.log(destination);
                    destination = 'R';
                    }
        
            }
    }
}

