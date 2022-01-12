class BadAppple extends GameObject
{

    // constructor(image, x, y, width)
    // {
    //     super(null); /* as this class extends from GameObject, you must always call super() */

    //     /* These variables depend on the object */
    //     this.image = image;
    //     this.x = x;
    //     this.y = y;
        
        
    // }

    constructor(image)
    {
        super(null); /* as this class extends from GameObject, you must always call super() */

        /* These variables depend on the object */
        this.image = image;
        this.width = 20*scal;
        this.height = 20*scal;
        
    }

    render()
    {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }

    // changeX(changeAmount)
    // {
    //     this.x += changeAmount;
        
    //     /* Ensure that only half of the bat can be off the screen                               */
    //     /* This ensures that the bat can still fire at a log that is on the edge of the screen, */
    //     /* while at the same time the bat cannot hide fully from oncoming fireballs.            */
    //     if(this.x > canvas.width - (this.width / 2))
    //     {
    //         this.x = canvas.width - (this.width / 2);
    //     }
    //     else if(this.x < -(this.width / 2))
    //     {
    //         this.x = -(this.width / 2);
    //     }
    // }
    
    move(){
        // this.setX(Math.floor(Math.random() * 25) * 20 * scal);
        // this.setY(Math.floor(Math.random() * 25) * 20 * scal);

        this.setX(Math.floor(Math.random() * canvas.width/(20*scal)) * 20 * scal);
        this.setY(Math.floor(Math.random() * canvas.height/(20*scal)) * 20 * scal);
    }

    getWidth()
    {
        return this.width;
    }
    
    setX(x){
        this.x = x;
    }

    setY(y){
        this.y = y;
    }

    setWidth(newWidth)
    {
        this.width = newWidth;
    }

    getX(){

        return this.x;
    }

    getY(){

        return this.y;
    }

    getCentreX()
    {
        return this.x + this.width / 2;
    }


    getCentreY()
    {
        return this.y + this.height / 2;
    }
    // pointIsInsideBoundingRectangle(pointX, pointY)
    // {
    //     if ((pointX > this.x) && (pointY > this.y))
    //     {
    //         if (pointX > this.x)
    //         {
    //             if ((pointX - this.x) > this.width)
    //             {
    //                 return false; // to the right of this gameObject
    //             }
    //         }

    //         if (pointY > this.y)
    //         {
    //             if ((pointY - this.y) > this.height)
    //             {
    //                 return false; // below this gameObject
    //             }
    //         }
    //     }
    //     else // above or to the left of this gameObject
    //     {
    //         return false;
    //     }
    //     return true; // inside this gameObject
    // }



}