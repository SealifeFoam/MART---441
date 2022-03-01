// create an array of image names that correspond to the image tags
var imageTags = ["image1", "image2", "image3", "image4","image5", "image6", "image7", "image8", "image9", "image10" ];

// Top/Blank Image- don't memory games usually have some sort of design on them though? 
var blankImagePath = "Images/gofish.jpg";

var firstNumber = -1;
var secondNumber = -1;
var score = 0;
var allFound = 0;

// JSON declaration
var player = {"firstname":"", "lastname":"", "age":0, "score":0};

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
    
    var actualImagePath = ["Images/dog.jpg","Images/tiger.jpg","Images/bird.jpg","Images/raccoon.jpg","Images/rabbit.jpg" ];
    var count = [0,0,0,0,0];
   
    while(actualImages.length < 10)
    {
        
        var randomNumber = Math.floor(Math.random() * actualImagePath.length)
          
        if(count[randomNumber] < 2)
        {
            actualImages.push(actualImagePath[randomNumber]);
            count[randomNumber] = count[randomNumber] + 1;
        }
    }
    
        
}





    function flipImage(number)
    {
        document.getElementById(imageTags[number]).src= actualImages[number]
        // second image appear
        if(firstNumber >= 0)
        {
            secondNumber = number;
            document.getElementById(imageTags[number]).src = actualImages[secondNumber];
            
        }
        else if(firstNumber < 0) // first image appear
        {
            firstNumber = number;
            document.getElementById(imageTags[firstNumber]).src= actualImages[firstNumber];
        
        }
    
        // checking for if the images do not match
        if(actualImages[secondNumber] != actualImages[firstNumber] && firstNumber >= 0 && secondNumber >= 0)
        {
            score++;
            setTimeout(imagesDisappear, 1000); 
        }
        // checking to see if the images do match
        else if(actualImages[secondNumber] == actualImages[firstNumber] && firstNumber >= 0 && secondNumber >= 0)
        {
            score++;
            allFound++;
            
            firstNumber = -1;
            secondNumber = -1;
            if(allFound == actualImages.length/2)
            {  
                player.score = score;
                localStorage.setItem("playerInfo", JSON.stringify(player));
                window.location = "EndPage.html";
            }
        }
    }
    
    function imagesDisappear()
    {
    
        console.log(firstNumber);
        document.getElementById(imageTags[firstNumber]).src = blankImagePath;
        document.getElementById(imageTags[secondNumber]).src = blankImagePath;
        firstNumber = -1;
        secondNumber = -1;
    }
    
    // Note : add to the JSON from the textboxes
    function addToPlayer()
    {
        var firstName = document.getElementById("txtFirstName").value;
        var lastName = document.getElementById("txtLastName").value;
        var age = document.getElementById("txtAge").value;
       
        player.firstname = firstName;
        player.lastname = lastName;
        player.age = age;
        localStorage.setItem("playerInfo", JSON.stringify(player));
        window.location = "Index.html";
    }
    
    //  information for JSON
    function playerInfo()
    {
        var playerInformation = localStorage.getItem("playerInfo");
        player = JSON.parse(playerInformation);
        var str = "Name: " + player.firstname + " " + player.lastname + "<br>" +
        "Age: " + player.age + "<br>" +
        "Score: " + player.score;
        if(document.getElementById("endInformation") != null)
        {
            document.getElementById("endInformation").innerHTML = str;
        }
        
       
    }
        
        
    
