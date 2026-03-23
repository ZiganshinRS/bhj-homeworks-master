const itemsContainer = document.getElementById('items');
const loader = document.getElementById('loader');

fetch('https://students.netoservices.ru/nestjs-backend/slow-get-courses')
    .then(response => {
        if (!response.ok) {
            throw new Error('Ошибка сети');
        }
        return response.json();
    })
    .then(data => {
        loader.classList.remove('loader_active');

        const currencies = data.response.Valute;

        itemsContainer.innerHTML = '';

        for (const key in currencies) {
            const currency = currencies[key];

            const itemHtml = `
        <div class="item">
          <div class="item__code">${currency.CharCode}</div>
          <div class="item__value">${currency.Value}</div>
          <div class="item__currency">руб.</div>
        </div>
      `;

            itemsContainer.insertAdjacentHTML('beforeend', itemHtml);
        }
    })
    .catch(error => {
        console.error('Произошла ошибка при загрузке данных:', error);
        loader.classList.remove('loader_active');
        itemsContainer.innerText = 'Не удалось загрузить данные.';
    });