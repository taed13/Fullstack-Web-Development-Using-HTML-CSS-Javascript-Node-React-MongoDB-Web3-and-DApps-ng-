
$(document).ready(function () {
    $("button").on("click", function () {
        // alert("Button clicked!");
        $("h1").fadeToggle();
    });
    // $("h1").click(function () {
    //     $("h1").css("color", "purple");
    // });
    // $(document).keypress(function (event) {
    //     console.log(event.key);
    //     $("h1").text(event.key);
    // });

    // var newButton = "<button>New Button</button>";
    // $("button:first").before(newButton);
});

// console.log($("img").attr("src"));