// create an array of image names that correspond to the image tags
var imageTags = ["image1", "image2", "image3", "image4","image5", "image6", "image7", "image8", "image9", "image10" ];

// Top/Blank Image- don't memory games usually have some sort of design on them though? 
var blankImagePath = "images/gofish.jpg";

//Array for the matching images
var actualImages = new Array();


function printBlanks()
{
   // call our random image creation function
    createRandomImageArray();
    //for loop
    for(var i = 0; i < imageTags.length; i++)
    {

        document.getElementById(imageTags[i]).src= blankImagePath;
    }
       
}

function createRandomImageArray()
{
    
    var actualImagePath = ["images/dog.jpg","images/tiger.jpg","images/Bird.png","images/raccoon.jpg","images/rabbit.jpg"];
    // create another array to make sure the images only get added twice
    var count = [0,0];
    // create a while statement to check to see if our actual image array is full
    while(actualImages.length < 4)
    {
        // get a random number between 0 and the number total number of images that we can choose from
        var randomNumber = Math.floor(Math.random() * actualImagePath.length)
          // create an if statement that says if the total number added is less than 2, then
        // add the image to the actual image array
        if(count[randomNumber] < 2)
        {
            actualImages.push(actualImagePath[randomNumber]);
            // then add one to the array that makes sure only two images can be added
            count[randomNumber] = count[randomNumber] + 1;
        }
    }
    
        
}



function flipImage(number)
{
    document.getElementById(imageTags[number]).src= actualImages[number];
        
        
    
}