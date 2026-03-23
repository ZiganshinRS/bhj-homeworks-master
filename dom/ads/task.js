const initRotators = () => {
    const rotators = Array.from(document.querySelectorAll('.rotator'));

    rotators.forEach((rotator) => {
        const cases = Array.from(rotator.querySelectorAll('.rotator__case'));
        let activeIndex = cases.findIndex(el => el.classList.contains('rotator__case_active'));

        const tick = () => {
            const currentCase = cases[activeIndex];
            currentCase.classList.remove('rotator__case_active');

            activeIndex = (activeIndex + 1) % cases.length;
            const nextCase = cases[activeIndex];

            const color = nextCase.dataset.color;
            if (color) {
                nextCase.style.color = color;
            }

            nextCase.classList.add('rotator__case_active');

            const speed = nextCase.dataset.speed || 1000;
            setTimeout(tick, speed);
        };

        const initialSpeed = cases[activeIndex].dataset.speed || 1000;

        if (cases[activeIndex].dataset.color) {
            cases[activeIndex].style.color = cases[activeIndex].dataset.color;
        }

        setTimeout(tick, initialSpeed);
    });
};

document.addEventListener('DOMContentLoaded', initRotators);