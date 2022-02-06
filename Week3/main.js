function storyFunction(choice) {
    var answer1 = document.getElementById("choice1").innerHTML;
    var answer2 = document.getElementById("choice2").innerHTML;
    if (choice == 1 && answer1 == "Left") //*1                                                  //Left takes you to Open Cavern
    {   document.getElementById("story").innerHTML = "You walk into a large cavern. Its dark but you notice light creeps from under a pile of rocks";
        document.getElementById("choice1").innerHTML = "Use Pick Axe"; //Go to 3
        document.getElementById("choice2").innerHTML = "Explore around Cavern"; //Go to 4
    } else if (choice == 2 && answer2 == "Right") //2                                           //Right take you to DeadEnd
    {   document.getElementById("story").innerHTML = "You hit a Dead End when you got to the end of what looks like a cave-in. You can't go";
        document.getElementById("choice1").innerHTML = "Double Back and Turn Left"; //Go to 5
        document.getElementById("choice2").innerHTML = "Explore abit"; // Go to 6
    } else if (choice == 1 && answer1 == "Use Pick Axe")//3                                 //You swing axe
     { document.getElementById("story").innerHTML = "Swung your axe hard into the large pile, releasing a swarm of fireflies. Their light luminates the area.";
        document.getElementById("choice1").innerHTML = "Explore Cavern"; // Go to a 
        document.getElementById("choice2").innerHTML = "Admire the Fireflies"; // Go to b 
    } else if (choice == 2 && answer2 == "Explore around Cavern") {//4                      //Explore Cavern 
        document.getElementById("story").innerHTML = "You walk along the walls to find tunnels and find two tunnels";
        document.getElementById("choice1").innerHTML = "Tunnel A"; //Go to c
        document.getElementById("choice2").innerHTML = "Tunnel B"; //Go to d 
    } else if (choice == 1 && answer1 == "Double Back and Turn Left") {//5
        document.getElementById("story").innerHTML = "You go back to the fork";
        document.getElementById("choice1").innerHTML = "Left"; //Go to 1
        document.getElementById("choice2").innerHTML = "Right"; //Go to 2
    } else if (choice == 2 && answer2 == "Explore abit") {//6
        document.getElementById("story").innerHTML = "You obverse the collapsed tunnel had once led to the southern caves and mark it on your map. Then get ready to go back.";
        document.getElementById("choice1").innerHTML = "Double Back and Turn Left"; //Go to g
        document.getElementById("choice2").innerHTML = "No quit"; // Go to j 
    }
    //Other Choices (a-j)
    else if (choice == 1 && answer1 == "Explore Cavern") {//a
        document.getElementById("story").innerHTML = "In the lit up cavern you notice two tunnels";
        document.getElementById("choice1").innerHTML = "Tunnel A"; //Go to c 
        document.getElementById("choice2").innerHTML = "Tunnel B"; //Go to d
    } else if (choice == 2 && answer2 == "Admire the Fireflies") {//b               
        document.getElementById("story").innerHTML = "You find the light of the fireflies reflect on cavern walls";
        document.getElementById("choice1").innerHTML = "Explore Cavern"; //Go to a
        document.getElementById("choice2").innerHTML = "Watch Fireflies More"; //Go to h
    } else if (choice == 1 && answer1 == "Tunnel A") {//c
        document.getElementById("story").innerHTML = "You walk through the tunnel into a glimmering room of gems";
        document.getElementById("choice1").innerHTML = "Collect Gems in bag"; //Go to e 
        document.getElementById("choice2").innerHTML = "Turn back to Cavern"; //Go to g 
    } else if (choice == 2 && answer2 == "Tunnel B") {//d
        document.getElementById("story").innerHTML = "You walk down Tunnel B into an open field, noticing the sun starting to set. You grab tight on you bag and start to head in the direction of home." + "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Yes restart"; //Go to i
        document.getElementById("choice2").innerHTML = "No quit"; //Go to j
    } else if (choice == 1 && answer1 == "Collect Gems in bag") {//e
        document.getElementById("story").innerHTML = "You place an assortment of jewels into your bag." ;
        document.getElementById("choice2").innerHTML = "Turn back to Cavern"; //Go to i
        document.getElementById("choice1").innerHTML = "Admire the artwork"; //Go to j
    }  else if (choice == 2 && answer2 == "Turn back to Cavern") {//g
        document.getElementById("story").innerHTML = "You returned to the large Cavern, which tunnel do you go down?";
        document.getElementById("choice1").innerHTML = "Tunnel A"; //Go to c
        document.getElementById("choice2").innerHTML = "Tunnel B"; //Go to d
    } else if (choice == 2 && answer2 == "Watch Fireflies More") {//h
        document.getElementById("story").innerHTML = "You watch the glittering sparkles between the cavern and the fireflies";
        document.getElementById("choice1").innerHTML = "Explore Cavern"; // Go to a 
        document.getElementById("choice2").innerHTML ="Continue watching fireflies"; //Go to k
    }  else if (choice == 2 && answer2 == "Continue watching fireflies") {//k
        document.getElementById("story").innerHTML = "'Hey I can't watch them all day! I have work to do!' you holler at the user";
        document.getElementById("choice1").innerHTML = "Explore Cavern";
        document.getElementById("choice2").innerHTML ="CONTINUE watching fireflies";
    }



    
    else if (choice == 1 && answer1 == "Yes restart")//Restart - i
     {
        document.getElementById("story").innerHTML = "You are a Gnome (sorry). You're exploring under the Eastern side of the mountain looking for materials and come across a fork. Which way do you go?";
        document.getElementById("choice1").innerHTML = "Left";
        document.getElementById("choice2").innerHTML = "Right";
    }
    
    else if (choice == 2 && answer2 == "No quit") //Quit - j 
     {
        document.getElementById("story").innerHTML = "Youre Better Off Exploring Tommorrow and Go Home";

    }


}


