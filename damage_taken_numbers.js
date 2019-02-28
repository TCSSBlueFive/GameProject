
 
function damage_taken_numbers(game, damage_sources, value, damageOrHealing, x, y) {

    //an array for damage taken sources so that multiple damage text
    //will show.
    this.game = game;
    this.damage_sources = damage_sources;
    this.x = x ;
    this.y = y;
    this.xOffset = 0;
    this.yOffset = 0;
    this.size = 90;
    this.value = 90;
    this.ctx = game.ctx;
    this.damagetakentext = value;
    this.damageOrHealing = damageOrHealing;
}



damage_taken_numbers.prototype.update = function () {

}

damage_taken_numbers.prototype.draw = function () {
    
    if (this.damageOrHealing === 'damage') {
        this.xOffset += 1.1;
        this.size -= 2;
        this.yOffset +=3;
        if (this.size < 5) {
            var index = this.damage_sources.indexOf(this);
                if (index > -1) {
                    this.damage_sources.splice(index, 1);
                }      
        }
        this.ctx.save();
        this.ctx.font = this.size + "px Impact";
        this.ctx.fillStyle = "#ff0000";
        this.ctx.fillText('-' +this.damagetakentext , this.x + this.xOffset, this.y + this.yOffset); 
        this.ctx.restore();
    } else if (this.damageOrHealing === 'heal') {
        this.value -= 1;
        if (this.value < 5) {
            var index = this.damage_sources.indexOf(this);
                if (index > -1) {
                    this.damage_sources.splice(index, 1);
                }      
        }
        this.ctx.save();
        this.ctx.font = "70px Impact";
        this.ctx.fillStyle = "#00ff00";
        if ((Math.floor(this.value / 10)) % 2 === 0) {
            this.ctx.fillText('+' +this.damagetakentext , this.x + 10, this.y); 
        } else {
            this.ctx.fillText('+' +this.damagetakentext , this.x - 10, this.y); 
        }
        this.ctx.restore();
    }
}
