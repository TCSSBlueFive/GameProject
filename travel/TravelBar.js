var AM = new AssetManager();


function TravelBar(game, travelScene, dungeon, position, x, y, barnum, opacity){
    this.x = x;
    this.y = y;
    this.opacity = opacity;
    this.dungeon = dungeon;
    this.travelnodes =[];
    this.game = game;
    this.ctx = game.ctx;
    this.travelNodeWidth = 90;
    this.travelNodeHeight = 118;
    this.travelScene = travelScene;
    this.position = position;
    this.NodeDataBase = new NodeDataBase();
};
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

TravelBar.prototype.generateNodes = function () {
     var myNum = getRandomInt(5);

     //so there is always atleast 1 enemy path
     this.travelnodes[0] = new travel_node(this.game, this.travelScene, this,this.dungeon, this.position, AM.getAsset("./img/travel/enemy_node.png"), 'setDungeonToEnemy',this.x, this.y, 1);

     for (let i = 1; i <= myNum; i++) {
         var randomNum = getRandomInt(this.NodeDataBase.nodes.length);
         //var randomNum = getRandomInt(2);
         var newNodeInfo = this.NodeDataBase.nodes[randomNum]
         var newTravelNode = new travel_node(this.game, this.travelScene, this, this.dungeon, this.position, newNodeInfo.spritesheet, newNodeInfo.fn, this.x, this.y + (this.travelNodeHeight * i), newNodeInfo.opacity)
         this.travelnodes[i] = newTravelNode;
        
     }
}

TravelBar.prototype.draw = function () {
    for (let i = 0; i < this.travelnodes.length; i++) {
        this.travelnodes[i].draw();    
    }
};

TravelBar.prototype.update = function () {     
    for (let i = 0; i < this.travelnodes.length; i++) {
        this.travelnodes[i].update();    
    }
    
};
