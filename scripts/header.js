document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector(".header");
    const intro = document.querySelector(".intro");

    window.addEventListener("scroll", function () {
        const introBottom = intro.getBoundingClientRect().bottom;

        // If the top of the intro section has passed, add background to header
        if (introBottom <= 0) {
            header.style.backgroundColor = "rgba(37, 43, 73, 0.8)";
        } else {
            header.style.backgroundColor = "transparent"; // Make header background transparent when in .intro
        }
    });
});