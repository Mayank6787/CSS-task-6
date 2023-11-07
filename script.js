document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");

    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const firstname = document.getElementById("firstname").value;
        const password = document.getElementById("password").value;

        // Simulate authentication logic (replace with actual authentication)
        if (firstname === "your_username" && password === "your_password") {
            alert("Login successful!");
        } else {
            alert("Login failed. Please check your credentials.");
        }
    });
});
