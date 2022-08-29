var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var player;
var stars;
var starsB;
var bombs;
var platforms;
var cursors;
var spaceBar;
var score = 0;
var gameOver = false;
var scoreText;



var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('sky', 'assets/sky.png');
    this.load.image('ground', 'assets/platform.png');
    this.load.image('star', 'assets/star.png');
    this.load.image('starb', 'assets/StarB.png');
    this.load.image('bomb', 'assets/bomb.png');
    this.load.spritesheet('dude', 'assets/dude2.png', { frameWidth: 32, frameHeight: 48 });
    
}

function create ()
{
    // BG
    this.add.image(400, 300, 'sky');

    //  The platforms group
    platforms = this.physics.add.staticGroup();

    // the ground.
    platforms.create(400, 568, 'ground').setScale(2).refreshBody();

    //  Platforms
    platforms.create(700, 400, 'ground');//lowest
    platforms.create(150, 450, 'ground');
    platforms.create(50, 290, 'ground');
    platforms.create(750, 220, 'ground');
    platforms.create(250,150, 'ground'); //highest

    // The player and its settings
    player = this.physics.add.sprite(100, 450, 'dude');

    //  Player physics properties- gives slight bounce.
    player.setBounce(0.2);
    player.setCollideWorldBounds(true);
    


    //  Our player sprite animation
    this.anims.create({
        key: 'left',
        frames: this.anims.generateFrameNumbers('Kirby', { start: 3, end: 12 }),
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

    //  Input Events
    cursors = this.input.keyboard.createCursorKeys();
    spaceBar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE) ;
    

    //  Some stars to collect
    stars = this.physics.add.group({
        gravity: { y: 320 },
        key: 'star', 
        repeat: 11,
        setXY: { x: 12, y: 0, stepX: 70 }
    });
    
    starsB = this.physics.add.group({
        gravity: { y: 120 },
        key: 'starb', 
        repeat: 2,
        setXY: { x: 330, y: 220, stepX: 95 }
    });


    stars.children.iterate(function (child) {

        //  Gives each star a different bounce
        child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));

    });

    starsB.children.iterate(function(child){
        child.setBounceY(Phaser.Math.FloatBetween(0.3, 0.55));
    });


    bombs = this.physics.add.group();

    //  The score
    scoreText = this.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000' });
    


    //  Collide the player and the stars with the platforms
    this.physics.add.collider(player, platforms);
    this.physics.add.collider(stars, platforms);
    this.physics.add.collider(starsB, platforms);
    this.physics.add.collider(bombs, platforms);

    //  Checks to see if the player overlaps with any of the stars if he does call the collectStar function
    this.physics.add.overlap(player, stars, collectStar, null, this);
    this.physics.add.overlap(player, starsB, collectStar2, null, this);

    this.physics.add.collider(player, bombs, hitBomb, null, this);
}

function update ()
{
    if (gameOver)
    {
        return;
    }

    if (cursors.left.isDown) //left
    {
        player.setVelocityX(-160);

        player.anims.play('left', true);
    }
    else if (cursors.right.isDown)//right
    {
        player.setVelocityX(160);

        player.anims.play('right', true);
    }
    else
    {
        player.setVelocityX(0);

        player.anims.play('turn');
    }

    if (spaceBar.isDown && player.body.touching.down)
    {
        
        player.setVelocityY(-330);
        //player.anims.play('Up', true); //only changed facing direction
        
    }
}

function collectStar (player, star)
{
    star.disableBody(true, true);

    
    score += 10;
    scoreText.setText('Score: ' + score);

    if (stars.countActive(true) === 0)
    {
        //  A new batch of stars to collect
        stars.children.iterate(function (child) {

            child.enableBody(true, child.x, 0, true, true);

        });

        var x = (player.x < 300) ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400);

        var bomb = bombs.create(x, 8, 'bomb');
        bomb.setBounce(1);
        bomb.setCollideWorldBounds(true);
        bomb.setVelocity(Phaser.Math.Between(-200, 200), 20);
        bomb.allowGravity = false;

    }
}

function collectStar2 (player, star)
{
    star.disableBody(true, true);

    
    score += 5;
    scoreText.setText('Score: ' + score);

    if (stars.countActive(true) === 0)
    {
        //  A new batch of stars to collect
        stars.children.iterate(function (child) {

            child.enableBody(true, child.x, 0, true, true);

        });
}}


function hitBomb (player, bomb)
{
    this.physics.pause();

    player.setTint(0x8c8c8c);

    player.anims.play('turn');

    gameOver = true;
}