var AM = new AssetManager();

//this takes an event from the event database
//and makes the scenario object

//the scenario object, based off the event, will generate
//event options

//these event options, when clicked, will introduce effects into the game.
function EventScene(game, dungeon){
    this.dungeon = dungeon;
    this.opacity = 1;
    this.game = game;
    this.ctx = game.ctx;
};


EventScene.prototype.update = function () {     
    if (this.display_options) {
        this.rest_option.update();
        this.smith_option.update();
    }
};

EventScene.prototype.draw= function() {
    if (this.display_options) {
        this.rest_option.draw();
        this.smith_option.draw();
    }
}
