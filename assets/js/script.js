$(document).ready(() => {
    // Fetch last used mode from local storage, or display light mode if no record
    $("#projects").css("display", "none");
    switch (localStorage.getItem("mode")) {
        case "dark":
            $("body").css({ "background-image": "linear-gradient(to top, #000000, #434343)", "color": "rgba(255, 255, 255, .8)" });
            $(".container").css({ "background-image": "linear-gradient(to bottom, #434343, #121212, #000000)" });
            $(".card-content").css({ "background-color": "#121212" });
            $(".card-reveal").css({ "background-color": "#121212" });
            $("#mode").text("Light Mode");
            $(".btn-small").removeClass("grey darken-4").addClass("deep-purple lighten-5 black-text");
            break;

        case "light":
            $("body").css({ "background-image": "linear-gradient(to top, #D4D3DD, #EFEFBB)", "color": "black" });
            $(".container").css({ "background-image": "linear-gradient(to bottom, #EFEFBB, white, #D4D3DD)" });
            $(".card-content").css({ "background-color": "lightgrey" });
            $(".card").css({ "border": "solid 5px black;" });
            $(".card-reveal").css({ "background-color": "white" });
            $("#mode").text("Dark Mode");
            $(".btn-small").removeClass("deep-purple lighten-5 black-text").addClass("grey darken-4");
            break;

        default:
            $("body").css({ "background-image": "linear-gradient(to top, #D4D3DD, #EFEFBB)", "color": "black" });
            $(".container").css({ "background-image": "linear-gradient(to bottom, #EFEFBB, white, #D4D3DD)" });
            $(".card-content").css({ "background-color": "lightgrey" });
            $(".card").css({ "border": "solid 5px black;" });
            $(".card-reveal").css({ "background-color": "white" });
            $("#mode").text("Dark Mode");
            $(".btn-small").removeClass("deep-purple lighten-5 black-text").addClass("grey darken-4");
    }
});


// Switch between dark and light mode
$("#mode").on("click", () => {
    switch (localStorage.getItem("mode")) {
        case "light":
            // Global
            $("#mode").text("Light Mode");
            $(".btn-small").removeClass("grey darken-4").addClass("deep-purple lighten-5 black-text");
            $("body").css({ "background-image": "linear-gradient(to top, #000000, #434343)", "color": "rgba(255, 255, 255, .8)" });
            $(".container").css({ "background-image": "linear-gradient(to bottom, #434343, #121212, #000000)" });
            // Projects page
            $(".card-content").css({ "background-color": "#121212" });
            $(".card-reveal").css({ "background-color": "#121212" });
            localStorage.setItem("mode", "dark");
            break;

        case "dark":
            // Global
            $("#mode").text("Dark Mode");
            $("body").css({ "background-image": "linear-gradient(to top, #D4D3DD, #EFEFBB)", "color": "black" });
            $(".container").css({ "background-image": "linear-gradient(to bottom, #EFEFBB, white, #D4D3DD)" });
            // Projects page
            $(".card-content").css({ "background-color": "lightgrey" });
            $(".card").css({ "border": "solid 5px black;" });
            $(".card-reveal").css({ "background-color": "white" });
            $(".btn-small").removeClass("deep-purple lighten-5 black-text").addClass("grey darken-4");
            localStorage.setItem("mode", "light");
            break;

        default:
            // Global
            $("#mode").text("Light Mode");
            $("body").css({ "background-image": "linear-gradient(to top, #D4D3DD, #EFEFBB)", "color": "black" });
            $(".container").css({ "background-image": "linear-gradient(to bottom, #EFEFBB, white, #D4D3DD)" });
            $(".btn-small").removeClass("grey darken-4").addClass("deep-purple lighten-5 black-text");
            // Projects page
            $(".card-content").css({ "background-color": "lightgrey" });
            $(".card").css({ "border": "solid 5px black;" });
            $(".card-reveal").css({ "background-color": "white" });
            localStorage.setItem("mode", "light");
    }

})

// Show "About Me", hide "About My Work"
$("#about-btn").on("click", () => {
    $("#about").css("display", "block");
    $("#projects").css("display", "none");
})

// Show "About My Work", hide "About Me"
$("#projects-btn").on("click", () => {
    $("#about").css("display", "none");
    $("#projects").css("display", "block");
})

