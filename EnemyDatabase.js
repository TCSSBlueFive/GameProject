//Level 1 Slime
function EnemyDatabase(game, spritesheet) {
    this.monsters = [{health: 100, name: 'slime', attacks: 10, 
    animation: new Animation(spritesheet, 256, 256, 1, .075, 18, true, 0.5, 1),
    attackAnimation: new Animation(spritesheet, 256, 256, 1, .075, 18, true, 0.5, 2)},
                     
    {health: 120, name: 'ghoul', attack: function () {
    game.battle.PlayerCharacter.health -= 20
    }, animation: new Animation(spritesheet, 256, 256, 1, .075, 18, true, 0.5),
    yIndex: 0},]
}