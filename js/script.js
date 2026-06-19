// Menú responsive (hamburguesa)
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}

// Desplazamiento suave al hacer clic en los enlaces del menú
document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
        // Cierra el menú en móvil después de hacer clic
        if (navLinks.classList.contains("active")) {
            navLinks.classList.remove("active");
        }
    });
});

// Validación simple del formulario de contacto
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

if (contactForm) {
    contactForm.addEventListener("submit", function(e) {
        e.preventDefault();

        const nombre = document.getElementById("nombre").value.trim();
        const email = document.getElementById("email").value.trim();
        const mensaje = document.getElementById("mensaje").value.trim();

        if (nombre === "" || email === "" || mensaje === "") {
            formMessage.textContent = "Por favor completa todos los campos.";
            formMessage.style.color = "#e63946";
            return;
        }

        formMessage.textContent = `¡Gracias, ${nombre}! Tu mensaje fue enviado correctamente.`;
        formMessage.style.color = "#f1faee";
        contactForm.reset();
    });
}