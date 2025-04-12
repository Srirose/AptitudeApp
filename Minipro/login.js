console.log("Script loaded successfully");




document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");

    if (loginForm) { // Check if form exists
        loginForm.addEventListener("submit", async function (event) {
            event.preventDefault(); // Prevent page reload

            const email = document.getElementById("loginEmail").value;
            const password = document.getElementById("loginPassword").value;

            try {
                const response = await fetch("http://localhost:5000/auth/login", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ email, password })
                });

                const data = await response.json();

                if (response.ok) {
                    alert(data.message);
                    localStorage.setItem("userEmail",data.userEmail);
                    window.location.href = "home.html"; // Redirect to dashboard
                } else {
                    alert(data.message);
                }
            } catch (error) {
                console.error("Login error:", error);
                alert("Login failed. Try again.");
            }
        });
    } else {
        console.error("Login form not found!");
    }
});
