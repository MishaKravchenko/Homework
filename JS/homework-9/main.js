// - створити функцію яка виводить масив
// let arr = [1,2,3,4,5,6,7,8,9];
// function printArr(arr) {
//     console.log(arr);
// }
// printArr(arr);

// - створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попвередню функцію.
// function randomArr(length,max,min) {
//     let arr = [];
//     for (let i = 0; i < length; i++) {
//         arr.push(Math.floor(Math.random()*(max-min)+max))
//     }
//     return arr;
// }
// let arr1 = randomArr(10,10,100);
// printArr(arr1);

// - створити функцію яка приймає три числа та виводить та повертає найменьше.
// function minimal(a,b,c) {
//     let min;
//
//     if (a<=b && a<=c) min = a;
//     if (b<=a && b<=c) min = b;
//     if (c<=b && c<=a) min = c;
//
//     console.log(min);
//     return  min;
// }
// let min = minimal(1,2,3);
// console.log(min);

// - створити функцію яка приймає три числа та виводить та повертає найбільше.
// function minimal(a,b,c) {
//     let max;
//
//     if (a>=b && a>=c) max = a;
//     if (b>=a && b>=c) max = b;
//     if (c>=b && c>=a) max = c;
//
//     console.log(max);
//     return  max;
// }
// let max = minimal(1,2,3);
// console.log(max);

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше
// function returnMinPrintMax() {
//     let min = arguments[0];
//     let max = arguments[0];
//     for (let item of arguments) {
//     if (item>max) max=item;
//     if (item<min) min=item;
//     }
//     console.log('max ',max);
//     return min;
// }
// const min = returnMinPrintMax(1,2,3,4,5,6,7);
// console.log('________________');
// console.log('min ',min);

// - створити функцію яка виводить масив
// let arr = [1,2,3,4,5,6,7,8,9,10];
// function printArr(arr) {
//     console.log(arr)
// }
// printArr(arr)

// - створити функцію яка повертає найбільше число з масиву
// function returnMaxNumber(array){
//     let max = array[0];
//     for (let item of array) {
//         if (max < item) max = item;
//     }
//     return max;
// }
// let returnMaxNumber1 = returnMaxNumber([1,2,3,4,5,6,777,8]);
// console.log(returnMaxNumber1);

// - створити функцію яка повертає найменьше число з масиву
// function returnMinNumber(array){
//     let min = array[0];
//     for (let item of array) {
//         if (min > item) min = item;
//     }
//     return min;
// }
// let returnMinNumber1 = returnMinNumber([1,2,3,4,5,6,777,8]);
// console.log(returnMinNumber1);

// - створити функцію яка приймає масив чисел та складає значення елементів масиву та повертає його.
// function summa(array) {
//     let sum = 0;
//     for (const item of array) {
//         sum += item;
//     }
//     return sum
// }
// let summa1 = summa([1,2,3,4,5,5]);
// console.log(summa1);


// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// function summa(array) {
//     let sum = 0;
//     for (const item of array) {
//         sum += item;
//     }
//     return sum/array.length;
// }
// let summa1 = summa([1,2,3,4,5,5]);
// console.log(summa1);

// - Створити функцію яка приймає масив будь яких объектів, та повертає значення кількості об'єктів в масиві
// const users = [
//     {
//         "id": 1,
//         "name": "Leanne Graham",
//         "username": "Bret",
//         "email": "Sincere@april.biz",
//         "address": {
//             "street": "Kulas Light",
//             "suite": "Apt. 556",
//             "city": "Gwenborough",
//             "zipcode": "92998-3874",
//             "geo": {
//                 "lat": "-37.3159",
//                 "lng": "81.1496"
//             }
//         },
//         "phone": "1-770-736-8031 x56442",
//         "website": "hildegard.org",
//         "company": {
//             "name": "Romaguera-Crona",
//             "catchPhrase": "Multi-layered client-server neural-net",
//             "bs": "harness real-time e-markets"
//         }
//     },
//     {
//         "id": 2,
//         "name": "Ervin Howell",
//         "username": "Antonette",
//         "email": "Shanna@melissa.tv",
//         "address": {
//             "street": "Victor Plains",
//             "suite": "Suite 879",
//             "city": "Wisokyburgh",
//             "zipcode": "90566-7771",
//             "geo": {
//                 "lat": "-43.9509",
//                 "lng": "-34.4618"
//             }
//         },
//         "phone": "010-692-6593 x09125",
//         "website": "anastasia.net",
//         "company": {
//             "name": "Deckow-Crist",
//             "catchPhrase": "Proactive didactic contingency",
//             "bs": "synergize scalable supply-chains"
//         }
//     },
//     {
//         "id": 3,
//         "name": "Clementine Bauch",
//         "username": "Samantha",
//         "email": "Nathan@yesenia.net",
//         "address": {
//             "street": "Douglas Extension",
//             "suite": "Suite 847",
//             "city": "McKenziehaven",
//             "zipcode": "59590-4157",
//             "geo": {
//                 "lat": "-68.6102",
//                 "lng": "-47.0653"
//             }
//         },
//         "phone": "1-463-123-4447",
//         "website": "ramiro.info",
//         "company": {
//             "name": "Romaguera-Jacobson",
//             "catchPhrase": "Face to face bifurcated interface",
//             "bs": "e-enable strategic applications"
//         }
//     },
//     {
//         "id": 4,
//         "name": "Patricia Lebsack",
//         "username": "Karianne",
//         "email": "Julianne.OConner@kory.org",
//         "address": {
//             "street": "Hoeger Mall",
//             "suite": "Apt. 692",
//             "city": "South Elvis",
//             "zipcode": "53919-4257",
//             "geo": {
//                 "lat": "29.4572",
//                 "lng": "-164.2990"
//             }
//         },
//         "phone": "493-170-9623 x156",
//         "website": "kale.biz",
//         "company": {
//             "name": "Robel-Corkery",
//             "catchPhrase": "Multi-tiered zero tolerance productivity",
//             "bs": "transition cutting-edge web services"
//         }
//     },
//     {
//         "id": 5,
//         "name": "Chelsey Dietrich",
//         "username": "Kamren",
//         "email": "Lucio_Hettinger@annie.ca",
//         "address": {
//             "street": "Skiles Walks",
//             "suite": "Suite 351",
//             "city": "Roscoeview",
//             "zipcode": "33263",
//             "geo": {
//                 "lat": "-31.8129",
//                 "lng": "62.5342"
//             }
//         },
//         "phone": "(254)954-1289",
//         "website": "demarco.info",
//         "company": {
//             "name": "Keebler LLC",
//             "catchPhrase": "User-centric fault-tolerant solution",
//             "bs": "revolutionize end-to-end systems"
//         }
//     },
//     {
//         "id": 6,
//         "name": "Mrs. Dennis Schulist",
//         "username": "Leopoldo_Corkery",
//         "email": "Karley_Dach@jasper.info",
//         "address": {
//             "street": "Norberto Crossing",
//             "suite": "Apt. 950",
//             "city": "South Christy",
//             "zipcode": "23505-1337",
//             "geo": {
//                 "lat": "-71.4197",
//                 "lng": "71.7478"
//             }
//         },
//         "phone": "1-477-935-8478 x6430",
//         "website": "ola.org",
//         "company": {
//             "name": "Considine-Lockman",
//             "catchPhrase": "Synchronised bottom-line interface",
//             "bs": "e-enable innovative applications"
//         }
//     },
//     {
//         "id": 7,
//         "name": "Kurtis Weissnat",
//         "username": "Elwyn.Skiles",
//         "email": "Telly.Hoeger@billy.biz",
//         "address": {
//             "street": "Rex Trail",
//             "suite": "Suite 280",
//             "city": "Howemouth",
//             "zipcode": "58804-1099",
//             "geo": {
//                 "lat": "24.8918",
//                 "lng": "21.8984"
//             }
//         },
//         "phone": "210.067.6132",
//         "website": "elvis.io",
//         "company": {
//             "name": "Johns Group",
//             "catchPhrase": "Configurable multimedia task-force",
//             "bs": "generate enterprise e-tailers"
//         }
//     },
//     {
//         "id": 8,
//         "name": "Nicholas Runolfsdottir V",
//         "username": "Maxime_Nienow",
//         "email": "Sherwood@rosamond.me",
//         "address": {
//             "street": "Ellsworth Summit",
//             "suite": "Suite 729",
//             "city": "Aliyaview",
//             "zipcode": "45169",
//             "geo": {
//                 "lat": "-14.3990",
//                 "lng": "-120.7677"
//             }
//         },
//         "phone": "586.493.6943 x140",
//         "website": "jacynthe.com",
//         "company": {
//             "name": "Abernathy Group",
//             "catchPhrase": "Implemented secondary concept",
//             "bs": "e-enable extensible e-tailers"
//         }
//     },
//     {
//         "id": 9,
//         "name": "Glenna Reichert",
//         "username": "Delphine",
//         "email": "Chaim_McDermott@dana.io",
//         "address": {
//             "street": "Dayna Park",
//             "suite": "Suite 449",
//             "city": "Bartholomebury",
//             "zipcode": "76495-3109",
//             "geo": {
//                 "lat": "24.6463",
//                 "lng": "-168.8889"
//             }
//         },
//         "phone": "(775)976-6794 x41206",
//         "website": "conrad.com",
//         "company": {
//             "name": "Yost and Sons",
//             "catchPhrase": "Switchable contextually-based project",
//             "bs": "aggregate real-time technologies"
//         }
//     },
//     {
//         "id": 10,
//         "name": "Clementina DuBuque",
//         "username": "Moriah.Stanton",
//         "email": "Rey.Padberg@karina.biz",
//         "address": {
//             "street": "Kattie Turnpike",
//             "suite": "Suite 198",
//             "city": "Lebsackbury",
//             "zipcode": "31428-2261",
//             "geo": {
//                 "lat": "-38.2386",
//                 "lng": "57.2232"
//             }
//         },
//         "phone": "024-648-3804",
//         "website": "ambrose.net",
//         "company": {
//             "name": "Hoeger LLC",
//             "catchPhrase": "Centralized empowering task-force",
//             "bs": "target end-to-end models"
//         }
//     }
// ];
// function countFields(array) {
//     let count = 0;
//     for (const item of array) {
//         if (typeof item === 'object'){
//             count++;
//         }
//     }
//     return count;
// }
// const number = countFields(users);
// console.log(number);

// - Створити функцію яка приймає масив будь яких объектів, та повертає загальн кількість полів в них
// const users = [
//     {
//         "id": 1,
//         "name": "Leanne Graham",
//         "username": "Bret",
//         "email": "Sincere@april.biz",
//         "address": {
//             "street": "Kulas Light",
//             "suite": "Apt. 556",
//             "city": "Gwenborough",
//             "zipcode": "92998-3874",
//             "geo": {
//                 "lat": "-37.3159",
//                 "lng": "81.1496"
//             }
//         },
//         "phone": "1-770-736-8031 x56442",
//         "website": "hildegard.org",
//         "company": {
//             "name": "Romaguera-Crona",
//             "catchPhrase": "Multi-layered client-server neural-net",
//             "bs": "harness real-time e-markets"
//         }
//     },
//     {
//         "id": 2,
//         "name": "Ervin Howell",
//         "username": "Antonette",
//         "email": "Shanna@melissa.tv",
//         "address": {
//             "street": "Victor Plains",
//             "suite": "Suite 879",
//             "city": "Wisokyburgh",
//             "zipcode": "90566-7771",
//             "geo": {
//                 "lat": "-43.9509",
//                 "lng": "-34.4618"
//             }
//         },
//         "phone": "010-692-6593 x09125",
//         "website": "anastasia.net",
//         "company": {
//             "name": "Deckow-Crist",
//             "catchPhrase": "Proactive didactic contingency",
//             "bs": "synergize scalable supply-chains"
//         }
//     },
//     {
//         "id": 3,
//         "name": "Clementine Bauch",
//         "username": "Samantha",
//         "email": "Nathan@yesenia.net",
//         "address": {
//             "street": "Douglas Extension",
//             "suite": "Suite 847",
//             "city": "McKenziehaven",
//             "zipcode": "59590-4157",
//             "geo": {
//                 "lat": "-68.6102",
//                 "lng": "-47.0653"
//             }
//         },
//         "phone": "1-463-123-4447",
//         "website": "ramiro.info",
//         "company": {
//             "name": "Romaguera-Jacobson",
//             "catchPhrase": "Face to face bifurcated interface",
//             "bs": "e-enable strategic applications"
//         }
//     },
//     {
//         "id": 4,
//         "name": "Patricia Lebsack",
//         "username": "Karianne",
//         "email": "Julianne.OConner@kory.org",
//         "address": {
//             "street": "Hoeger Mall",
//             "suite": "Apt. 692",
//             "city": "South Elvis",
//             "zipcode": "53919-4257",
//             "geo": {
//                 "lat": "29.4572",
//                 "lng": "-164.2990"
//             }
//         },
//         "phone": "493-170-9623 x156",
//         "website": "kale.biz",
//         "company": {
//             "name": "Robel-Corkery",
//             "catchPhrase": "Multi-tiered zero tolerance productivity",
//             "bs": "transition cutting-edge web services"
//         }
//     },
//     {
//         "id": 5,
//         "name": "Chelsey Dietrich",
//         "username": "Kamren",
//         "email": "Lucio_Hettinger@annie.ca",
//         "address": {
//             "street": "Skiles Walks",
//             "suite": "Suite 351",
//             "city": "Roscoeview",
//             "zipcode": "33263",
//             "geo": {
//                 "lat": "-31.8129",
//                 "lng": "62.5342"
//             }
//         },
//         "phone": "(254)954-1289",
//         "website": "demarco.info",
//         "company": {
//             "name": "Keebler LLC",
//             "catchPhrase": "User-centric fault-tolerant solution",
//             "bs": "revolutionize end-to-end systems"
//         }
//     },
//     {
//         "id": 6,
//         "name": "Mrs. Dennis Schulist",
//         "username": "Leopoldo_Corkery",
//         "email": "Karley_Dach@jasper.info",
//         "address": {
//             "street": "Norberto Crossing",
//             "suite": "Apt. 950",
//             "city": "South Christy",
//             "zipcode": "23505-1337",
//             "geo": {
//                 "lat": "-71.4197",
//                 "lng": "71.7478"
//             }
//         },
//         "phone": "1-477-935-8478 x6430",
//         "website": "ola.org",
//         "company": {
//             "name": "Considine-Lockman",
//             "catchPhrase": "Synchronised bottom-line interface",
//             "bs": "e-enable innovative applications"
//         }
//     },
//     {
//         "id": 7,
//         "name": "Kurtis Weissnat",
//         "username": "Elwyn.Skiles",
//         "email": "Telly.Hoeger@billy.biz",
//         "address": {
//             "street": "Rex Trail",
//             "suite": "Suite 280",
//             "city": "Howemouth",
//             "zipcode": "58804-1099",
//             "geo": {
//                 "lat": "24.8918",
//                 "lng": "21.8984"
//             }
//         },
//         "phone": "210.067.6132",
//         "website": "elvis.io",
//         "company": {
//             "name": "Johns Group",
//             "catchPhrase": "Configurable multimedia task-force",
//             "bs": "generate enterprise e-tailers"
//         }
//     },
//     {
//         "id": 8,
//         "name": "Nicholas Runolfsdottir V",
//         "username": "Maxime_Nienow",
//         "email": "Sherwood@rosamond.me",
//         "address": {
//             "street": "Ellsworth Summit",
//             "suite": "Suite 729",
//             "city": "Aliyaview",
//             "zipcode": "45169",
//             "geo": {
//                 "lat": "-14.3990",
//                 "lng": "-120.7677"
//             }
//         },
//         "phone": "586.493.6943 x140",
//         "website": "jacynthe.com",
//         "company": {
//             "name": "Abernathy Group",
//             "catchPhrase": "Implemented secondary concept",
//             "bs": "e-enable extensible e-tailers"
//         }
//     },
//     {
//         "id": 9,
//         "name": "Glenna Reichert",
//         "username": "Delphine",
//         "email": "Chaim_McDermott@dana.io",
//         "address": {
//             "street": "Dayna Park",
//             "suite": "Suite 449",
//             "city": "Bartholomebury",
//             "zipcode": "76495-3109",
//             "geo": {
//                 "lat": "24.6463",
//                 "lng": "-168.8889"
//             }
//         },
//         "phone": "(775)976-6794 x41206",
//         "website": "conrad.com",
//         "company": {
//             "name": "Yost and Sons",
//             "catchPhrase": "Switchable contextually-based project",
//             "bs": "aggregate real-time technologies"
//         }
//     },
//     {
//         "id": 10,
//         "name": "Clementina DuBuque",
//         "username": "Moriah.Stanton",
//         "email": "Rey.Padberg@karina.biz",
//         "address": {
//             "street": "Kattie Turnpike",
//             "suite": "Suite 198",
//             "city": "Lebsackbury",
//             "zipcode": "31428-2261",
//             "geo": {
//                 "lat": "-38.2386",
//                 "lng": "57.2232"
//             }
//         },
//         "phone": "024-648-3804",
//         "website": "ambrose.net",
//         "company": {
//             "name": "Hoeger LLC",
//             "catchPhrase": "Centralized empowering task-force",
//             "bs": "target end-to-end models"
//         }
//     }
// ] ;
// function countFields(array) {
//     let count = 0;
//     for (const item of array) {
//         if (typeof item === 'object'){
//             for (const key in item) {
//                 count++;
//             }
//         }
//     }
//     return count;
// }
// const number = countFields(users);
// console.log(number);

// - створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
// Приклад
//     [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]

// function summaArray(array1,array2) {
//     let result = [];
//     for (let i = 0; i < array1.length; i++) {
//         result.push(array1[i]+array2[i]);
//
//     }
//       return result;
// }
//
// let summaArray1 = summaArray([1,2,3,4],[2,3,4,5]);
// console.log(summaArray1);

// - *** приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
// let array1 =[1,2,3,4,5,6,7,8,9];
// function changeElement(arr,index) {
//     let array =[...arr];
//     if (index < array.length-1){
//         let temp = array[index];
//         array[index] = array[index+1];
//         array[index+1] = temp;
//     }
//     return array;
// }
// let changeElement1 = changeElement(array1, 6 );
// console.log(array1)
// console.log(changeElement1);

// --- *** створити функцію яка буде переносити елементи з значенням 0 у кінець маисву.
// Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// Приклад
//     [1,0,6,0,3] => [1,6,3,0,0]
//     [0,1,2,3,4] => [1,2,3,4,0]
//     [0,0,1,0]   => [1,0,0,0]

// function f(arr) {
//     for (let i = arr.length - 1; i >= 0; i--) {
//         if (arr[i] === 0) {
//             arr.push(+arr.splice(i, 1).join(''));
//         }
//     }
//     console.log(arr);
// }
//
//
// f([1, 0, 6, 0, 3]);

// - Додає в боді блок з текстом "Hello owu"
// function addText(text,div) {
//     let item = document.createElement('div');
//     item.innerHTML = 'Hello owu';
//     document.body.appendChild(item);
// }
// addText(0,'div');

// - Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи
// function addText(text,typeTag) {
//     const tag = document.createElement(typeTag);
//     tag.innerHTML = text || "Hello owu 2020";
//     document.body.appendChild((tag));
// }
// addText('Hello owu','div');

// Створити функцію яка :
//     - Додає в боді блок з текстом "Hello owu"
// - Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи
// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
//     Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали. Всі властивості авто в обному блоці
// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
//     Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.
//     Для кожної властивості створити всередені блока автомоблія свій блок.

// let arr = [
//     {
//         name: 'BMW',
//         year: 1999,
//         model: 'X-8',
//         color: 'black',
//         enginePower: 599,
//     },
//     {
//         name: 'Mercedes',
//         year: 1999,
//         model: 'AMG C 43 4MATIC',
//         color: 'black',
//         enginePower: 599,
//     },
//     {
//         name: 'Audi',
//         year: 1999,
//         model: 'A8',
//         color: 'black',
//         enginePower: 599,
//     },
//         {
//         name: 'Nissan',
//         year: 1999,
//         model: 'X-Trail',
//         color: 'black',
//         enginePower: 599,
//     },
//         {
//         name: 'Porsche',
//         year: 1999,
//         model: 'Cayenne',
//         color: 'black',
//         enginePower: 599,
//     },
//     {
//         name: 'Renault',
//         year: 1999,
//         model: 'Logan',
//         color: 'black',
//         enginePower: 599,
//     },
//     {
//         name: 'Suzuki',
//         year: 1999,
//         model: 'Vitara',
//         color: 'black',
//         enginePower: 599,
//     },
//     {
//         name: 'Toyota',
//         year: 1999,
//         model: 'Camry',
//         color: 'black',
//         enginePower: 599,
//     },
//     {
//         name: 'Volkswagen',
//         year: 1999,
//         model: 'Touareg',
//         color: 'black',
//         enginePower: 599,
//     },
//     {
//         name: 'Ford',
//         year: 1999,
//         model: 'Mustang GT',
//         color: 'black',
//         enginePower: 599,
//     },
// ];
// function addListUsers(arrayUsers, idTag) {
//     let block = document.getElementById(idTag);
//
//     for (let i = 0; i < arrayUsers.length; i++) {
//         const arr = arrayUsers[i];
//         let div = document.createElement('div');
//         let name = document.createElement('h2');
//         let model = document.createElement('h3');
//         let color = document.createElement('h3');
//
//         name.innerHTML = `name : ${arr.name}`;
//         model.innerHTML = `model : ${arr.model}`;
//         color.innerHTML = `color : ${arr.color}`;
//
//         div.appendChild(name);
//         div.appendChild(model);
//         div.appendChild(color);
//
//         block.appendChild(div);
//     }
//
// }
// addListUsers(arr, 'list');

// (на основі минулого ДЗ)
// **- функція приймає 2 масиви з рівною кількістю об'єктів та з'єднює в один об'єкт користувача та місто з відповідними "id" та "user_id",
// та повертає масив цих з'єднаних об'єктів.
//     Приклад масивів:
//
// let usersWithId = [
//     {id: 1, name: 'vasya', age: 31, status: false},
//     {id: 2, name: 'petya', age: 30, status: true},
//     {id: 3, name: 'kolya', age: 29, status: true},
//     {id: 4, name: 'olya', age: 28, status: false},];
//
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'},
// ];
//
// function split(userArray1, cityArray2){
//     let users = [...userArray1];
//     let cities = [...cityArray2];
//
//     for (const city of cities) {
//         for (const user of users) {
//             if (city.user_id === user.id){
//                 user.adress = city;
//             }
//         }
//     }
//     return users;
// }
//
// let split1 = split(usersWithId, citiesWithId);
// console.log('usersWithId',usersWithId);
// console.log('citiesWithId',citiesWithId);
// console.log('__________________________________________');
// console.log(split1);


