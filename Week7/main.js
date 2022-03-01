console.log("infomation, Images, and so on, are from https://www.outofoffice.com/blog/top-five-safest-lgbt-travel-destinations/");


//empty array to add to 
var myViewFinderArray = new Array();

//main ViewFinder class 
class ViewFinder
{
    //Note constructor needs one title
    constructor(title, description, author, imageyear, Image)
    {
        this.title = title;
        this.description = description;
        this.author = author;
        this.imageyear = imageyear;
        this.Image = Image;
    }

     // this just returns the title concatenated with the string "Title"
    // keep in mind only one return statement can exist in a function
     toString()
     {
         return "Title:" + this.title; 
     } 
     get theTitle()
     {
         return this.title;
     }


     toString2()
     {
       return "Description:" + this.description;  
     }
     get theDescription()
     {
         return this.description;
     }



    toString3()
    {
        return "Author:" + this.author;
    }   
    get theAuthor()
    {
        return this.author;
    }

    
    toString4()
    {
        return "Date:" + this.imageyear;
    }
    get theImageyear()
    {
        return this.imageyear;
    }


    toString5()
    {
        return "image" + this.Image;
    }
    get theImage()
    {
        return this.Image;
    }

}

//function is called in the body of the HTML page so that the objects are created and added to the array myViewFinderArray

function initializeArray()
{
   //first object in class ViewFinder - find images 
   var myViewFinder = new ViewFinder("Sitges, Spain", "This is one of Europes top LGBT travel destinations and its not hard to see why! Around an hour outside of Barcelona, Sitges is a beautiful destination full of pristine beaches, cobbled streets lined with quaint cafes and bars, and a large gay community.", "","", "url(Images/Spain)")
   //Second object in class ViewFinder - Make sure to add number to remaining 3 objects
   var myViewFinder1 = new ViewFinder("Vancouver, Canada", " Vancouver is a great cosmopolitan city set amongst a backdrop of jagged, snowy mountains and has a bustling LGBT scene with everything from gay shops, hotels, bars, clubs and restaurants to choose from.", "", "")
    //Third object in class ViewFinder
    var myViewFinder2 = new ViewFinder("Mykonos, Greece", "Mykonos is known as the LGBT hub of Greece and is perfect for the traveller who longs for stunning landscapes, beautiful beaches, traditional little villages and a good gay scene.", "", "" )
    //Fourth object in class ViewFinder
    var myViewFinder3 = new ViewFinder("Palm Springs, USA", "Palm Springs is home to the largest collection of men and women only accommodations in the world and is home to the biggest lesbian party in the world, Dinah. ", "",)
    //Fifth object in class ViewFinder
    var myViewFinder4 = new ViewFinder("French Polynesia", "In French Polynesia, no laws against same-sex sexual activity have ever existed in the collectivity and LGBT travelers are afforded all the same rights as heterosexual people.", "", )
   
    //add objects to array 
    myViewFinderArray.push(myViewFinder); 
    myViewFinderArray.push(myViewFinder1);
    myViewFinderArray.push(myViewFinder2);
    myViewFinderArray.push(myViewFinder3);
    myViewFinderArray.push(myViewFinder4);



}

// this function gets an object from the array and puts it into the element with the id title 
function accessInformation()
{
    // provides a random number
    var randomNumber = Math.floor(Math.random() * myViewFinderArray.length);
    // get a random object from the array
    // calling the toString, but we could have gotten the property theTitle as well
    document.getElementById("image").innerHTML = myViewFinderArray[randomNumber].toString5();
    document.getElementById("title").innerHTML = myViewFinderArray[randomNumber].toString();
    document.getElementById("description").innerHTML = myViewFinderArray[randomNumber].toString2();
    document.getElementById("author").innerHTML = myViewFinderArray[randomNumber].toString3();
    document.getElementById("date").innerHTML = myViewFinderArray[randomNumber].toString4();


}