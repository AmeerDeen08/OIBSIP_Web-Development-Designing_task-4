// REGISTER HANDLING
const registerForm = document.getElementById("registerForm");
if (registerForm) {
  registerForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const email = document.getElementById("registerEmail").value.trim();
    const password = document.getElementById("registerPassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const user = { firstName, lastName, email, password };
    localStorage.setItem("user", JSON.stringify(user));
    alert("Registration successful! Please log in.");
    window.location.href = "index.html";
  });
}

// LOGIN HANDLING
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value;

    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser || storedUser.email !== email || storedUser.password !== password) {
      alert("Invalid email or password.");
      return;
    }

    localStorage.setItem("loggedIn", "true");
    localStorage.setItem("loggedInName", storedUser.firstName);
    window.location.href = "homepage.html";
  });
}
