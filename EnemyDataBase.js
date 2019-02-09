//Level 1 Slime
function EnemyDataBase(game, spritesheet) {
    this.monsters = [{health: 100, name: 'slime', attacks: 10, 
    animation: new Animation(spritesheet, 256, 256, 1, .075, 18, true, 0.5, 1),
    attackAnimation: new Animation(spritesheet, 256, 256, 1, .075, 18, true, 0.5, 2)},
                     
    {health: 120, name: 'succubus', attacks: 10,
    flyAnimation: new Animation(spriteSheet, 100, 141, 7, 0.10, 7, true, 1, 1),
    attackAnimation: new Animation(spriteSheet, 200, 150, 6, 0.15, 6, true, 1, 2),
    deathAnimation: new Animation(spriteSheet, 100, 140, 7, 0.15, 7, true, 1, 0)},]
}
