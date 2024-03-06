document.querySelector("form.welcome-message").addEventListener("submit", function(event) {
    event.preventDefault();
    document.getElementById("target").innerText = "Hello" + " " + document.getElementById("name").value + "!" + " Welcome to the chill out zone. How about taking a look at our breathing techniques in the navbar above? Or maybe try a quick meditation. We even have a fun game to distract you from your troubles! Or check out our tips below :)";
});

