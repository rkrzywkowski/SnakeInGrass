

class BodySnake extends GameObject
{

    constructor(image, x, y, height, width)
    {
        super(5); /* as this class extends from GameObject, you must always call super() */

        /* These variables depend on the object */
        this.image = image;
        this.x = x;
        this.y = y;
        this.vx = 0;
        this.vy = 0;
        this.width = width * scal;
        this.height = height * scal;
      
    }

    setAll(image, x, y, height, width){
        this.image = image;
        this.x = x;
        this.y = y;
        this.vx = 0;
        this.vy = 0;
        this.width = width * scal;
        this.height = height * scal;
    }



    getWidth(){
        return this.width;
    }

    getHeight(){
        return this.height;
    }

    getX(){
        return this.x;
    }

    getY(){
        return this.y;
    }

    setX(x){
        this.x = x;
    }

    setY(y){
        this.y = y;
    }

    getVX(){
        return this.vx;
    }

    getVY(){
        return this.vy;
    }

    setVX(x){
        this.vx = x;
    }

    setVY(y){
        this.vy = y;
    }

    getCentreX()
    {
        return this.x + this.width / 2;
    }


    getCentreY()
    {
        return this.y + this.height / 2;
    }

    render()
    { 
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }

   
    increaseVw(i, i1) {
        this.vx = i;
        this.vy = i1;
    }

    increaseVs(i, i1) {
        this.vx = i;
        this.vy = i1;
    }
    increaseVa(i, i1) {
        this.vx = i;
        this.vy = i1;
    }
    increaseVd(i, i1) {
        this.vx = i;
        this.vy = i1;
    }

    move(x, y){
        this.x = x;
        this.y = y;
    }
    
    changeImage(headImage){
        this.image = headImage;
    }
   

}