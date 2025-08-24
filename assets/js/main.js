const navbar = document.getElementById('navbar')

function openSidebar () {
    navbar.classList.add('show')
}


function closeSidebar () {
    navbar.classList.remove('show')
}




document.addEventListener('DOMContentLoaded', function () {
    // --- Animation on Scroll Logic ---
    const animatedElements = document.querySelectorAll('.animate-on-scroll');

    if (animatedElements.length > 0) {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const animationType = entry.target.dataset.animation;
                    if (animationType) {
                        entry.target.classList.add(`animate-${animationType}`);
                    }
                    // Stop observing the element after the animation is triggered
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.2 // Trigger when 10% of the element is visible
        });

        animatedElements.forEach(element => {
            observer.observe(element);
        });
    }

    // --- Testimonial Slider Logic ---
    const slides = document.getElementById('slides');
    if (slides) {
        let currentIndex = 0;
        const totalSlides = document.querySelectorAll('.slide').length;

        window.nextSlide = function() {
            currentIndex = (currentIndex + 1) % totalSlides;
            updateSlider();
        }

        window.prevSlide = function() {
            currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
            updateSlider();
        }

        function updateSlider() {
            const offset = -currentIndex * 104;
            slides.style.transform = `translateX(${offset}%)`;
        }
    }
});