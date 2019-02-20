//Level 1 Slime'

function EnemyDataBase(game, spritesheet) {
    this.game = game;

    this.monsters =
    [{
        health: 100,
        name: 'slime',
        attacks: {
            type: 'damage',
            value: 5
        },
        animation: new Animation(spritesheet, 256, 256, 1, .075, 18, true, 0.5, 1),
        attackAnimation: new Animation(spritesheet, 256, 256, 1, .075, 18, false, 0.5, 2),
        damagedAnimation: new Animation(spritesheet, 256, 256, 1, .3, 3, false, .5, 3),
        deathAnimation: new Animation(spritesheet, 253, 256, 1, .075, 3, true, .5, 5 )
    },                 
    {
        health: 120,
        name: 'ghoul',
        attacks: {
            type: 'damage',
            value: 90
        },
        animation: new Animation(spritesheet, 256, 256, 1, .075, 18, true, 0.5, 3)
    }]
};