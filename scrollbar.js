
 
function scrollbar(game, spritesheet, content, minx, miny, type) {
    this.game = game;
    this.minx = 300;
    this.miny = 300;
    this.y = this.miny;
    this.width = 20;
    this.height = 100;
    this.x = this.minx;
    this.spritesheet = spritesheet;
    this.content = content;
    this.opacity = 1;   
    this.ctx = game.ctx;
    this.imdragged = false;
    this.bottomy = this.miny;
}

scrollbar.prototype.update = function (content) {    
    this.content = content;
    if (this.game.origspot){ 
        //console.log(this.game.origspot)
        if(((this.game.origspot['x'] > this.x && this.game.origspot['x'] < this.x + this.width  )
        && (this.game.origspot['y'] > this.y && this.game.origspot['y'] < this.y + this.height)) || this.imdragged) {
            this.imdragged = true;
            var x = this.game.newspot.y + ( this.bottomy - this.game.origspot.y);
            if (x > this.miny) {
                this.y = x;
            } else {
                this.y = this.miny
            }
        if (!this.game.mousedown) {
            this.game.origspot = false;
            this.imdragged = false;
            this.bottomy = this.y;

        }
        }
    }
    for (let i = 0; i < this.content.length; i++) {
        this.content[i].y = this.content[i].yOrig - (this.y - this.miny)
    }
}

scrollbar.prototype.reset = function() {
    this.y = this.miny;
    this.bottomy = this.miny
}
scrollbar.prototype.draw = function () {

    this.ctx.drawImage(this.spritesheet,
        this.x, this.y);  
}
