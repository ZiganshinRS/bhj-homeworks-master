const tooltips = Array.from(document.querySelectorAll('.has-tooltip'));

const tooltipElement = document.createElement('div');
tooltipElement.className = 'tooltip';
document.body.appendChild(tooltipElement);

tooltips.forEach(element => {
    element.onclick = function(event) {
        event.preventDefault();

        if (tooltipElement.classList.contains('tooltip_active') &&
            tooltipElement.innerText === this.title) {
            tooltipElement.classList.remove('tooltip_active');
            return false;
        }

        tooltipElement.innerText = this.title;

        tooltipElement.classList.add('tooltip_active');

        const { left, bottom, top } = this.getBoundingClientRect();


        tooltipElement.style.left = `${left}px`;
        tooltipElement.style.top = `${bottom}px`;

        return false;
    };
});
