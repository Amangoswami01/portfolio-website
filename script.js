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
 // skills js

function animateSkills() {
    let skills = document.querySelectorAll(".progress");
    skills.forEach(skill => {
        let value = skill.getAttribute("data-progress");
        skill.style.width = value + "%";
    });
}

window.onload = animateSkills;

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();
