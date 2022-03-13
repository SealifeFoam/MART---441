3/7/2022 - This looks like its going to be fun! A little overwhelming, but fun. I hope to create a silhouette piece of Alice and the cheshire cat in the tree. However, I do have a couple other ideas if that is too complex. 

To Do: 
Find Images
Jot down $ tags to help me move images/texts
Make Button 
Animate background-shapes? 
Look for Font

3/8/2022 

Need to 
-Make Alice appear at first click : Check
-Change scene at second click : Check
    - Imagery will change 
    
-Shape will appear at third click : 


Teachers Sugguestion - *Update : won't connect with code
$(document).ready(function () {

      $("button1").click(function () {
        $("#Goodbye").fadeOut(fadeInAlice); // use callbacks instead

      });

      function fadeInAlice() {
        $("#Alice1").fadeIn(fadeInButton);
      }

      function fadeInButton() {
        $("#button2").fadeIn();
      }
      $("#button2").click(function () {
        $(".container").fadeOut(addAndAnimate);

      });

      function addAndAnimate() {
        $(".square").add();
        $(".container2").fadeIn().animate({
          left: 200
        });
      }

    });