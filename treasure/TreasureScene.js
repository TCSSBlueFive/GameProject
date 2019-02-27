var AM = new AssetManager();


function TreasureScene(game, dungeon, opacity){
    this.dungeon = dungeon;
    this.opacity = opacity;
    this.game = game;
    this.ctx = game.ctx;

};



TreasureScene.prototype.update = function () {     
    if((this.game.click['x'] > 1145 && this.game.click['x'] < 1330)
    && (this.game.click['x'] > 520 && this.game.click['y'] < 607)) {
        this.dungeon.rewardScene = false;
        this.dungeon.travelScene = true;
    }
};

TreasureScene.prototype.update = function() {
    //draw proceed button
    //drawtreasure chest
   
}
