$(document).ready(function () {
    $("button").click(function () {
        $("#cafeInformation").load("data/CafeInfo.txt", fadeText);
    });
});

function fadeText()
{
    $("#CafeInformation").fadeOut("slow").fadeIn("slow");
}