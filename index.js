const welcomeBtn = document.getElementById("welcomeBtn");

welcomeBtn.addEventListener("click", function () {
    alert("Welcome to my Portfolio Website!");
});

// Contact form feedback
document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;

    alert("Thank you, " + name + "! Your message has been received.");

    this.reset();
});
