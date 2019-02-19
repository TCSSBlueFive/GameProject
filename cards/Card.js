// no inheritance
function Card(game, dungeon, cardHand, spritesheet, x, y, width, height, fn, opacity) {
    this.game = game;
    this.dungeon = dungeon;
    this.fn = fn;
    this.x = x;
    this.cardHand = cardHand;
    this.y = y;
    this.width = width;
    this.spritesheet = spritesheet;
    this.height = height;
    this.ctx = game.ctx;
};

Card.prototype.draw = function () {

    this.ctx.drawImage(this.spritesheet,
                   this.x, this.y);

};

Card.prototype.update = function () {
    
    

    if (this.game.click) {
        if((this.game.click['x'] > this.x && this.game.click['x'] < this.x + this.width  )
        && (this.game.click['y'] > this.y && this.game.click['y'] < this.y + this.height)) {
            var index = this.cardHand.cardsInHand.indexOf(this);
            if (index > -1) {
                this.cardHand.cardsInHand.splice(index, 1);
            }        

            if (this.dungeon.BattleOngoing) {
                this.dungeon.playCount++;
                this.dungeon.battle.playerMove(this);    
                this.game.click = false;    
            }
            
            if(this.dungeon.playCount === 3) {
                console.log("Enemies Turn");
                this.dungeon.battle.enemyMoves();
                this.dungeon.playCount = 0;
            }

        }
    }
};