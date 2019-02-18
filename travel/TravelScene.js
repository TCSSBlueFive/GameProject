var AM = new AssetManager();


function TravelScene(game, dungeon, opacity){
    this.dungeon = dungeon;
    this.opacity = opacity;
    this.travelbars = [];
    this.game = game;
    this.ctx = game.ctx;
    this.y = 100;
    this.travelBarWidth = 90;
    this.travelBarHeight = 118;
    this.bigBarY = 312;
};


TravelScene.prototype.generateBars = function () {
    //does 5 bars
     for (let i = 0; i < 5; i++) {
        let newBar = new TravelBar(this.game, 9 + (this.travelBarWidth * i), this.y, i, 1);
        newBar.generateNodes();
        this.travelbars[i] = newBar;

     }
     //need center
     let BigBar = new BigBar(this.game, 459, this.bigBarY, 1);

     //does right 5 bars
     for (let j = 6; j < 11; j++) {
        let newBar2 = new TravelBar(this.game, 630 + (this.travelBarWidth * (j - 6)), this.y, j, 1);
        newBar2.generateNodes();
        this.travelbars[j] = newBar2;

     }

     let BigBar = new BigBar(this.game, 1081, this.bigBarY, 1);

    //does boss
}

TravelScene.prototype.draw = function () {
    for(let i = 0; i < this.travelbars.length; i++) {
        this.travelbars[i].draw();
    }    
};

TravelScene.prototype.update = function () {     

};
