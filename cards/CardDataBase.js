var AM = new AssetManager();

function CardDataBase(gamet) {
    this.cards = [
    {
        name: 'Attack',
        type: 'damage',
        value: 3,
        spritesheet: AM.getAsset("./img/cards.png")
    },
    {
        name: 'fireball',
        type: 'damage',
        value: 100,
        ability: function () {
        game.battle.PlayerCharacter.health -= 20},
        spritesheet: AM.getAsset("./img/fireball.png")}]
}