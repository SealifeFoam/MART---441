$(document).ready(function(){
    $("#button1").click(function(){
      $("#button1").fadeOut();
      $("#Alice1").fadeIn();
      $("#button2").fadeIn();
        
    });
  
    $("#button2").click(function(){
       $(".container").fadeOut();
       $(".container2").fadeIn().animate({left:450},'slow');
      $(".container3").fadeIn();
      $("#buttonSmile").slideUp().slideDown().slideUp().slideDown();   
      })
  
  
       $("#buttonSmile").click(function(){
      $(".dot").slideToggle().animate({left:500}).slideToggle().animate({right:500});
      
  
    });
  });