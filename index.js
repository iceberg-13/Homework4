// a = '10';
// alert(a);

// a = '20';
// alert(a);


// iphoneRelease = '2007';
// alert(iphoneRelease);


// jsCreator = 'Brendan Eich';
// alert(jsCreator);


// ten = 10;
// two = 2;
// alert(ten + two);
// alert(ten - two);
// alert(ten * two);
// alert(ten / two);


// result = 2 ** 5;
// alert(result);


// a = 9;
// b = 2;
// result = a % b;
// alert(result);


// let num = 1;
// num += 5;
// num -= 3;
// num *= 7;
// num /= 3;
// ++num;
// -num;
// alert(num);


// age = prompt("Сколько вам лет?");
// alert(age);


// const user = {
//     name: 'Alex',
//     age: 33,
//     isAdmin: true
// }


// user['city of residence'] = true;


// user['age'] = 35;


// delete user['city of residence'];


// let info = prompt("Какую информацию хотите узнать о пользователе?");
// console.log(user[info]);
// alert(user[info]);


// let userName = prompt('Введите ваше имя');
// alert(`Привет, ${userName}!`);



//hw3

//Задание 1

let password = 'пароль';
let passwordAnswer = prompt('Введите пароль');

if (passwordAnswer === 'пароль') {
    alert('Пароль введен верно');
} else {
    alert('Пароль введен неправильно');
}


//Задание 2

let c = 7;

if (c > 0 && c < 10) {
    console.log('Верно');
} else {
    console.log('Неверно');
}


//Задание 3

let d = 23;
let e = 188;

if (d > 100 || e > 100) {
    console.log('Верно');
} else {
    console.log('Неверно');
}


//Задание 4

let a = '2';
let b = '3';

alert(Number(a) + Number(b));


//Задание 5

let monthNumber = 12;

switch (monthNumber) {
    case 12:
    case 1:
    case 2:
        console.log('Зима');
        break;
    case 3:
    case 4:
    case 5:
        console.log('Весна');
        break;
    case 6:
    case 7:
    case 8:
        console.log('Лето');
        break;
    case 9:
    case 10:
    case 11:
        console.log('Осень');
        break;
    default:
        if (monthNumber > 13) {
            console.log(Неверно);
        }
        break;
}