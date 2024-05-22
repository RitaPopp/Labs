function sumLastFivePositive(numbers) {
    let sum = 0;

    // фільтруємо, що були додатні числа та розвертаємо масив
    const positiveElements = numbers.filter((number) => number > 0).reverse();

    // проходимось по 5 перших числах масиву
    for (let i = 0; i < 5; i++) {
        // перевірка на наявність елементів в масиві за цим індексом
        if (positiveElements[i]) {
            sum += positiveElements[i];
        }
    }

    return sum;
}

const array = [3, -1, 2, 14, -5, 6, -7, 8, 10, 12, -3, 4];

console.log('Варіант 1');
console.log('Завдання 1');
console.log('Текст задачі: В даному масиві із N цілих чисел знайти суму останніх 5 додатніх елементів.');
console.log('Введені дані: 3, -1, 2, 14, -5, 6, -7, 8, 10, 12, -3, 4');
console.log('Результат виконання скрипта: ' + "Сума останніх 5 додатніх чисел:", sumLastFivePositive(array));
