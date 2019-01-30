function CardDataBase(game, theSpritesheet) {
    this.cards = [{name: 'Attack', type: 'damage',
    value: 10, spritesheet:theSpritesheet},
                     
    {name: 'fireball', ability: function () {
    game.battle.PlayerCharacter.health -= 20
    }, spritesheet:theSpritesheet}]
}