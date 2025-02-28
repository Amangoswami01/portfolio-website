// Button click pe text change karne ka function
function changeMessage() {
    document.getElementById("message").innerText = "Thanks for visiting my portfolio!";
}

// Theme change karne ka function
function toggleTheme() {
    document.body.classList.toggle("dark-mode");
}
window.addEventListener("scroll", function() {
    let navbar = document.getElementById("navbar");
    if (window.scrollY > 50) { 
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".navbar ul li a");

    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    navLinks.forEach(link => {
                        link.classList.remove("active");
                        if (link.getAttribute("href").substring(1) === entry.target.id) {
                            link.classList.add("active");
                        }
                    });
                }
            });
        },
        { threshold: 0.6 } // 60% section visible hone par activate hoga
    );

    sections.forEach(section => observer.observe(section));
});

document.getElementById("menu-toggle").addEventListener("click", function() {
    document.getElementById("nav-links").classList.toggle("show");
});


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

document.querySelectorAll('.progress').forEach(bar => {
    let value = bar.getAttribute('data-progress');
    bar.style.width = value + '%';
});


document.addEventListener("DOMContentLoaded", function() {
    AOS.init({
        duration: 1000,  // Animation duration (1 second)
        once: true,      // Animation runs only once
    });
});


window.addEventListener("scroll", revealOnScroll);
revealOnScroll();
