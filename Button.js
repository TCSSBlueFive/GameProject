/* button prototype */

function Button(x, y, width, height, imgurl, fn) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.img = new Image();
    this.img.src = imgurl;
    this.fn = fn; //pass the button's click function
};



Button.prototype.mouse_down = function(mouseX, mouseY) {
    var hit; //check for hit on mouse click here, either true or false
    if (hit == true) 
        fn(); //run the button's function
    return hit;
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