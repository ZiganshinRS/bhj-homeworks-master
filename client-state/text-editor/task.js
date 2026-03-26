const editor = document.getElementById('editor');

editor.value = localStorage.getItem('editor_content') || '';

editor.addEventListener('input', () => {
    localStorage.setItem('editor_content', editor.value);
});