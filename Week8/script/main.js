var Alice1 = "#Alice";
var Alice = new Array();

class AliceInfo{
    constructor(selector, imagePath)
    {
        this.selector = selector;
        this.imagePath = imagePath;
    }

    get theSelector(){
        return this.selector;
    }

    get theImagePath(){
        return this.imagePath;
    }

    toString()
    {
        return this.selector + ":" + this.imagePath; 
    }
}

function initializeArray()
{

    var Alice = new AliceInfo("#Alice", "./images/Alice-8.png");
    allAlice.push(Alice);

}



$(document).ready(function(){
   $("button").click(function(){
    $("#Alice").fadeIn();
   })
    
});




