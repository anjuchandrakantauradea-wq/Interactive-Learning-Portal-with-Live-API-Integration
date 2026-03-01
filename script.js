function login() {
    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value.trim();
    let error = document.getElementById("error");

    if (username === "" || password === "") {
        error.innerText = "Please fill all fields!";
        return;
    }

    localStorage.setItem("user", username);
    window.location.href = "main.html";
}

// Protect main page
if (window.location.pathname.includes("main.html")) {
    let user = localStorage.getItem("user");

    if (!user) {
        window.location.href = "login.html";
    } else {
        document.addEventListener("DOMContentLoaded", function () {
            document.getElementById("displayUser").innerText = user;
        });
    }
}

function logout() {
    localStorage.removeItem("user");
    window.location.href = "login.html";
}