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
<form id="contactForm">
    <input type="text" name="name" placeholder="Your Name" required>
    <input type="email" name="email" placeholder="Your Email" required>
    <textarea name="message" rows="4" placeholder="Your Message" required></textarea>
    <button type="submit">Send Message</button>
</form>

<p id="confirmationMessage" style="display:none; color:green; font-weight:bold;">
    ✅ Your message has been sent successfully!
</p>

<script>
    document.getElementById("contactForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Form ko refresh hone se roko
        document.getElementById("confirmationMessage").style.display = "block";
        setTimeout(() => {
            document.getElementById("confirmationMessage").style.display = "none";
        }, 5000);
        this.reset(); // Form fields clear karega
    });
</script>

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();
