// Enable scrollspy
$(document).ready(function () {
    $('.scrollspy').scrollSpy();
});

// Switch between dark and light mode
$("#dark").on("click", () => {
    // Global
    $("body").css({ "background-image": "linear-gradient(to top, #000000, #434343)" });
    $(".container").css({ "background-image": "linear-gradient(to bottom, #434343, #121212, #000000)" });
    // Projects page
    $(".description").css({ "color": "rgba(255, 255, 255, .8)" });
    $(".tech-list-heading").css({ "color": "rgba(255, 255, 255, .8)" });
    $(".project-title").css({ "color": "rgba(255, 255, 255, .8)" });
    $(".project-blurb").css({ "color": "rgba(255, 255, 255, .8)" });
    $(".close-btn").css({ "color": "rgba(255, 255, 255, .8)" });
    $(".card-title").css({ "color": "rgba(255, 255, 255, .8)" });
    $(".card-content").css({ "background-color": "#121212" })
    $(".card-reveal").css({ "background-color": "#121212" })

})

$("#light").on("click", () => {
    // Global
    $("body").css({ "background-image": "linear-gradient(to top, #8b8299, #e4e5e6)" });
    $(".container").css({ "background-image": "linear-gradient(to bottom, #e4e5e6, white, #8b8299)" });
    // Projects page
    $(".card-content").css({ "background-color": "lightgrey" });
    $(".card").css({ "border": "solid 5px black;" });
    $(".description").css({ "color": "black" });
    $(".tech-list-heading").css({ "color": "black" });
    $(".project-title").css({ "color": "black" });
    $(".project-blurb").css({ "color": "black" });
    $(".close-btn").css({ "color": "black" });
    $(".card-title").css({ "color": "black" });
    $(".card-reveal").css({ "background-color": "white" })
})