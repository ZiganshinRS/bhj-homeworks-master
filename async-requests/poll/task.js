const pollTitle = document.getElementById('poll__title');
const pollAnswers = document.getElementById('poll__answers');

const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
xhr.send();

xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        const response = JSON.parse(xhr.responseText);

        renderPoll(response.data);
    }
});

function renderPoll(data) {
    pollTitle.textContent = data.title;

    data.answers.forEach(answer => {
        const button = document.createElement('button');
        button.classList.add('poll__answer');
        button.textContent = answer;

        button.addEventListener('click', () => {
            alert('Спасибо, ваш голос засчитан!');
        });

        pollAnswers.appendChild(button);
    });
}