function areCoplanar(a, b, c) {
    // Векторний добуток b і c
    let crossProduct = [
        b[1] * c[2] - b[2] * c[1],
        b[2] * c[0] - b[0] * c[2],
        b[0] * c[1] - b[1] * c[0]
    ];

    // Скалярний добуток a і результату векторного добутку
    let dotProduct = a[0] * crossProduct[0] + a[1] * crossProduct[1] + a[2] * crossProduct[2];

    // Перевіряємо чи добуток дорівнює нулю
    return dotProduct === 0;
}

// Приклад векторів
const a = [1, 2, 3];
const b = [4, 5, 6];
const c = [7, 8, 9];

// Перевірка і виведення результату
console.log('Варіант 1');
console.log('Завдання 2');
console.log('Текст задачі: Перевірити, чи три вектора a, b, c які задаються трьома координатами, є компланарними.');
console.log('Введені дані: a (1, 2, 3), b (4, 5, 6), c (7, 8, 9)');
console.log('Результат виконання скрипта: ' + "Вектори компланарні:", areCoplanar(a, b, c));
