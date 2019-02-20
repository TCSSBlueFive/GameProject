var AM = new AssetManager();

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
        animation: new Animation(spritesheet, 256, 256, 1, .075, 18, true, 0.5, 1,0),
        attackAnimation: new Animation(spritesheet, 256, 256, 1, .075, 18, false, 0.5, 2,0),
        damagedAnimation: new Animation(spritesheet, 256, 256, 1, .3, 3, false, .5, 3,0),
        deathAnimation: new Animation(spritesheet, 253, 256, 1, .075, 3, true, .5, 5 ,0)
    },                 
    {
        health: 120,
        name: 'succubus',
        attacks: {
            type: 'damage',
            value: 90
        },
        animation: new Animation(AM.getAsset("./img/succubus_basic.png"), 100, 141, 1, 0.10, 7, true, 1, 1,0),
        attackAnimation: new Animation(AM.getAsset("./img/succubus_basic.png"), 200, 150, 1, 0.15, 6, false, 1, 2,0),
        damagedAnimation: new Animation(AM.getAsset("./img/succubus_basic.png"), 100, 140, 1, 0.15, 4, false, 1, 0,0),
        deathAnimation: new Animation(AM.getAsset("./img/succubus_basic.png"), 100, 140, 1, 0.15, 7, true, 1, 0,0)
    }]
};