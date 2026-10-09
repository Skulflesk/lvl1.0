function Player()
{
    //players location
    this.x = canvas.width/2;
    this.y = canvas.height/2;

    //players dimentions
    this.width = 100;
    this.height = 100;

    //players speed
    this.vx = 0;
    this.vy =0;

    //players color
    this.color = "#ff0000";
    this.image = "test";

    //this draws the player on the actual screen
    this.draw = function()
    {
    context.save();
        context.fillStyle = this.color;
        context.translate(this.x, this.y);
        context.fillRect((this.width/-2), (this.height/-2),
        context.drawImage(this.image, (this.width/-2), (this.height/-2), this.width, this.height);
       
    context.restore();
    }
    //this changted the players location
    this.move = function()
    {
        this.x += this.vx;
        this.y += this.vy;
    }
}