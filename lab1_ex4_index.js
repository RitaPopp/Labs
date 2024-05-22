function factorize(number) {
    const factors = [];
    let divisor = 2; // Найменший простий множник

    // Перевіряємо, чи є вхідне число більше за 1
    if (number < 2) {
        return "Введіть натуральне число більше за 1.";
    }

    while (number > 1) {
        while (number % divisor === 0) {
            factors.push(divisor);
            number /= divisor;
        }
        divisor++; // Перехід до наступного можливого дільника
    }

    return factors.join(", ");
}

const num = 60;

console.log('Варіант 1');
console.log('Завдання 4');
console.log('Текст задачі: Розкласти натуральне число на прості множники.');
console.log('Введені дані: 60');
console.log('Результат виконання скрипта: ' + `Прості множники числа ${num}:`, factorize(num));
