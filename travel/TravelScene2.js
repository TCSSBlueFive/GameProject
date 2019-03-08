var AM = new AssetManager();

//70 170

function TravelScene2(game, dungeon, opacity){
    this.dungeon = dungeon;
    this.opacity = opacity;
    this.paths = [];
    this.encounters = [];

    this.x = game.width * .02711;
    this.y = 0;///game.height * .123;
    this.game = game;
    this.ctx = game.ctx;
    this.yOffset = game.height * .1;
    this.currentRoom = 0;
    this.node_center_width = game.width * .03016/2;
    this.node_center_height = game.height *.071515/2;
    this.xrandval = game.width * .02372881;
    this.yrandval = game.height * .05128205;

    this.allEncounters = [];

    this.currentNode = 'none';
    this.xDist = game.width * .1016949;
    this.NodeDataBase = new NodeDataBase();

    this.mapHeight = game.height * .84;

};
TravelScene2.prototype.getDistBetweenNodes = function (node1, node2) {
    return Math.sqrt(Math.pow((node2.x - node1.x), 2) + Math.pow((node2.y- node1.y),2))
}

TravelScene2.prototype.setupscrollbar = function() {
    this.allEncounters = [];
    for (let i = 0; i < this.encounters.length; i++){
        for(let z = 0; z < this.encounters[i].length; z++) {
            this.allEncounters.push(this.encounters[i][z])
        }
    }
    this.myScrollBar = new scrollbar(this.game, AM.getAsset("./img/scrollbar_horizontal.png"), this.allEncounters, 200, this.game.height*.9375, 'horizontal');

}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function getRandomIntNegOrPos(max) {
    return getRandomInt(max * 2) - max;
}


TravelScene2.prototype.getAllNonLinked = function (row) {
    var returnNodes = [];
    for (let i = 0; i < row.length; i++) {
        if (row[i].linked.length === 0) {
            returnNodes.push(row[i])
        }
    }
    return returnNodes;
}

TravelScene2.prototype.getClosest = function (node, row) {
    yDist = 1000;
    let returnnode = node;
    for (let i = 0; i < row.length; i++) {
        let yHigh = row[i].y;
        let yLow = node.y;
        if (node.y > yHigh){
            yHigh = node.y;
            yLow = row[i].y;
            if (yHigh - yLow < yDist) {
                returnnode = row[i];
            }
        }
    }
    return returnnode;
}

//generates the rest of the encounters.
TravelScene2.prototype.generateEncounters = function () {

    //sets up the encounters b4 boss
    for(let q = 0; q < 14; q++) {
        var myEncounterCount = getRandomInt(3) + 3;
        var num = this.mapHeight / (myEncounterCount + 1);

        var encounterRow = [];
        var prevRow = this.encounters[q];
        for (let i = 1; i <= myEncounterCount; i++) {

            
               

            if (q == 2 || q == 5 || q == 7 || q == 9) {
                //these nodes can be a special node, but also maybe just a monster/event still
                var randomNum = getRandomInt(this.NodeDataBase.special_nodes.length);
                var newNodeInfo = this.NodeDataBase.special_nodes[randomNum]
                var newTravelNode = new travel_node2(this.game, this, this.dungeon,  0, newNodeInfo.spritesheet, 
                    newNodeInfo.fn, prevRow[0].x + this.xDist + getRandomIntNegOrPos(this.xrandval) , this.yOffset + (num * i)  + getRandomIntNegOrPos(this.yrandval));
                encounterRow.push(newTravelNode);
            } else if (q == 6) {
                //middle node always a treasure chest
                var newNodeInfo = this.NodeDataBase.treasure_node[0]
                var newTravelNode = new travel_node2(this.game, this, this.dungeon,  0, newNodeInfo.spritesheet, 
                    newNodeInfo.fn, prevRow[0].x + this.xDist + getRandomIntNegOrPos(this.xrandval) , this.yOffset + (num * i)  + getRandomIntNegOrPos(this.yrandval));
                encounterRow.push(newTravelNode);
            } else if (q == 13) {
                //last node always a campfire
                var newNodeInfo = this.NodeDataBase.campfire_node[0]
                var newTravelNode = new travel_node2(this.game, this, this.dungeon,  0, newNodeInfo.spritesheet, 
                    newNodeInfo.fn, prevRow[0].x + this.xDist + getRandomIntNegOrPos(this.xrandval) , this.yOffset + (num * i)  + getRandomIntNegOrPos(this.yrandval));
                encounterRow.push(newTravelNode);
            } else  if(q == 10 || q == 3 || q == 11) {
                var randomNum = getRandomInt(this.NodeDataBase.special_nodes2.length);
                var newNodeInfo = this.NodeDataBase.special_nodes2[randomNum]
                var newTravelNode = new travel_node2(this.game, this, this.dungeon,  0, newNodeInfo.spritesheet, 
                    newNodeInfo.fn, prevRow[0].x + this.xDist + getRandomIntNegOrPos(this.xrandval) , this.yOffset + (num * i)  + getRandomIntNegOrPos(this.yrandval));
                encounterRow.push(newTravelNode);

            } else {
                //only a monster/event for these
                var randomNum = getRandomInt(this.NodeDataBase.nodes.length);
                var newNodeInfo = this.NodeDataBase.nodes[randomNum]
                var newTravelNode = new travel_node2(this.game, this, this.dungeon,  0, newNodeInfo.spritesheet, 
                    newNodeInfo.fn, prevRow[0].x + this.xDist + getRandomIntNegOrPos(this.xrandval) , this.yOffset + (num * i)  + getRandomIntNegOrPos(this.yrandval));
                encounterRow.push(newTravelNode);
            }

        }
        this.encounters.push(encounterRow);

    }
    //last 1 always a boss
    //sets up boss encounter
    var num = this.mapHeight/ (2);
    var encounterRow = [];
    var newNodeInfo = this.NodeDataBase.nodes[0];
    var newTravelNode = new travel_node2(this.game, this, this.dungeon,  0, newNodeInfo.spritesheet, 
        newNodeInfo.fn, this.encounters[14][0].x + this.xDist + 60 , this.yOffset + num);
    encounterRow.push(newTravelNode);
    this.encounters.push(encounterRow);

}

//determines starting path # and fills them with encounters
TravelScene2.prototype.generatePaths = function () {
   var myPathCount = getRandomInt(2) + 3;
   var num = this.mapHeight / (myPathCount + 1);
   var encounterRow = [];
   for (let i = 1; i <= myPathCount; i++) {
        var randomNum = getRandomInt(this.NodeDataBase.nodes.length);
        var newNodeInfo = this.NodeDataBase.nodes[randomNum];
        //var newNodeInfo = this.NodeDataBase.campfire_node[0] //testing

        var newTravelNode = new travel_node2(this.game, this, this.dungeon, 0, newNodeInfo.spritesheet, 
        newNodeInfo.fn, this.x, this.yOffset + num * i );
        encounterRow.push(newTravelNode);  
    }
    this.encounters.push(encounterRow)

    

}
TravelScene2.prototype.drawLinks = function () {
    for (let i = 0; i < this.encounters.length; i++) {
        for (let q = 0; q < this.encounters[i].length; q++) {
            for(let z = 0; z < this.encounters[i][q].linked.length; z++) {
                this.ctx.save();
                this.ctx.strokeStyle = '#0000CD'

                if (this.encounters[i][q].clicked) {
                    ////////////draws X
                    this.ctx.lineWidth = 20;
                    this.ctx.strokeStyle = '#FF0000'
                    this.ctx.beginPath(); 
                    this.ctx.moveTo(this.encounters[i][q].x, this.encounters[i][q].y);
                    this.ctx.lineTo(this.encounters[i][q].x  + this.node_center_width * 2, this.encounters[i][q].y + this.node_center_height * 2);
                    this.ctx.stroke();
                    this.ctx.beginPath(); 
                    this.ctx.moveTo(this.encounters[i][q].x + this.node_center_width * 2, this.encounters[i][q].y);
                    this.ctx.lineTo(this.encounters[i][q].x, this.encounters[i][q].y + this.node_center_height * 2);
                    this.ctx.stroke();
                    /////////done drawing X
                    this.ctx.strokeStyle = '#0000CD'
                    if (this.encounters[i][q].linkedto === this.encounters[i][q].linked[z]) {
                        this.ctx.strokeStyle = '#FF0000'
                      
                    }

                } 
                if (this.encounters[i][q] === this.currentNode) {
                    this.ctx.strokeStyle = '#FFFF00'

                }
                this.ctx.lineWidth = 10;
                
                this.ctx.beginPath(); 
                this.ctx.setLineDash([8, 10]);

                this.ctx.moveTo(this.encounters[i][q].x + this.node_center_width, this.encounters[i][q].y + this.node_center_height);
                // End point (180,47)
                this.ctx.lineTo(this.encounters[i][q].linked[z].x + this.node_center_width, this.encounters[i][q].linked[z].y + this.node_center_height);
                // Make the line visible
                this.ctx.stroke();
                this.ctx.restore();
            }
        }
    }
    
}


/*
TravelScene2.prototype.drawLinks = function () {
    for (let i = 0; i < this.encounters.length; i++) {
        for (let q = 0; q < this.encounters[i].length; q++) {
            for(let z = 0; z < this.encounters[i][q].linked.length; z++) {
                this.ctx.save();
                if (this.encounters[i][q].clicked) {
                    this.ctx.strokeStyle = '#FFFF66'
                } else {
                    this.ctx.strokeStyle = '#0000CD'
                }
                this.ctx.lineWidth = 5;
                
                this.ctx.beginPath(); 
                this.ctx.setLineDash([10, 15]);

                this.ctx.moveTo(this.encounters[i][q].x + this.node_center_width, this.encounters[i][q].y + this.node_center_height);
                // End point (180,47)
                this.ctx.lineTo(this.encounters[i][q].linked[z].x + this.node_center_width, this.encounters[i][q].linked[z].y + this.node_center_height);
                // Make the line visible
                this.ctx.stroke();
                this.ctx.restore();
            }
        }
    }
    
}*/

TravelScene2.prototype.connectPaths = function () {
    //do this for all rows 
    for (let i = 1; i < this.encounters.length; i++) {
        var prevRow = this.encounters[i - 1]
        
        var currentRow = this.encounters[i];
        //for each node in the row
        for (let q = 0; q < currentRow.length; q++) {
            var closestDist = 1000;
            var prevNode;
            for (let z = 0; z < prevRow.length; z++) {
                var newNum = this.getDistBetweenNodes(prevRow[z], currentRow[q])
                if (newNum < closestDist) {
                    closestDist = newNum;
                    prevNode = prevRow[z];
                }
            }
            //currentRow[q].linked.push(prevNode);
            prevNode.linked.push(currentRow[q]);
        }

        var unlinkedNodes = this.getAllNonLinked(prevRow);


        for(let t = 0; t < unlinkedNodes.length; t++) {
            var closestDist2 = 1000;
            var theNode;
            for (let v = 0; v < currentRow.length; v++) {
                var newNum1 = this.getDistBetweenNodes(unlinkedNodes[t],currentRow[v])
                if (newNum1 < closestDist2) {
                    closestDist2 = newNum1;
                    theNode = currentRow[v];
                }
            }
            unlinkedNodes[t].linked.push(theNode);
        }
    }

}

TravelScene2.prototype.draw = function () {

    this.drawLinks();    
    this.myScrollBar.draw();
    for(let i = 0; i < this.encounters.length; i++) {
        for (let j = 0; j < this.encounters[i].length; j++) {
            this.encounters[i][j].draw();
        }
    }
};

TravelScene2.prototype.update = function () {    
    this.myScrollBar.update(this.allEncounters);
    //this.myScrollBar.update(this.allEncounters); 
    for (let i = 0; i < this.encounters.length; i++) {
        for (let j = 0; j < this.encounters[i].length; j++) {
            this.encounters[i][j].update();
        }
    }
};
