function countFourDigitNumbersWithSumK(k) {
    let count = 0;

    //усі чотиризначні числа
    for (let i = 1000; i <= 9999; i++) {
        let sum = 0;
        let number = i;

        // Обчислюємо суми цифр числа
        while (number > 0) {
            sum += number % 10; // Додаємо останню цифру
            number = Math.floor(number / 10); // Відкидаємо останню цифру
        }

        // Якщо сума цифр дорівнює k, збільшуємо лічильник
        if (sum === k) {
            count++;
        }
    }

    return count;
}

const k = 10;

console.log('Варіант 1');
console.log('Завдання 3');
console.log('Текст задачі: Знайти кількість чотиризначних чисел, сума цифр яких дорівнює k.');
console.log('Введені дані: 10');
console.log('Результат виконання скрипта: ' + `Кількість чотиризначних чисел, сума цифр яких дорівнює ${k}: ${countFourDigitNumbersWithSumK(k)}`);
