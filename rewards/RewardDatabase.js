var AM = new AssetManager();

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
function RewardDatabase(game){
    this.width = game.width *.2101694;
    this.height = game.height * .1;
    this.rewards = [
    {
        name: 'gold',
        value: getRandomInt(15) + 15,
        spritesheet: AM.getAsset("./img/reward/gold.png"),
        fn: "addGoldToPlayer",
        opacity: 1,
        width: game.width *.2101694,
        height: game.height * .1
    }, {
        name: 'card',
        spritesheet: AM.getAsset("./img/reward/addCardToDeck.png"),
        fn: "addCardToDeck",
        opacity: 1,
        width: game.width *.2101694,
        height: game.height * .1,
        text: "Add Card to Deck"
    }, {
        name: 'item',
        value: getRandomInt(15) + 15,
        spritesheet: AM.getAsset("./img/reward/addItemToPlayer.png"),
        fn: "addItemToPlayer",
        opacity: 1,
        width: game.width *.2101694,
        height: game.height * .1,
        text: "Add random item"

    }]
    this.rewards[0].text = 'Gain ' + this.rewards[0].value + ' gold'
};

