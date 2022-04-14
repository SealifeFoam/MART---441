var config = {
    type: Phaser.AUTO, 
    width:800,
    height:600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {y:300 },
            debug: false
        }
    },
    scene: {
        preload:preload,
        create: create,
        update: update
    }
};

//Always add a varible for your pieces
var player;
var platforms; //have to declare inorder to get platforms
var cursors; //have to declare inorder to press keys 
var stars;
var bombs;//opponents/obstaciles 
var score = 0;
var scoreText;

var game = new Phaser.Game(config);

function preload()//will load all assets on the page
{
    this.load.image('sky', './assets/sky.png');
    this.load.image('ground', './assets/platform.png');
    this.load.image('star', './assets/star.png');
    this.load.image('bomb', './assets/bomb.png');
    this.load.spritesheet('dude', './assets/dude.png', { frameWidth: 32, frameHeight: 48 });
}

function create()//will set up the page 
{
 this.add.image(400, 300, 'sky'); //this is for the sky

 platforms = this.physics.add.staticGroup(); //this one is like a class/array - Whatever happens to one platform happens to all the platforms //35-41 are all for the platforms

 platforms.create(400, 568, 'ground').setScale(2).refreshBody();

 platforms.create(600, 400, 'ground');
 platforms.create(50, 250, 'ground');
 platforms.create(750, 220, 'ground');

 //Player and settings
 player = this.physics.add.sprite(100, 450, 'dude'); //(positionx, positiony, 'sheet')

 player.setBounce(0.2);
 player.setCollideWorldBounds(true);

 this.anims.create({
     key: 'left', //calls frame number when key is pressed 
     frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
     frameRate: 10, 
     repeat: -1
 });

 this.anims.create({
     key: 'turn',
     frames: [ { key: 'dude', frame: 4 } ],
     frameRate: 20
 });

 this.anims.create({
     key: 'right',
     frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
     frameRate: 10,
     repeat: -1
 });

cursors = this.input.keyboard.createCursorKeys();//creates base for update

stars = this.physics.add.group({
key: 'star',
repeat: 11, 
setXY: {x:12, y:0, stepX: 70}
});

stars.children.iterate(function(child){
   //gives each star a different bounce
    child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
});

bombs = this.physics.add.group(); //Bomb group


scoreText = this.add.text(16, 16, 'score: 0', {fontSize: '32px', fill: '#000'})

 this.physics.add.collider(player, platforms);//keep from falling through the platforms
 this.physics.add.collider(stars, platforms);
 this.physics.add.collider(bombs, platforms);

 this.physics.add.overlap(player, stars, collectStar, null, this);
 this.physics.add.collider(player, bombs, hitBomb, null, this);
}

function update()//will get call on repeatedly in the game
{
    if (gameOver)//for the game over sequence 
    {
        return;
    }


    if (cursors.left.isDown) //key commands 79-101 
    {
        player.setVelocityX(-160);

        player.anims.play('left', true);
    }
    else if (cursors.right.isDown)
    {
        player.setVelocityX(160);

        player.anims.play('right', true);
    }
    else
    {
        player.setVelocityX(0);

        player.anims.play('turn');
    }

    if (cursors.up.isDown && player.body.touching.down)
    {
        player.setVelocityY(-330);
    }


}

function collectStar (player, star) //can't move with stars without this
    {
        star.disableBody(true, true);

        score += 10; //Score counter
        scoreText.setText('Score: ' + score);

        if (stars.countActive(true) === 0)
        {
            //refreshes stars to collect
            stars.children.iterate(function (child) {
    
                child.enableBody(true, child.x, 0, true, true);
    
            });
    
            var x = (player.x < 400) ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400);
    
            var bomb = bombs.create(x, 16, 'bomb');
            bomb.setBounce(1);
            bomb.setCollideWorldBounds(true);
            bomb.setVelocity(Phaser.Math.Between(-200, 200), 20);
            bomb.allowGravity = false;
    
        }
    }


    function hitBomb (player, bomb)
{
    this.physics.pause();

    player.setTint(0xff0000);

    player.anims.play('turn');

    gameOver = true;
}