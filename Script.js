addEventListener("click", function() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    fetch("http://localhost:3000/send-verification", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("signupMessage").innerText = data.message;
    })
    .catch(error => console.error("Error:", error));
});
