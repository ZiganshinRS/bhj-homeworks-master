document.addEventListener('DOMContentLoaded', function() {
    const revealElements = document.querySelectorAll('.reveal');

    function checkElementsVisibility() {
        const windowHeight = window.innerHeight;
        const triggerPoint = 150;

        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;

            if (elementTop < windowHeight - triggerPoint) {
                element.classList.add('reveal_active');
            }
        });
    }

    checkElementsVisibility();

    window.addEventListener('scroll', checkElementsVisibility);
});
