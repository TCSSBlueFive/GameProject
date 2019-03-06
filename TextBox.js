// no inheritance
function TextBox(game, x, y, width, height, text) {
   this.game = game;
   this.x =x ;
   this.y = y;
   this.width = width;
   this.height = height;
   this.text = text;
   this.ctx = game.ctx;
   this.text = text;
};

TextBox.prototype.draw = function () {
    this.ctx.fillStyle = '#808080';
    this.ctx.fillRect(this.x, this.y, this.width, this.height);

    this.ctx.fillStyle = '#000000';
    this.ctx.fillRect(this.x + 20, this.y + 20, this.width  -40, this.height - 40);
    this.ctx.fillStyle = '#808080';
    this.ctx.fillRect(this.x + 40, this.y + 40, this.width - 80, this.height - 80);
    this.ctx.fillStyle = '#FFFFFF';
    this.ctx.font = '40px Arial Black'
    this.ctx.fillText(this.text, this.x + this.game.width *.13559, this.y + this.game.height *.066)


}

TextBox.prototype.update = function () {


};