// Enable scrollspy
$(document).ready(() => {
    $('.scrollspy').scrollSpy();
    switch (localStorage.getItem("mode")) {
        case "dark":
            $("body").css({ "background-image": "linear-gradient(to top, #000000, #434343)", "color": "rgba(255, 255, 255, .8)" });
            $(".container").css({ "background-image": "linear-gradient(to bottom, #434343, #121212, #000000)" });
            $(".card-content").css({ "background-color": "#121212" });
            $("#contact").css({ "background-color": "#121212" });
            $(".card-reveal").css({ "background-color": "#121212" });
            break;
        case "light":
            $("body").css({ "background-image": "linear-gradient(to top, #8b8299, #e4e5e6)", "color": "black" });
            $(".container").css({ "background-image": "linear-gradient(to bottom, #e4e5e6, white, #8b8299)" });
            $(".card-content").css({ "background-color": "lightgrey" });
            $("#contact").css({ "background-color": "lightgrey" });
            $(".card").css({ "border": "solid 5px black;" });
            $(".card-reveal").css({ "background-color": "white" });
            break;
        default:
            $("body").css({ "background-image": "linear-gradient(to top, #8b8299, #e4e5e6)", "color": "black" });
            $(".container").css({ "background-image": "linear-gradient(to bottom, #e4e5e6, white, #8b8299)" });
            $(".card-content").css({ "background-color": "lightgrey" });
            $("#contact").css({ "background-color": "lightgrey" });
            $(".card").css({ "border": "solid 5px black;" });
            $(".card-reveal").css({ "background-color": "white" });
    }
});


// Switch between dark and light mode
$("#dark").on("click", () => {
    // Global
    $("body").css({ "background-image": "linear-gradient(to top, #000000, #434343)", "color": "rgba(255, 255, 255, .8)" });
    $(".container").css({ "background-image": "linear-gradient(to bottom, #434343, #121212, #000000)" });
    // Projects page
    $(".card-content").css({ "background-color": "#121212" });
    $("#contact").css({ "background-color": "#121212" });
    $(".card-reveal").css({ "background-color": "#121212" });

    localStorage.setItem("mode", "dark");

})

$("#light").on("click", () => {
    // Global
    $("body").css({ "background-image": "linear-gradient(to top, #8b8299, #e4e5e6)", "color": "black" });
    $(".container").css({ "background-image": "linear-gradient(to bottom, #e4e5e6, white, #8b8299)" });
    // Projects page
    $(".card-content").css({ "background-color": "lightgrey" });
    $("#contact").css({ "background-color": "lightgrey" });
    $(".card").css({ "border": "solid 5px black;" });
    $(".card-reveal").css({ "background-color": "white" });
    localStorage.setItem("mode", "light");
})