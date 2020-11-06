// -- створити об'єкт (не меньше 5ти властивостей) який описує
// - собаку
// - людину
// - автомобіль

// let obj = {
//     dog : {
//         name: 'Barsik',
//         old: 5,
//         color: 'black',
//         poroda: 'ovcharka',
//         size: 'big',
//     }
//     people: {
//         name: 'Misha',
//         surName: 'Kravchenko',
//         middleName: 'Ivanovich',
//         age: 21,
//         city: 'Lviv',
//     }
//     car: {
//         country: 'Germany',
//         color: 'white',
//         producer: 'BMW',
//         type: 'universal',
//         age: 2,
//     }
// }
// console.log(obj);

// -- створити об'єкт (не меньше 5ти властивостей) який описує, одна з властивостей обов'язково повинна бути об'єктом,ще одна - масивом
// - будинок
// - водій
// - іграшку
// - стіл
// - сумка

// let obj = {
//     House: {
//         floor: 5,
//         room: ['kitchen', 'bathroom', 'living room'],
//         color: 'blue',
//         comfort: true,
//         basement: false,
//     },
//     Driver: {
//         state: 'sober',
//         experience: 20,
//         age: 40,
//         transport: 'bus',
//         sex: 'man',
//     },
//
//     Toy:{
//         material: 'plastic',
//         firm: 'LEGO'
//         complexity: 'average',
//         price: 1000,
//         size: ['big','small'],

//     },
//
//     Table: {
//         brand: 'IKEA',
//         model: 'Turbo-X-Pro-S',
//         comfort: true,
//         size: '123х321',
//         comfort: [true, false]
//     },

//     Bag: {
//         brand: 'Pull&Bear',
//         color: 'Brown',
//         material: ['сotton','leather'],
//         size: 'Average',
//         comfort: true,
//     },
//
// }
// console.log(obj);


// Дан массив:
//     let users = [
//         {name: 'vasya', age: 31, status: false},
//         {name: 'petya', age: 30, status: true},
//         {name: 'kolya', age: 29, status: true},
//         {name: 'olya', age: 28, status: false},
//         {name: 'max', age: 30, status: true},
//         {name: 'anya', age: 31, status: false},
//         {name: 'oleg', age: 28, status: false},
//         {name: 'andrey', age: 29, status: true},
//         {name: 'masha', age: 30, status: true},
//         {name: 'olya', age: 31, status: false},
//         {name: 'max', age: 31, status: true}
//     ];

// - звернутися в відповідну ячейку масиву і відповідний параметр об'єкта і вивести в консольх наступне
// - 1. статус Андрія

// for(let user of users){
//     if(user.name == 'andrey'){
//         console.log(user.status)
//     }
// }

// 2. Статус Максима

// for(let user of users){
//     if(user.name == 'max'){
//         console.log(user.status)
//     }
// }

// 3. Імя передостаннього обєкту

// console.log(users[9].name);

// 4. Імя третього обєкту

// console.log(users[2]['name']);

// 5. Вік Олега

// for(let user of users){
//     if(user.name == 'oleg'){
//         console.log(user.age);
//     }
// }

// 6. Вік Олі

// for(let user of users){
//     if(user.name == 'olya'){
//         console.log(user.age)
//     }
// }

// 7. Вік + імя пятого обєкта

// console.log(users[4]['name']);
// console.log(users[4]['age']);

// 8. Вік + статус Анни
// for(let user of users){
//     if(user.name == 'anya' ){
//         console.log(user['age']);
//         console.log(user['status']);
//     }
// }

// _________________________________________

// -- Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// -- отримує текст з параграфа з id "content"
// let elem = document.getElementById('content');
// console.log(elem);

// -- отримує текст з блоку з id "rules"

// let elem = document.getElementById('rules')
// console.log(elem);

// -- замініть текст параграфа з id 'content' на будь-який інший

// let elem = document.getElementById('content');
// elem.innerText = 'Content Content Content Content Content Content Content ';

// -- замініть текст параграфа з id 'rules' на будь-який інший

// let elem = document.getElementById('rules');
// elem.innerText = 'Rules Rules Rules Rules Rules Rules Rules Rules Rules Rules ';

// -- змініть кожному елементу колір фону на червоний

// let elem1 = document.getElementById('content');
// elem1.style.backgroundColor = 'red';
// let elem2 = document.getElementById('rules');
// elem2.style.backgroundColor = 'red';

// -- змініть кожному елементу колір тексту на синій

// let elem1 = document.getElementById('content');
// elem1.style.color = 'blue';
// let elem2 = document.getElementById('rules');
// elem2.style.color = 'blue';

// -- отримати весь список класів елемента з id=rules і вивести їх в console.log

// let elem = document.getElementById('rules');
// console.log(elem.className)

// -- отримати всі елементи з класом fc_rules

// let elem = document.getElementsByClassName('fc_rules');
// console.log(elem)

// -- поміняти колір тексту у всіх елементів fc_rules на червоний

// let elem1 = document.getElementsByClassName('fc_rules');
//
// for(let elem of elem1){
//     elem.style.color = 'red';
// }
