// Button click pe text change karne ka function
function changeMessage() {
    document.getElementById("message").innerText = "Thanks for visiting my portfolio!";
}

// Theme change karne ka function
function toggleTheme() {
    document.body.classList.toggle("dark-mode");
}
// Scroll Animation Function
function revealOnScroll() {
    let elements = document.querySelectorAll(".fade-in");
    elements.forEach((el) => {
        let windowHeight = window.innerHeight;
        let elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight - 50) {
            el.classList.add("visible");
        }
    });
}
 document.getElementById("contactForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Form ko refresh hone se roko
        document.getElementById("confirmationMessage").style.display = "block";
        setTimeout(() => {
            document.getElementById("confirmationMessage").style.display = "none";
        }, 5000);
        this.reset(); // Form fields clear karega
    });
window.addEventListener("scroll", revealOnScroll);
revealOnScroll();
