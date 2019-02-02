
 
function SceneManager(game) {
    this.game = game;
}

SceneManager.prototype.removeAllEntities = function() {
    //scene manager will be entity 0
    for( let i = 1; i < this.game.entities.length; i++) {
        this.game.entities.pop();
    }
}
//once a battle starts, add all new entities
SceneManager.prototype.addNewEntitiesBattle = function() {

}
//once a travel starts, add travel entities
SceneManager.prototype.addNewEntitiesTravel = function() {

}

SceneManager.prototype.update = function () {
    //needs to be added
}
SceneManager.prototype.draw = function () {
    //scene manager does not need to be drawn
}
