document.addEventListener("DOMContentLoaded", function () {

    const greeting = document.getElementById("greeting");

    if (greeting) {
        const hour = new Date().getHours();
        let text = "";

        if (hour >= 5 && hour <= 11) {
            text = "Selamat Pagi";
        } else if (hour >= 12 && hour <= 14) {
            text = "Selamat Siang";
        } else if (hour >= 15 && hour <= 17) {
            text = "Selamat Sore";
        } else {
            text = "Selamat Malam";
        }

        greeting.textContent = text;
    }

    const navbar = document.querySelector(".navbar");

    if (navbar) {
        window.addEventListener("scroll", function () {
            if (window.scrollY > 50) {
                navbar.classList.add("scrolled");
            } else {
                navbar.classList.remove("scrolled");
            }
        });
    }

    // REVEAL ON SCROLL
    const reveals = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
        reveals.forEach(el => {
            const windowHeight = window.innerHeight;
            const elementTop = el.getBoundingClientRect().top;
            const revealPoint = 100;

            if (elementTop < windowHeight - revealPoint) {
                el.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    window.addEventListener('load', revealOnScroll);
    

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); // trigger saat load
});
