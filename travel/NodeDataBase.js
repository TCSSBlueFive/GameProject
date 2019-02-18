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
    }]
};