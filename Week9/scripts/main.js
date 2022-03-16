let cafe = {
    "Drinks" : ["Tea", "Coffee"],

    "Orders" : ["1", "2", "3"],

    "Cusomers" : {
        "firstName" : ["Robert", "Frank", "Susan"],
        "lastName" : ["James", "Phils", "Mikes" ]
    },
    "Sizes" : [
        "small",
        "medium",
        "large"
    ]
}


$(function () {
$("button").click(function () {
    showCafeInfo();
});

});

function showCafeInfo()
{
    $("#cafeInformation").html("Drinks: " + cafe.Drinks 
    + "<br>Orders:" + cafe.Orders + "<br>First Name:" + cafe.Cusomers.firstName + "<br>Last Name:" 
    + cafe.Cusomers.lastName + "<br>Sizes Available:<br>" +
    cafe.Sizes[0] + "<br>" + cafe.Sizes[1] + "<br>" + cafe.Sizes[2]);
}