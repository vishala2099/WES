const container = document.querySelector('.container');
const registerBtn = document.querySelector('.register-btn');
const loginBtn = document.querySelector('.login-btn');

registerBtn.addEventListener('click', () => {
    container.classList.add('active');
})

document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.querySelector(".form-box.login form");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission

        // Get input values
        const username = loginForm.querySelector("input[type='text']").value;
        const password = loginForm.querySelector("input[type='password']").value;

        // Simple authentication check (Replace with actual authentication logic)
        if (username === "admin" && password === "1234") {
            // Redirect to index.html on success
            window.location.href = "index.html";
        } else {
            // Show an error message
            alert("Invalid username or password. Please try again.");
        }
    });
});
