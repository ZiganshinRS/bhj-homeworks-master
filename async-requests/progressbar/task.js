const form = document.getElementById('form');
const progress = document.getElementById('progress');

document.getElementById("file").onchange = function() {
    const fileDesc = document.querySelector(".input__wrapper-desc");
    let fileName = this.value.split("\\");
    fileName = fileName[fileName.length - 1];
    fileDesc.textContent = fileName || "Имя файла...";
};

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const xhr = new XMLHttpRequest();

    xhr.upload.onprogress = function(event) {
        if (event.lengthComputable) {
            // Вычисляем процент загрузки (от 0 до 1)
            const percentComplete = event.loaded / event.total;
            progress.value = percentComplete;
        }
    };

    xhr.upload.onload = function() {
        console.log('Загрузка успешно завершена');
    };

    xhr.onerror = function() {
        console.error('Произошла ошибка при отправке');
    };

    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
    xhr.send(formData);
});