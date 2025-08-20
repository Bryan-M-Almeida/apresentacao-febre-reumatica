document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const slideCounter = document.getElementById('slideCounter');
    const indicatorsContainer = document.getElementById('slideIndicators');
    let currentSlide = 0;

    // Create indicators
    slides.forEach((_, index) => {
        const indicator = document.createElement('button');
        indicator.className = `w-3 h-3 rounded-full mx-1 focus:outline-none ${index === 0 ? 'bg-blue-600' : 'bg-gray-300'}`;
        indicator.addEventListener('click', () => goToSlide(index));
        indicatorsContainer.appendChild(indicator);
    });

    // Update slide counter and indicators
    function updateSlideCounter() {
        slideCounter.textContent = `${currentSlide + 1} / ${slides.length}`;

        // Update indicators
        const indicators = indicatorsContainer.querySelectorAll('button');
        indicators.forEach((indicator, index) => {
            indicator.className = `w-3 h-3 rounded-full mx-1 focus:outline-none ${index === currentSlide ? 'bg-blue-600' : 'bg-gray-300'}`;
        });
    }

    // Show current slide
    function showSlide(index) {
        slides.forEach((slide, slideIndex) => {
            if (slideIndex === index) {
                slide.classList.add('active-slide');
            } else {
                slide.classList.remove('active-slide');
            }
        });

        updateSlideCounter();
    }

    // Navigate to specific slide
    function goToSlide(index) {
        if (index >= 0 && index < slides.length) {
            currentSlide = index;
            showSlide(currentSlide);
        }
    }

    // Next slide
    function nextSlide() {
        if (currentSlide < slides.length - 1) {
            currentSlide++;
            showSlide(currentSlide);
        } else {
            // Loop back to first slide
            currentSlide = 0;
            showSlide(currentSlide);
        }
    }

    // Previous slide
    function prevSlide() {
        if (currentSlide > 0) {
            currentSlide--;
            showSlide(currentSlide);
        } else {
            // Loop to last slide
            currentSlide = slides.length - 1;
            showSlide(currentSlide);
        }
    }

    // Event listeners
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    // Keyboard navigation
    document.addEventListener('keydown', function (e) {
        if (e.key === 'ArrowRight') {
            nextSlide();
        } else if (e.key === 'ArrowLeft') {
            prevSlide();
        }
    });

    // Initialize
    showSlide(currentSlide);
});
