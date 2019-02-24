var AM = new AssetManager();

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
function RewardDatabase(){

    this.rewards = [
    {
        name: 'gold',
        value: getRandomInt(15) + 15,
        spritesheet: AM.getAsset("./img/reward/gold.png"),
        fn: "addGoldToPlayer",
        opacity: 1,
        width: 350,
        height: 110
    }, {
        name: 'card',
        value: getRandomInt(15) + 15,
        spritesheet: AM.getAsset("./img/reward/addCardToDeck.png"),
        fn: "addCardToDeck",
        opacity: 1,
        width: 350,
        height: 110
    }, {
        name: 'item',
        value: getRandomInt(15) + 15,
        spritesheet: AM.getAsset("./img/reward/addItemToPlayer.png"),
        fn: "addItemToPlayer",
        opacity: 1,
        width: 350,
        height: 110

    }]
};
