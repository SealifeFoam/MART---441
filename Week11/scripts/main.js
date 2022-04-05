var canvas = document.getElementById("myCanvas"); //always have lines one and two for drawing on canvas
var ctx = canvas.getContext("2d");
var x = 50;
var y = 50;
var x2 = 300;
var y2 = 100;
var square1;
var square2;
var mysound;


createSquares();
drawSquare();
//mysound = new sound("./Audio/DeathCollion.wav");//Sound when collided //(4/1)- if uncommented the game will freeze.
setInterval(moveGreenSquare, 700); //Second Square movement


function createSquares() {  // function contains squares (postion-x, position-y, height, width, color)
    square1 = new Square(x, y, 20, 20, "blue");
    square2 = new Square(x2, y2, 50, 50, "red");

     
}


// function to randomly move the enemy square appear around the canvas
function moveGreenSquare() {

    square2.setX(Math.floor(Math.random() * canvas.width));
    square2.setY(Math.floor(Math.random() * canvas.height));
    drawSquare();
}

// Draws squares at starting locations 
function drawSquare() {
    ctx.clearRect(0, 0, 800, 600);
    ctx.fillStyle = square1.theColor;
    ctx.fillRect(square1.theX, square1.theY, square1.theWidth, square1.theHeight);
    ctx.fillStyle = square2.theColor;
    ctx.fillRect(square2.theX, square2.theY, square2.theWidth, square2.theHeight);

}


$(document).ready(function () {
    $(this).keypress(function (event) {
        getKey(event); //Sets up getkey events w/out this the collison won't work at all 
    });
});


function getKey(event) {

    // "only checking collision when a key is pressed"- promotes cheating by prompting the player to not play at all, how to fix
    var didCollide = hasCollided(square1, square2);
    // when a collision happens - also how to produce 'bounce back' effect and 'game over screen after hits? 
    if (didCollide) {
        // changes the background color
        canvas.style.backgroundColor = "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ")";
        // changes size of the squares, then after fourth size change say game over
        square1.setWidth(square1.theWidth - 1);
        mysound.play(); //is this gunking up my code? 
        square1.setHeight(square1.theHeight - 1);
        mysound.play();
        square2.setWidth(square2.theWidth + 1);
        mysound.play();
        square2.setHeight(square2.theHeight + 1);
    }  

    // Key controls
    var char = event.which || event.keyCode;
    var actualLetter = String.fromCharCode(char);
    if (actualLetter == "w" && square1.theY) {
        moveUp();
    } else if (actualLetter == "s" && square1.theY <380) {
        moveDown();
    } else if (actualLetter == "d" && square1.theX <480) {
        moveRight();
    } else if (actualLetter == "a" && square1.theX) {
        moveLeft();
    }
    
    drawSquare();
}

// up
function moveUp() {
    square1.setY(square1.theY - 10);
}

// down
function moveDown() {
    square1.setY(square1.theY + 10);
}

// left - think grid map, to move left you have to go negitive
function moveLeft() {
    square1.setX(square1.theX - 10);
}

// right - same concept as left but you add positive numbers to move right
function moveRight() {
    square1.setX(square1.theX + 10);
}

// collision function that checks for corners overlapping - except for when its standing still
function hasCollided(object1, object2) {
    return !(
        ((object1.y + object1.height) < (object2.y)) ||
        (object1.y > (object2.y + object2.height)) ||
        ((object1.x + object1.width) < object2.x) ||
        (object1.x > (object2.x + object2.width))
    );
}



