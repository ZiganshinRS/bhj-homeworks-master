const fontSizes = document.querySelectorAll('.font-size');
const book = document.getElementById('book');

fontSizes.forEach(button => {
    button.addEventListener('click', (event) => {
        event.preventDefault();

        fontSizes.forEach(el => el.classList.remove('font-size_active'));
        button.classList.add('font-size_active');

        const size = button.dataset.size;

        book.classList.remove('book_fs-small', 'book_fs-big');

        if (size === 'small') {
            book.classList.add('book_fs-small');
        } else if (size === 'big') {
            book.classList.add('book_fs-big');
        }
    });
});