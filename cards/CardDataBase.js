var AM = new AssetManager();

function CardDataBase(gamet) {
    this.cards = [
    {
        name: 'Attack',
        type: 'damage',
        value: 20,
        spritesheet: AM.getAsset("./img/cards.png")
    },
    {
        name: 'fireball',
        ability: function () {
        game.battle.PlayerCharacter.health -= 20},
        spritesheet: AM.getAsset("./img/cards.png")}]
}