$(document).ready(function () {
    $("button").click(function () {
        $("#cafeInformation").load("data/data.json", function(responseText){
            var cafe = JSON.parse(responseText);
            $("#cafeInformation").html("Drinks: " + cafe.Drinks 
        + "<br>order:" + cafe.Orders + "<br>First Name:" + cafe.Cusomers.firstName + "<br>Last Name:" 
        + cafe.Cusomers.lastName + "<br>Sizes Available:<br>" +
        cafe.Sizes[0] + "<br>" + cafe.Sizes[1] + "<br>" + cafe.Sizes[2]);
        });
    });
});