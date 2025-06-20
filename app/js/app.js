document.addEventListener("DOMContentLoaded", function () {

    // Нумерация строк таблицы
    const table = document.getElementById('table__students');

    const rows = table.querySelectorAll('tbody tr');

    rows.forEach((row, index) => {
        row.children[0].textContent = index + 1;
    });
    // Нумерация строк таблицы

});