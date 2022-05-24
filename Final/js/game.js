let game;
let gameOptions = {

    // number of columns
    columns: 5,

    // number of rows, must be high enough to allow object pooling
    rows: 20,

    // tile speed in pixels per second
    tileSpeed: 200
}
window.onload = function() {
    let gameConfig = {
        type: Phaser.AUTO,
        scale: {
            mode: Phaser.Scale.FIT,
            autoCenter: Phaser.Scale.CENTER_BOTH,
            parent: "thegame",
            width: 750,
            height: 1334
        },
        physics: {
            default: "arcade"
        },
       scene: playGame
    }
    game = new Phaser.Game(gameConfig);
}
class playGame extends Phaser.Scene{
    constructor(){
        super("PlayGame");
    }
    preload(){
        this.load.spritesheet("tiles", "./Assets/tiles.png", {
            frameWidth: 100,
            frameHeight: 100
        });
    }
    create(){

        // physics group which manages all tiles in game
        this.tileGroup = this.physics.add.group()

        // size width and columns
        this.tileSize = game.config.width / gameOptions.columns;

        //adds tiles to the game
        for(let i = 0; i < gameOptions.rows; i++){

            // KEEP integers between 0 and gameOptions.columns - 1: [0, 1, 2, ..., gameOptions.columns - 1]
            let values = Phaser.Utils.Array.NumberArray(0, gameOptions.columns - 1);

            // Shuffles boxs
            Phaser.Utils.Array.Shuffle(values);

            //NEED 
            if(i == 0){
                var middleColor = values[Math.floor(gameOptions.columns / 2)];
            }

            //Places bloxes in rows
            for(let j = 0; j < gameOptions.columns; j++){

                // add tiles
                let tile = this.tileGroup.create(j * this.tileSize, i * this.tileSize + game.config.height / 4 * 3, "tiles", values[j]);

                
                this.adjustTile(tile);
            }
        }

        // let's build once again an array with integers between 0 and gameOptions.columns - 1
        let values = Phaser.Utils.Array.NumberArray(0, gameOptions.columns - 1);
        values.splice(middleColor, 1);

        
        this.player = this.tileGroup.create(this.tileSize * Math.floor(gameOptions.columns / 2), game.config.height / 4 * 3 - this.tileSize, "tiles", Phaser.Utils.Array.GetRandom(values));

        // adjust player origin and display size
        this.adjustTile(this.player);

        // move entire tile group up by gameOptions.tileSpeed pixels / second
        this.tileGroup.setVelocityY(-gameOptions.tileSpeed);

        // can the player move? - yes 
        this.canMove = true;

        // did we match any tile? - yes, object went down
        this.matched = false;

        // wait for player input
        this.input.on("pointerdown", this.moveTile, this);
    }

    // method to set tile origin and display size
    adjustTile(sprite){

        // set origin at the top left corner
        sprite.setOrigin(0);

        // set display width and height to "tileSize" pixels
        sprite.displayWidth = this.tileSize;
        sprite.displayHeight = this.tileSize;
    }

    // method to move player tile
    moveTile(pointer){

        // if we can move...
        if(this.canMove){

            // determine column according to input coordinate and tile size
            let column = Math.floor(pointer.x / this.tileSize);

            // get the ditance from current player tile and destination
            let distance = Math.floor(Math.abs(column * this.tileSize - this.player.x) / this.tileSize);

            // did we actually move?
            if(distance > 0){

                // we can't move anymore
                this.canMove = false;

                // tween the player to destination tile
                this.tweens.add({
                    targets: [this.player],
                    x: column * this.tileSize,
                    duration: distance * 30,
                    callbackScope: this,
                    onComplete: function(){

                        // at the end of the tween, check for tile match
                        this.checkMatch();
                    }
                });
            }
        }
    }

    //check tile matches
    checkMatch(){

        
        let tileBelow = this.physics.overlapRect(this.player.x + this.tileSize / 2, this.player.y + this.tileSize * 1.5, 1, 1);

      
        if(tileBelow[0].gameObject.frame.name == this.player.frame.name){

           
            this.matched = true;

           
            let rowBelow = this.physics.overlapRect(0, this.player.y + this.tileSize * 1.5, game.config.width, 1);

            
            this.tweens.add({
                targets: [this.player],
                y: tileBelow[0].gameObject.y,
                duration: 100,
                callbackScope: this,
                onUpdate: function(tween, target){

                   
                    this.player.y = Math.min(this.player.y, tileBelow[0].gameObject.y)
                },

               
                onComplete: function(){

                   
                    let values = Phaser.Utils.Array.NumberArray(0, gameOptions.columns - 1);

                    
                    Phaser.Utils.Array.Shuffle(values);

                    // place all tiles below the lowest row
                    for(let i = 0; i < gameOptions.columns; i++){
                        rowBelow[i].gameObject.setFrame(values[i]);
                        rowBelow[i].gameObject.y += this.tileSize * gameOptions.rows;
                    }

                    // check for matches again, there could be a combo
                    this.checkMatch();
                }
            });
        }

        // what to do when player moved but there isn't any match?
        else{

            // we can move again
            this.canMove = true;

            // is there a previous match? Did we come here from a previous match?
            if(this.matched){

                // no more matches
                this.matched = false;

                // get the tile below the player
                let tileBelow = this.physics.overlapRect(this.player.x + this.tileSize / 2, this.player.y + this.tileSize * 1.5, 1, 1);

                // the good old array with all integers from zero to gameOptions.columns - 1
                let values = Phaser.Utils.Array.NumberArray(0, gameOptions.columns - 1);

                // remove the item at "frame" value of tile below the player pbecause we don't want it to be randomly selected
                values.splice(tileBelow[0].gameObject.frame.name, 1);

                // change player frame
                this.player.setFrame(Phaser.Utils.Array.GetRandom(values));
            }
        }
    }

    // method to be executed at each frame
    update(){

        // if the player touches the top of the screen...
        if(this.player.y < 0){

            // gmae over man, restart the game - how do I put in a game over screen? - side note how to would I place counter to keep track of score? 
            this.scene.start("PlayGame");
        }
    }
}
