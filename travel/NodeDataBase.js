var AM = new AssetManager();

function NodeDataBase() {

    this.nodes =
    [{
        name: 'enemy_node',
        opacity: 1,
        spritesheet: AM.getAsset("./img/travel/enemy_node.png"),
        fn: 'setDungeonToEnemy'
    },                 
    {
        name: 'shop_node',
        opacity: 1,
        spritesheet: AM.getAsset("./img/travel/shop_node.png"),
        fn: 'setDungeonToShop'
    },
    {
        name: 'event_node',
        opacity: 1,
        spritesheet: AM.getAsset("./img/travel/event_node.png"),
        fn: 'setDungeonToEvent'
    },

    {
        name: 'gamble_node',
        opacity: 1,
        spritesheet: AM.getAsset("./img/travel/gamble_node.png"),
        fn: 'setDungeonToGamble'
    },
    {
        name: 'elite_node',
        opacity: 1,
        spritesheet: AM.getAsset("./img/travel/elite_node.png"),
        fn: 'setDungeonToElite'
    }]

    this.bigNodes =
    [{
        name: 'treasure_node',
        opacity: 1,
        spritesheet: AM.getAsset("./img/travel/treasure_node.png"),
        fn: 'setDungeonToTreasure'

    }]
};