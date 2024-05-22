const number = 123;
const errorMessage = "Введіть трицифрове число";

function reverseDigits (currNumber) {
  if (!Number.isInteger(currNumber)) { //перевіряє чи є числом введене значення
    return errorMessage;
  }

  let numStr = currNumber.toString(); // число переводимо у стрічку, щоб знати кількість символів 

  if (numStr.length !== 3) { // перевіряємо довжину, щоб було 3
      return errorMessage;
  }

  return numStr.split('').reverse().join(''); // строку розбиваємо на масив - кожен символ розвертаємо навпаки - записуємо - перетворюємо зному у стрічку
}

console.log('Варіант 1');
console.log('Завдання 1');
console.log('Текст задачі: Записати вказане трицифрове натуральне число в зворотрньому порядку.');
console.log('Введені дані: 123');
console.log('Результат виконання скрипта: ' + reverseDigits(number));
