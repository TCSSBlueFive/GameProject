
 
function scrollbar(game, spritesheet, content, minx, miny, type) {
    this.game = game;
    this.minx = minx;
    this.miny = miny;
    this.width = 
    this.height = game.height * .0909090909;
    if (type === 'horizontal'){
        this.width =  game.height * .0909090909;
        this.height = game.width * .01010169;
    }
    
    this.y = this.miny;
    this.x = this.minx;
    this.spritesheet = spritesheet;
    this.content = content;
    this.opacity = 1;   
    this.type = type;
    this.ctx = game.ctx;
    this.imdragged = false;
    this.bottomy = this.miny;
    this.leftx = this.minx;
}

scrollbar.prototype.update = function (content) {    
    this.content = content;
    if (this.game.origspot){ 
        //console.log(this.game.origspot)
        if(((this.game.origspot['x'] > this.x && this.game.origspot['x'] < this.x + this.width  )
        && (this.game.origspot['y'] > this.y && this.game.origspot['y'] < this.y + this.height)) || this.imdragged) {

            if (this.type === 'vertical') {
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
            } else if (this.type === 'horizontal') {
                this.imdragged = true;
                var x = this.game.newspot.x + ( this.leftx - this.game.origspot.x);
                if (x > this.minx) {
                    this.x = x;
                } else {
                    this.x = this.minx
                }
                if (!this.game.mousedown) {
                    this.game.origspot = false;
                    this.imdragged = false;
                    this.leftx = this.x;

                }
            }
        }
    }
    
    if (this.type === 'vertical') {
        for (let i = 0; i < this.content.length; i++) {
            this.content[i].y = this.content[i].yOrig - (this.y - this.miny)
        }
    } else if (this.type ==='horizontal') {
        for (let i = 0; i < this.content.length; i++) {
            this.content[i].x = this.content[i].xOrig - (this.x - this.minx);
        }
    }
}
    


scrollbar.prototype.reset = function() {
    this.y = this.miny;
    this.bottomy = this.miny
    this.x = this.minx;
    this.leftx = this.minx;
}
scrollbar.prototype.draw = function () {
    this.ctx.drawImage(this.spritesheet,
        this.x, this.y, this.width, this.height);  

}
