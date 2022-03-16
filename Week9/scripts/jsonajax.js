$(document).ready(function () {
    $("button").click(function () {
        $("#cafeInformation").load("data/data.json", function(responseText){
            var cafe = JSON.parse(responseText);
            $("#cafeInformation").html(`Drinks: ${cafe.drinks}<br>order:${cafe.orders}<br>First Name:${cafe.cusomers.firstName}<br>Last Name:${cafe.cusomers.lastName}<br>Sizes Available:<br>${cafe.sizes[0]}<br>${cafe.sizes[1]}<br>${cafe.sizes[2]}`);
        });
    });
});