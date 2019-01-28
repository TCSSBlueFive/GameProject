/* button prototype */

function Button(game, img) {
    this.x = 200;
    this.y = 600;
    this.spritesheet = img;
    this.game = game;
    this.ctx = game.ctx;
   // this.fn = fn; //pass the button's click function
};

Button.prototype.draw = function () {
    this.ctx.drawImage(this.spritesheet,
                   this.x, this.y);
};

Button.prototype.mouse_down = function(mouseX, mouseY) {
    var hit; //check for hit on mouse click here, either true or false
    if (hit == true) 
      console.log("well");
    return hit;
};

Button.prototype.update = function () {

};



/* global button list */

var buttons = [];

//buttons.push(new button(0,0,90,50,"new.png",function() {
    
    //newgame();
//}));

//buttons.push(new button(90,0,90,50,"quit.png",function() {
    //quit();
//}));



/* inside your game's click handler */

function checkClick(mouseEvent) {
    var button_was_clicked = buttons.some(function(b) {
        return b.mouse_down(mouseEvent.offsetX, mouseEvent.offsetY);
    });

    if (button_was_clicked) return; //return early if button was clicked
    
    //rest of click handler goes here
}