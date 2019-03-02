
 
function scrollbar(game, spritesheet, content, minx, miny, type) {
    this.game = game;
    this.minx = minx;
    this.miny = miny;
    this.width = 20;
    this.height = 100;
    if (type === 'horizontal'){
        this.width = 100;
        this.height = 20;
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
            console.log("no")
                this.imdragged = true;
                var x = this.game.newspot.y + ( this.bottomy - this.game.origspot.y);
                if (x > this.miny) {
                    console.log("nani")

                    this.y = x;
                } else {
                    console.log("nani2")

                    this.y = this.miny
                }
                if (!this.game.mousedown) {
                    console.log("nani3")

                    this.game.origspot = false;
                    this.imdragged = false;
                    this.bottomy = this.y;

                }
            } else if (this.type === 'horizontal') {
                console.log('fukinAmoite')
                this.imdragged = true;
                var x = this.game.newspot.x + ( this.leftx - this.game.origspot.x);
                if (x > this.minx) {
                    console.log("nani")
                    this.x = x;
                } else {
                    console.log("nani2")
                    this.x = this.minx
                }
                if (!this.game.mousedown) {
                    console.log("nani3")
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
