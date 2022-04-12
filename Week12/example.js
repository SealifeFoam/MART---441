//Class for the Square(s) - use to apply to all squares
class Square
{
    constructor(x,y,w,h)
    {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }

    get theX()
    {
        return this.x;
    }

    get theY()
    {
        return this.y;
    }

    get theW()
    {
        return this.w;
    }

    get theH()
    {
        return this.h;
    }
}

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d"); //canvas tags - ALWAYS NEED BOTH!
var x = 50;  //square width
var y = 50; //square height
ctx.fillStyle = "#f5a742"; //fill color
let mySquare =
{
    "x":10,
    "y":10,
    "w":20,
    "h":20,
};

drawSquare();
setInterval(update, 1000); //gets called by drawSquare over and over again

function update() //sets up square 
{   
    drawSquare();
}

function drawSquare() //draws square
{
    var myXs = [];
for (let i = 1; i < 11; i++) {
    myXs.push(50 * i);
}
        for(let i = 0; i < myXs.length; i++)
    ctx.fillRect(myXs[i], y, 20, 20); //(width, height, positionx, positiony) _ with an array you would subitute a variable with the array
    
}


//Use Jquery to create movement 
$(document).ready(function(){
    $(this).keypress(function(event){
        getKey(event);
    });
});

function getKey(event)
{
    var char = event.which || event.keyCode;
    var actualLetter = String.fromCharCode(char);
    
    if (actualLetter == "d")
    {
        x++;
    }
    else (actualLetter == "a")
    {
        x++;
    }
}

