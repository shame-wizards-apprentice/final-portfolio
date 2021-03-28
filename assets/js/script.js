$(document).ready(() => {
    aboutMe();
    // Fetch last used mode from local storage, or display light mode if no record
    switch (localStorage.getItem("mode")) {
        case "dark":
            darkMode();
            break;

        case "light":
            lightMode();
            break;

        default:
            lightMode();
    }
});

// Set dark mode
const darkMode = () => {
    $("body").css({ "background-image": "linear-gradient(to top, #000000, #434343)", "color": "rgba(255, 255, 255, .8)" });
    $(".container").css({ "background-image": "linear-gradient(to bottom, #434343, #121212, #000000)" });
    $(".card-content").css({ "background-color": "#121212" });
    $(".card-reveal").css({ "background-color": "#121212" });
    $("#mode").text("Light Mode");
    $(".btn-small").removeClass("grey darken-4").addClass("deep-purple lighten-5 black-text");
    localStorage.setItem("mode", "dark");
}

// Set light mode
const lightMode = () => {
    $("body").css({ "background-image": "linear-gradient(to top, #D4D3DD, #EFEFBB)", "color": "black" });
    $(".container").css({ "background-image": "linear-gradient(to bottom, #EFEFBB, white, #D4D3DD)" });
    $(".card-content").css({ "background-color": "lightgrey" });
    $(".card").css({ "border": "solid 5px black;" });
    $(".card-reveal").css({ "background-color": "white" });
    $("#mode").text("Dark Mode");
    $(".btn-small").removeClass("deep-purple lighten-5 black-text").addClass("grey darken-4");
    localStorage.setItem("mode", "light");
}

// Display about me
const aboutMe = () => {
    $("#about").css("display", "block");
    $("#projects").css("display", "none");
    $("#info").text("My Work");
}

// Display my work
const myWork = () => {
    $("#about").css("display", "none");
    $("#projects").css("display", "block");
    $("#info").text("About Me");
}

// Switch between dark and light mode
$("#mode").on("click", () => {
    switch (localStorage.getItem("mode")) {
        case "light":
            darkMode();
            break;

        case "dark":
            lightMode();
            break;

        default:
            darkMode();
    }

})

// Switch between "About Me" and "About My Work"
$("#info").on("click", () => {
    switch ($("#info").text()) {
        case "About Me":
            aboutMe()
            break;
        case "My Work":
            myWork();
            break;
        default:
            aboutMe();
    }
})


