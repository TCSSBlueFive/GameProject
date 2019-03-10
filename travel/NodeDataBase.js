var AM = new AssetManager();
//there are duplicate nodes within these array as they are
//basically based off the position of the map i random between
//a different array. 
function NodeDataBase() {

    this.nodes =
    [{
        name: 'enemy_node',
        opacity: 1,
        spritesheet: AM.getAsset("./img/travel/enemy_node.png"),
        fn: 'setDungeonToEnemy'
    },                 
    /*{
        name: 'event_node',
        opacity: 1,
        spritesheet: AM.getAsset("./img/travel/event_node.png"),
        fn: 'setDungeonToEvent'
    }*/]

    this.special_nodes = [
    {
        name: 'elite_node',
        opacity: 1,
        spritesheet: AM.getAsset("./img/travel/elite_node.png"),
        fn: 'setDungeonToElite'
    },  {
        name: 'shop_node',
        opacity: 1,
        spritesheet: AM.getAsset("./img/travel/shop_node.png"),
        fn: 'setDungeonToShop'
    }, {
        name: 'enemy_node',
        opacity: 1,
        spritesheet: AM.getAsset("./img/travel/enemy_node.png"),
        fn: 'setDungeonToEnemy'
    },   {
        name: 'event_node',
        opacity: 1,
        spritesheet: AM.getAsset("./img/travel/event_node.png"),
        fn: 'setDungeonToEvent'
    }, {
        name: 'campfire_node',
        opacity: 1,
        spritesheet: AM.getAsset("./img/travel/campfire_node.png"),
        fn: 'setDungeonToCampfire'
    }, {
        name: 'campfire_node',
        opacity: 1,
        spritesheet: AM.getAsset("./img/travel/campfire_node.png"),
        fn: 'setDungeonToCampfire'
    }, {
        name: 'campfire_node',
        opacity: 1,
        spritesheet: AM.getAsset("./img/travel/campfire_node.png"),
        fn: 'setDungeonToCampfire'
    } , {
        name: 'campfire_node',
        opacity: 1,
        spritesheet: AM.getAsset("./img/travel/campfire_node.png"),
        fn: 'setDungeonToCampfire'
    }]

    //random nodes biased towards elites
    this.special_nodes2 = [
        {
            name: 'elite_node',
            opacity: 1,
            spritesheet: AM.getAsset("./img/travel/elite_node.png"),
            fn: 'setDungeonToElite'
        }, {
            name: 'elite_node',
            opacity: 1,
            spritesheet: AM.getAsset("./img/travel/elite_node.png"),
            fn: 'setDungeonToElite'
        } , {
            name: 'shop_node',
            opacity: 1,
            spritesheet: AM.getAsset("./img/travel/shop_node.png"),
            fn: 'setDungeonToShop'
        }, {
            name: 'enemy_node',
            opacity: 1,
            spritesheet: AM.getAsset("./img/travel/enemy_node.png"),
            fn: 'setDungeonToEnemy'
        },   {
            name: 'event_node',
            opacity: 1,
            spritesheet: AM.getAsset("./img/travel/event_node.png"),
            fn: 'setDungeonToEvent'
        }, {
            name: 'campfire_node',
            opacity: 1,
            spritesheet: AM.getAsset("./img/travel/campfire_node.png"),
            fn: 'setDungeonToCampfire'
        }, {
            name: 'elite_node',
            opacity: 1,
            spritesheet: AM.getAsset("./img/travel/elite_node.png"),
            fn: 'setDungeonToElite'
        }, {
            name: 'elite_node',
            opacity: 1,
            spritesheet: AM.getAsset("./img/travel/elite_node.png"),
            fn: 'setDungeonToElite'
        }]
    this.treasure_node =
    [{
        name: 'treasure_node',
        opacity: 1,
        spritesheet: AM.getAsset("./img/travel/treasure_node.png"),
        fn: 'setDungeonToTreasure'

    }]
    this.campfire_node = 
    [{
        name: 'campfire_node',
        opacity: 1,
        spritesheet: AM.getAsset("./img/travel/campfire_node.png"),
        fn: 'setDungeonToCampfire'
    }]
    this.bosses = 
    [{
        name: 'boss_node',
        opacity: 1,
        spritesheet: AM.getAsset("./img/travel/elite_node.png"),
        fn: 'setDungeonToElite'
    }]
};