document.addEventListener("DOMContentLoaded", function () {
    const text = "Welcome Back, Shahzeb!";
    const welcomeText = document.getElementById("welcome-text");
    let index = 0;

    function typeWriter() {
        if (index < text.length) {
            welcomeText.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeWriter, 100);
        } else {
            setTimeout(() => {
                window.location.href = "dashboard.html";
            }, 1000);
        }
    }

    typeWriter();
});
