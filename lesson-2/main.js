let range = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

a = Math.trunc(Math.random() * range.length);
document.write(` Случайное число: ${a} <br>`);

switch(a) {
    case 1:
        document.write(`Вывод чисел от ${a} до 15: ${range.slice(a)}`);
        break;
    case 2:
        document.write(`Вывод чисел от ${a} до 15: ${range.slice(a)}`);
        break;
    case 3:
        document.write(`Вывод чисел от ${a} до 15: ${range.slice(a)}`);
        break;
    case 4:
        document.write(`Вывод чисел от ${a} до 15: ${range.slice(a)}`);
        break;
    case 5:
        document.write(`Вывод чисел от ${a} до 15: ${range.slice(a)}`);
        break;
    case 6:
        document.write(`Вывод чисел от ${a} до 15: ${range.slice(a)}`);
        break;
    case 7:
        document.write(`Вывод чисел от ${a} до 15: ${range.slice(a)}`);
        break;
    case 8:
        document.write(`Вывод чисел от ${a} до 15: ${range.slice(a)}`);
        break;
    case 9:
        document.write(`Вывод чисел от ${a} до 15: ${range.slice(a)}`);
        break;
    case 10:
        document.write(`Вывод чисел от ${a} до 15: ${range.slice(a)}`);
        break;
    case 11:
        document.write(`Вывод чисел от ${a} до 15: ${range.slice(a)}`);
        break;
    case 12:
        document.write(`Вывод чисел от ${a} до 15: ${range.slice(a)}`);
        break;
    case 13:
        document.write(`Вывод чисел от ${a} до 15: ${range.slice(a)}`);
        break;
    case 14:
        document.write(`Вывод чисел от ${a} до 15: ${range.slice(a)}`);
        break;
    default:
        document.write(`Вывод чисел от ${a} до 15: ${range.slice(a)}`);
        break;
}

function addition (a,b) {
    return a + b;
}
function subtraction (a,b) {
    return a - b;
}
function multiplication (a,b) {
    return a * b;
}
function division (a,b) {
    return a / b;
}

let sum = addition(3,4);
let diff = subtraction(3,4);
let comp = multiplication(3,4);
let div = division(3,4);

document.getElementById('text').innerHTML = `Вывод результата сложения, разности умножения, деления чисел 3 и 4: ${sum} ${diff} ${comp} ${div}`;

function mathOperation (num_1, num_2, operation) {
    switch (operation) {
        case 'сложение':
            document.write(`<p>${operation} числел ${num_1} и ${num_2}: ${addition(num_1, num_2)}</p>`);
            break;
        case 'вычитание':
            document.write(`<p>${operation} числел ${num_1} и ${num_2}: ${subtraction(num_1, num_2)}</p>`);
            break;
        case 'умножение':
            document.write(`<p>${operation} числел ${num_1} и ${num_2}: ${multiplication(num_1, num_2)}</p>`);
            break;
        case 'деление':
            document.write(`<p>${operation} числел ${num_1} и ${num_2}: ${division(num_1, num_2)}</p>`);
            break;
        default:
            document.write('<p>Вы ошиблись в вводе!</p>');
    }
}

const QUERY_OPERATION = prompt('Введите название математической операции: ');
const QUERY_NUM_1 = Number(prompt('Введите первое число: '));
const QUERY_NUM_2 = Number(prompt('Введите второе число: '));

mathOperation(QUERY_NUM_1, QUERY_NUM_2, QUERY_OPERATION);

function power(val, pow) {
    if (pow == 1) {
        return val;
    } else {
        return val * power(val, pow-1);
    }
}

console.log(power(QUERY_NUM_1, QUERY_NUM_2));