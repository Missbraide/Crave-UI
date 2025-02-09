document.addEventListener("DOMContentLoaded", function() {
    const recommendButton = document.getElementById("recommend-btn");
    const reviewsSection = document.querySelector(".container.my-5");
    
    // Hide the reviews section initially
    reviewsSection.classList.add("hidden");
    
    recommendButton.addEventListener("click", function() {
        // Toggle visibility of the reviews section
        reviewsSection.classList.toggle("hidden");
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.querySelector("form");
    const signInButton = loginForm.querySelector("button[type='submit']");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault(); 

        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        if (!email || !password) {
            alert("Please fill in all required fields.");
            return;
        }
        window.location.href = "/index.html";
    });
});