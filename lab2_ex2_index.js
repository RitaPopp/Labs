function factorial(n) {
    // Перевіряємо на те, чи число більше 0
    if (n < 0) {
        return "Факторіал для від'ємних чисел не визначений";
    }

    // завжди факторіал =1
    if (n === 0 || n === 1) {
        return 1;
    }

    return n * factorial(n - 1);
}

const number = 5;

console.log('Варіант 1');
console.log('Завдання 2');
console.log('Текст задачі: Обчислити факторіал заданого числа рекурсивно.');
console.log('Введені дані: 5');
console.log('Результат виконання скрипта: ' + "Факторіал числа " + number + " є: " + factorial(number));
