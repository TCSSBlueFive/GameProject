function CardDataBase(game, theSpritesheet) {
    this.cards = [{name: 'Atttack', ability: function () {
        game.battle.Enemy.health -= 10
    }, spritesheet:theSpritesheet},
                     
    {name: 'fireball', ability: function () {
    game.battle.PlayerCharacter.health -= 20
    }, spritesheet:theSpritesheet}]
}