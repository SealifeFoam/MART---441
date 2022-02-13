console.log("Are you a coffee or tea person?");
 
// Starters
function getChoice1()
        {
            var myChoice = document.getElementById("choice").value;
            var myQuestion = document.getElementById("question");
            if(myChoice === "T")
            {
                document.getElementById("choice").style.display="none";
                document.getElementById("btnSubmit").style.display="none";
                
                document.getElementById("choice2").style.display="block";
                document.getElementById("btnSubmit2").style.display="block";
                
                document.getElementById("mainImage").src = "./Images/Open.gif"
                myQuestion.innerHTML = "The Birista nods 'we only have two teas left, would you like our Passon Tea (A)  or Earl Grey (B) ?";
            }
            else if(myChoice === "C")
            {
                document.getElementById("choice").style.display="none";
                document.getElementById("btnSubmit").style.display="none";
                
                document.getElementById("choice3").style.display="block";
                document.getElementById("btnSubmit3").style.display="block";
                document.getElementById("mainImage").src = "./Images/Open"
                myQuestion.innerHTML = "Your project still isn't finished yet so you'll need the cafine. The Birista moves towards the esspresso makers and begins making you an americano. While she loads the machine with coffee beans she asks 'Would you like this hot or cold today?'";

            }
            else
            {
                myQuestion.innerHTML = "Invalid answer";
            }
        
        }
function getChoice2() //Choose Tea - Passion or Earl Grey?
        {
            var answer = document.getElementById("choice2").value;
            var myQuestion = document.getElementById("question");
            if(answer === "A") //Goes to 4
            {
                document.getElementById("choice2").style.display="none";
                document.getElementById("btnSubmit2").style.display="none";
                
                document.getElementById("choice4").style.display="block";
                document.getElementById("btnSubmit4").style.display="block";
                document.getElementById("mainImage").src = "./Images/TeaBag.png"
                myQuestion.innerHTML = " 'Alright Passion it is.' She head towards a shelf nearly bare with only two boxes. She looks up 'Before I start, will that be Hot or Cold?'  ";
            }
            else if(answer === "B") //Goes to 6
            {
                document.getElementById("choice2").style.display="none";
                document.getElementById("btnSubmit2").style.display="none";
                
                document.getElementById("choice6").style.display="block";
                document.getElementById("btnSubmit6").style.display="block";
                document.getElementById("mainImage").src = "./Images/TeaBag.png"
                myQuestion.innerHTML = " 'One Earl Grey it is.' She head towards a shelf nearly bare with only two boxes.  She looks up 'Would you be interested in upgrading to a London Fog by any chance? A London Fog drink is a delicious tea latte with hints of vanilla and lavender.'  ";
            }
        } 


//Upgrade
function getChoice6() //upgrade to Lodon Fog - Y or N? 
{
    var answer = document.getElementById("choice6").value;
    var myQuestion = document.getElementById("question");
    if(answer === "Yes") //Goes to 4
    {
        document.getElementById("choice6").style.display="none";
        document.getElementById("btnSubmit6").style.display="none";
        
        document.getElementById("choice16").style.display="block";
        document.getElementById("btnSubmit16").style.display="block";
        myQuestion.innerHTML = " You've never had a London Fog before so you accept. She forgets to ask if you would like it hot or cold but pipes up saying -'I almost forgot, what size would you like? We're out of smalls so i'll have to be either a Medium or Large' ";
    }
    else if(answer === "No") //Goes to 6
    {
        document.getElementById("choice6").style.display="none";
        document.getElementById("btnSubmit6").style.display="none";
        
        document.getElementById("choice18").style.display="block";
        document.getElementById("btnSubmit18").style.display="block";
        myQuestion.innerHTML = " 'Just the Earl Grey it is then.' She starts steaping the tea, the steam wisps out as you wait. She never asked if you would like it hot or cold but pipes ' I almost forgot, what size would you like? We're out of smalls so i'll have to be either a Medium or Large'  ";
    }
}


//Hot or Cold
function getChoice3() // Coffee - Hot or Cold? 
        {
            var answer = document.getElementById("choice3").value;
            var myQuestion = document.getElementById("question");
            if(answer === "Hot")
            {
                document.getElementById("choice3").style.display="none";
                document.getElementById("btnSubmit3").style.display="none";
                
                document.getElementById("choice5").style.display="block";
                document.getElementById("btnSubmit5").style.display="block";
                document.getElementById("mainImage").src = "./Images/Maker.gif";
                myQuestion.innerHTML = "Ok, I'll have it out in a sec-oh wait, I almost forgot, what size would you like? We're out of smalls so i'll have to be either a Medium or Large ";
            }
            else if(answer === "Cold")
            {
                document.getElementById("choice3").style.display="none";
                document.getElementById("btnSubmit3").style.display="none";
                
                document.getElementById("choice7").style.display="block";
                document.getElementById("btnSubmit7").style.display="block";
                document.getElementById("mainImage").src = "./Images/IceCoffee.gif";
                myQuestion.innerHTML = "Cool, I'll have it out in a sec-oh wait, I almost forgot, what size would you like? We're out of smalls so i'll have to be either a Medium or Large";
            }
        }

function getChoice4() //Hot or Cold Passion Tea
{
    var answer = document.getElementById("choice4").value;
    var myQuestion = document.getElementById("question");
    if(answer === "Hot")
    {
        document.getElementById("choice4").style.display="none";
        document.getElementById("btnSubmit4").style.display="none";
        
        document.getElementById("choice8").style.display="block";
        document.getElementById("btnSubmit8").style.display="block";
        myQuestion.innerHTML = "Ok, I'll have it out in a sec-oh wait, I almost forgot, what size would you like? We're out of smalls so i'll have to be either a Medium or Large ";
    }
    else if(answer === "Cold")
    {
        document.getElementById("choice4").style.display="none";
        document.getElementById("btnSubmit4").style.display="none";
        
        document.getElementById("choice10").style.display="block";
        document.getElementById("btnSubmit10").style.display="block";
        document.getElementById("mainImage").src = "./Images/IceCoffee.gif"
        myQuestion.innerHTML = "Cool, I'll have it out in a sec-oh wait, I almost forgot, what size would you like? We're out of smalls so i'll have to be either a Medium or Large";
    }
}



//Size Choices

function getChoice5() // M or L Hot Coffee?
{
    var answer = document.getElementById("choice5").value;
    var myQuestion = document.getElementById("question");
    if(answer === "Medium")
    {
        document.getElementById("choice5").style.display="none";
        document.getElementById("btnSubmit5").style.display="none";

        document.getElementById("choice9").style.display="block"; 
        document.getElementById("btnSubmit9").style.display="block";
        myQuestion.innerHTML = "She nods and begins to gride the your the coffee beans, turning them into a liquid gold. The birista meets you at the other end of the counter and gesters to the self serve milk and sugar. Because its only a medium you don't need to go over board with the sugar and cream. As you toss the last sugar wrapper into the nearby,  you notice the tip jar. Do you tip the birista?  "
    }
    else if (answer === "Large")
    {
        document.getElementById("choice5").style.display="none";
        document.getElementById("btnSubmit5").style.display="none";

        document.getElementById("choice11").style.display="block"; 
        document.getElementById("btnSubmit11").style.display="block";
        myQuestion.innerHTML = "She nods and begins to gride the your the coffee beans, turning them into a liquid Sanity. The birista meets you at the other end of the counter and gesters to the self serve milk and sugar. Because its only a Large you add a lot cream and sugar to balance out your extremely bitter order. As you toss the last sugar wrapper into the nearby,  you notice the tip jar. Do you tip the birista?";
    } 
}

function getChoice7()// M or L cold Coffee? - change 
{
    var answer = document.getElementById("choice7").value;
    var myQuestion = document.getElementById("question");
    if(answer === "Medium")
    {
        document.getElementById("choice7").style.display="none";
        document.getElementById("btnSubmit7").style.display="none";

        document.getElementById("theSugarLoop").style.display="block"; 
        document.getElementById("theSugarLoop").style.display="block";
        myQuestion.innerHTML = "She nods and begins to gride the your the coffee beans, turning them into a cool liquid gold. The birista meets you at the other end of the counter and gesters to the self serve milk and sugar. Because its only a medium you don't need to go over board with the sugar and cream. As you toss the last sugar wrapper into the nearby,  you notice the tip jar. Do you tip the birista?  "
    }
    else if (answer === "Large")
    {
        document.getElementById("choice7").style.display="none";
        document.getElementById("btnSubmit7").style.display="none";

        document.getElementById("choice11").style.display="block"; 
        document.getElementById("btnSubmit11").style.display="block";
        myQuestion.innerHTML = "She nods and begins to gride the your the coffee beans, turning them into a cold liquid Sanity. The birista meets you at the other end of the counter and gesters to the self serve milk and sugar. Go and Add the Sugar";

    }
}

function getChoice8()//M or L Hot Passon Tea
{
    var answer = document.getElementById("choice8").value;
    var myQuestion = document.getElementById("question");
    if(answer === "Medium")
    {
        document.getElementById("choice8").style.display="none";
        document.getElementById("btnSubmit8").style.display="none";
        
        document.getElementById("choice12").style.display="block";
        document.getElementById("btnSubmit12").style.display="block";
        myQuestion.innerHTML = "The ruby red liquid steams for the metal pitcher and into the stanard to-go cups. The taste as pleasing as the color, its warmness nearly puts you to sleep. You notice the tip jar. Do you tip the birista?";
    }
    else if(answer === "Large")
    {
        document.getElementById("choice8").style.display="none";
        document.getElementById("btnSubmit8").style.display="none";
        
        document.getElementById("choice12").style.display="block";
        document.getElementById("btnSubmit12").style.display="block";
        myQuestion.innerHTML = "The ruby red liquid steams for the metal pitcher and into the stanard to-go cups. The taste as pleasing as the color, its warmness nearly puts you to sleep. You notice the tip jar. Do you tip the birista?";
    }
}

function getChoice10() //M or L Cold Passon Tea
{
    var answer = document.getElementById("choice10").value;
    var myQuestion = document.getElementById("question");
    if(answer === "Medium")
    {
        document.getElementById("choice10").style.display="none";
        document.getElementById("btnSubmit10").style.display="none";
        
        document.getElementById("choice12").style.display="block";
        document.getElementById("btnSubmit12").style.display="block";
        myQuestion.innerHTML = "The ruby red liquid pour onto the ice into the plastic cup. The taste as pleasing as the color, its coolness is so refreshing. You notice the tip jar. Do you tip the birista?";
    }
    else if(answer === "Large")
    {
        document.getElementById("choice8").style.display="none";
        document.getElementById("btnSubmit8").style.display="none";
        
        document.getElementById("choice12").style.display="block";
        document.getElementById("btnSubmit12").style.display="block";
        myQuestion.innerHTML = "The ruby red liquid pour onto the ice into the plastic cup. The taste as pleasing as the color, its coolness is so refreshing. You notice the tip jar. Do you tip the birista?";
    }
}

function getChoice16()// M or L London Fog
{
    var answer = document.getElementById("choice16").value;
    var myQuestion = document.getElementById("question");
    if(answer === "Medium")
    {
        document.getElementById("choice16").style.display="none";
        document.getElementById("btnSubmit16").style.display="none";
        
        document.getElementById("choice14").style.display="block";
        document.getElementById("btnSubmit14").style.display="block";
        myQuestion.innerHTML = " You watch as she steams milk, while the steaping the tea bag. As you walk to the pick counter, she pumps in the lavender. Upon first taste, the latte is more apparent in the drink but it's still of an overall earthy mute taste, not bitter so you enjoy it as it is. You sort wish you'd order a large and notice the tip jar. Do you tip the birista?";
    }
    else if(answer === "Large")
    {
        document.getElementById("choice16").style.display="none";
        document.getElementById("btnSubmit16").style.display="none";
        
        document.getElementById("choice14").style.display="block";
        document.getElementById("btnSubmit14").style.display="block";
        myQuestion.innerHTML = " You watch as she steams milk, while the steaping the tea bag. As you walk to the pick counter, she pumps in the lavender. Upon first taste, the latte is more apparent in the drink but it's still of an overall earthy mute taste, not bitter so you enjoy it as it is. You notice the tip jar. Do you tip the birista?";
    }
}

function getChoice18()//M or L Earl Grey 
{
    var answer = document.getElementById("choice18").value;
    var myQuestion = document.getElementById("question");
    if(answer === "Medium")
    {
        document.getElementById("choice18").style.display="none";
        document.getElementById("btnSubmit18").style.display="none";
        
        document.getElementById("choice17").style.display="block";
        document.getElementById("btnSubmit17").style.display="block";
        myQuestion.innerHTML = " You've never really had black tea before, taking in the earthy color it makes as she steeps the tea. You sip the tea its bitter but not as bitter as stright up coffee. As you adjust to the tea, notice the tip jar. Do you tip the birista?";
    }
    else if(answer === "Large")
    {
        document.getElementById("choice18").style.display="none";
        document.getElementById("btnSubmit18").style.display="none";
        
        document.getElementById("choice17").style.display="block";
        document.getElementById("btnSubmit17").style.display="block";
        myQuestion.innerHTML = " You've never really had black tea before, taking in the earthy color it makes as she steeps the tea. You sip the tea its bitter but not as bitter as stright up coffee. As you adjust to the tea, You notice the tip jar. Do you tip the birista?";
    }
}

//Tips for B
function getChoice9() //Tip for Medium Hot Coffee
{
    var answer = document.getElementById("choice9").value;
    var myQuestion = document.getElementById("question");
            if(answer === "Yes")
            {
                document.getElementById("mainImage").src = "./Images/Coffee.png"
                myQuestion.innerHTML = "The birista smiles at you as the sound of loose change descends into the small pile of coins ";
            }
            else if(answer === "No")
            {
                document.getElementById("mainImage").src = "./Images/sadCoffee.gif"
                myQuestion.innerHTML = "You feel guilty for not tiping the nice birista and feel the weight of the long night ahead of you. Remember you still have a project to do.";
            }
}

function getChoice12() //Tip for Passon Tea
{
    var answer = document.getElementById("choice12").value;
    var myQuestion = document.getElementById("question");
            if(answer === "Yes")
            {
                document.getElementById("mainImage").src = "./Images/HotTea.gif"
                myQuestion.innerHTML = "The birista smiles at you as the sound of loose change descends into the small pile of coins ";
            }
            else if(answer === "No")
            {
                document.getElementById("mainImage").src = "./Images/sadCoffee.gif"
                myQuestion.innerHTML = "You feel guilty for not tiping the nice birista and feel the weight of the long night ahead of you on zero caffine. Remember you still have a project to do.";
            }
}

function getChoice14() //Tip for London Fog
{
    var answer = document.getElementById("choice14").value;
    var myQuestion = document.getElementById("question");
            if(answer === "Yes")
            {
                document.getElementById("mainImage").src = "./Images/Coffee"
                myQuestion.innerHTML = "The birista smiles at you as the sound of loose change descends into the small pile of coins ";
            }
            else if(answer === "No")
            {
                document.getElementById("mainImage").src = "./Images/sadCoffee.gif"
                myQuestion.innerHTML = "You feel guilty for not tiping the nice birista and promise yourself to tip better next time.";
            }
}

function getChoice15() //Tip for Medium Cold Coffee
{
    var answer = document.getElementById("choice15").value;
    var myQuestion = document.getElementById("question");
            if(answer === "Yes")
            {
                document.getElementById("mainImage").src = "./Images/Coffee.png"
                myQuestion.innerHTML = "The birista smiles at you as the sound of loose change descends into the small pile of coins ";
            }
            else if(answer === "No")
            {
                document.getElementById("mainImage").src = "./Images/sadCoffee.gif"
                myQuestion.innerHTML = "You feel guilty for not tiping the nice birista and feel the weight of the long night ahead of you. Remember you still have a project to do.";
            }
}

function getChoice17() //Tip for Earl Grey
{
    var answer = document.getElementById("choice17").value;
    var myQuestion = document.getElementById("question");
            if(answer === "Yes")
            {
                document.getElementById("mainImage").src = "./Images/Coffee.png"
                myQuestion.innerHTML = "The birista smiles at you as the sound of loose change descends into the small pile of coins ";
            }
            else if(answer === "No")
            {
                document.getElementById("mainImage").src = "./Images/sadCoffee.gif"
                myQuestion.innerHTML = "You feel guilty for not tiping the nice birista and feel the weight of the long night ahead of you. Remember you still have a project to do.";
            }
}


//Sugar Loops
 
    function theSuagarLoop()//Add Sugar before Tip Choice
            {
                var answer = document.getElementById("theSugarLoop").value;
                var myQuestion = document.getElementById("theSugarLoop");
                for(var i = 0; i < 5; i++)
                {
                     if(answer < 5)
                     {
                     document.write("Too bitter, add More");
                    }

                    else if (anwser > 5)
                {
                    document.getElementById("choice11").style.display="block"; 
                    document.getElementById("btnSubmit11").style.display="block"; 
                }}
            }


function getChoice13()
{

}