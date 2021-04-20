/*
число, полученное в качестве строки, добавляется в объект 
по соответствующим ключам и выводится в сообщении на странице
*/


function getDigitalRank() {
    output = document.getElementById('digRank');
    number = prompt('Введите число 0 до 999: ');
    obj = {
        100: '',
        10: '',
        1: '',
    };
    if (number.length > 3) {
        alert('Ваше число не трехзначное!')
        message = `Разрядность числа ${number} составит сотни: ${obj[100]} десятки: ${obj[10]} единицы: ${obj[1]} `;
        output.innerHTML = message;
    } else if (number.length === 3) {
        obj[100] = number[0];
        obj[10] = number[1];
        obj[1] = number[2];
        message = `Разрядность числа ${number} составит сотни: ${obj[100]} десятки: ${obj[10]} единицы: ${obj[1]} `;
        output.innerHTML = message;
    } else if (number.length === 2) {
        obj[100] = '0';
        obj[10] = number[0];
        obj[1] = number[1];
        message = `Разрядность числа ${number} составит сотни: ${obj[100]} десятки: ${obj[10]} единицы: ${obj[1]} `;
        output.innerHTML = message;
    } else if (number.length === 1) {
        obj[100] = '0';
        obj[10] = '0';
        obj[1] = number[0];
        message = `Разрядность числа ${number} составит сотни: ${obj[100]} десятки: ${obj[10]} единицы: ${obj[1]} `;
        output.innerHTML = message;
    }
}



 
 