// let me = {
//     name: 'Misha',
//     age: 21,
//     city: 'Lviv',
// }
// let tea = {
//     color: 'green',
//     brand: 'Greenfield',
//     series: 'Golden Ceylon',
// }
//
// let winter = {
//     season: 'winter',
//     temperature: -40,
//     snow: false,
// }
//
// let candy = {
//     planet: 'Mars',
//     position: 4,
//     martians: true,
// }
//
// let music = {
//     musicBand: 'Brutto',
//     genre: 'punk-rock',
//     vocal: 'Sergey Mihalok'
// }

// - создать 5 объектов с полностью разным набором полей. В каждом объекте должен присутсвовать массив и внутренний объект.
// Опишите что угодно, машину, картину, болт... Пример : let man = { name: 'kokos', skills : ['java','js'] , wife: { name: 'cherry' } };
//
// let phone = {
//     name: 'iPhone',
//     series: [13, '13S', '13Pro'],
//     characteristic: {
//         сolor: 'black',
//         price: 7000,
//         screen: 10.4,
//     }
// }
// let group = {
//     genre: 'alternative rock',
//     vocal: ['scream', 'growl'],
//     band: {
//         vocal: 'Vasya Pupkin',
//         guitar: 'Ivan Ivanov',
//         drums: 'Stepan Giga',
//         guitar2: 'Oleg Skripka'
//     }
// }
// let jetBrains = {
//     product: {
//         programs: ['InteliJ IDEA', 'WebStorm', 'AppCode', 'DataGrip'],
//         capital: 1800000000,
//         date: 2000,
//         band: {
//             country: 'Germany',
//             typeCompamy: 'private company',
//             color: 'orange',
//         }
//
//     },
//
// }
// let ya = {
//     characteristic: {
//         name: 'Misha',
//         age: 21,
//         city: 'Lviv',
//
//     abc: 123,
//     hobbies:['sleep','walk','eat']
//     }
// }
//
// let car ={
//     producer: 'BMW',
//     type: 'universal',
//     year:[1666,1777,1888,1999],
//     characteristic:{
//         series:'X',
//         color: 'black',
//         number: 8,
//     }
// }
//
//
// for(let key in me){
//     console.log([key]);
// }
// for(let key2 in tea){
//     console.log([key2]);
// }
// for(let key3 in winter){
//     console.log([key3]);
// }
// for(let key4 in candy ){
//     console.log([key4]);
// }
// for(let key5 in music){
//     console.log([key5]);
// }
// _________________________

// for(let key6 in phone){
//     console.log([key6]);
// }
// for(let key7 in group){
//     console.log([key7]);
// }
// for(let key8 in jetBrains){
//     console.log([key8]);
// }
// for(let key9 in ya ){
//     console.log([key9]);
// }
// for(let key10 in car){
//     console.log([key10]);
// }


// - При помощи Object.keys вывести все ключи всех объектов из задания 1 и 2
// console.log(Object.keys(me));
// console.log(Object.keys(tea));
// console.log(Object.keys(winter));
// console.log(Object.keys(candy));
// console.log(Object.keys(music));
// ________________________________
// console.log(Object.keys(phone));
// console.log(Object.keys(group));
// console.log(Object.keys(jetBrains));
// console.log(Object.keys(ya));
// console.log(Object.keys(car));


// - Создать массив из 10 объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет. (Значаения полей могу быть выдуманными)
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
// ]
//
// console.log(arr);

// - Создать массив объектов cities и заполнить его объектами с полями название, популяция, страна, регион. (Значаения полей могу быть выдуманными)

// let cities = [
//     {
//         name: 'Lviv',
//         people: 727000,
//         country: 'Ukraine',
//         region: 'Earth'
//     },
//     {
//         name: 'Kyiv',
//         people: 2800000,
//         country: 'Ukraine',
//         comfortable: true
//     },
//     {
//         name: 'Kremenchuk',
//         people: 219000,
//         country: 'Ukraine',
//         region: 'Earth'
//     },
//     {
//         name: 'Paris',
//         people: 10000000,
//         country: 'France',
//         region: 'Earth'
//     },
//     {
//         name: 'Pekin',
//         people: 21540000,
//         country: 'Ukraine',
//         region: 'Earth'
//     },
// ]
// console.log(cities);

// - Создать массив объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет, водитель. Водитель является отдельным объектом с полями имя, возраст, пол, стаж.

// let arr = [
//     {
//         name: 'BMW',
//         year: 1999,
//         model: 'X-8',
//         color: 'black',
//         enginePower: 599,
//         driver: {
//             name: 'Stepan',
//             age: 40,
//             sex: 'man',
//             experience: '20 years',
//         }
//     },
//     {
//         name: 'Mercedes',
//         year: 1999,
//         model: 'AMG C 43 4MATIC',
//         color: 'black',
//         enginePower: 599,
//         driver: {
//             name: 'Grisha',
//             age: 40,
//             sex: 'man',
//             experience: '20 years',
//         }
//     },
//     {
//         name: 'Audi',
//         year: 1999,
//         model: 'A8',
//         color: 'black',
//         enginePower: 599,
//         driver: {
//             name: 'Stepan',
//             age: 40,
//             sex: 'man',
//             experience: '20 years',
//         }
//     },
//         {
//         name: 'Nissan',
//         year: 1999,
//         model: 'X-Trail',
//         color: 'black',
//         enginePower: 599,
//             driver: {
//                 name: 'Grisha',
//                 age: 40,
//                 sex: 'man',
//                 experience: '20 years',
//             }
//     },
//         {
//         name: 'Porsche',
//         year: 1999,
//         model: 'Cayenne',
//         color: 'black',
//         enginePower: 599,
//             driver: {
//                 name: 'Stepan',
//                 age: 40,
//                 sex: 'man',
//                 experience: '20 years',
//             }
//     },
//     {
//         name: 'Renault',
//         year: 1999,
//         model: 'Logan',
//         color: 'black',
//         enginePower: 599,
//         driver: {
//             name: 'Grisha',
//             age: 40,
//             sex: 'man',
//             experience: '20 years',
//         }
//     },
//     {
//         name: 'Suzuki',
//         year: 1999,
//         model: 'Vitara',
//         color: 'black',
//         enginePower: 599,
//         driver: {
//             name: 'Stepan',
//             age: 40,
//             sex: 'man',
//             experience: '20 years',
//         }
//     },
//     {
//         name: 'Toyota',
//         year: 1999,
//         model: 'Camry',
//         color: 'black',
//         enginePower: 599,
//         driver: {
//             name: 'Grisha',
//             age: 40,
//             sex: 'man',
//             experience: '20 years',
//         }
//     },
//     {
//         name: 'Volkswagen',
//         year: 1999,
//         model: 'Touareg',
//         color: 'black',
//         enginePower: 599,
//         driver: {
//             name: 'Stepan',
//             age: 40,
//             sex: 'man',
//             experience: '20 years',
//         }
//     },
//     {
//         name: 'Ford',
//         year: 1999,
//         model: 'Mustang GT',
//         color: 'black',
//         enginePower: 599,
//         driver: {
//             name: 'Grisha',
//             age: 40,
//             sex: 'man',
//             experience: '20 years',
//         }
//     },
// ]

// - проитерировать каждый массив из задания 5,6,7 при помощи while.
// let i = 0;
// while(i < cities.length){
//     console.log(cities[i]);
//     i++;
// }

// let i = 0;
// while(i < arr.length){
//     console.log(arr[i]);
//     i++;
// }

// - проитерировать каждый массив из задания 5,6,7 при помощи for .
// for(let i = 0; i < cities.length; i++){
//     console.log(cities[i]);
// }

// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }

// - проитерировать каждый массив из задания 5,6,7 при помощи  for of.
// for(let elem of cities){
//     console.log(elem);
// }

// for(let elem of arr){
//     console.log(elem);
// }

// - взять объекты из задания 1 и превратить каждый в json.
// let me = {
//     name: 'Misha',
//     age: 21,
//     city: 'Lviv',
// }
// let box1 = JSON.stringify(me);
// console.log(box1);
//
// let tea = {
//     color: 'green',
//     brand: 'Greenfield',
//     series: 'Golden Ceylon',
// }
// let box2 = JSON.stringify(tea);
// console.log(box2);
//
// let winter = {
//     season: 'winter',
//     temperature: -40,
//     snow: false,
// }
// let box3 = JSON.stringify(winter);
// console.log(box3);
//
// let candy = {
//     planet: 'Mars',
//     position: 4,
//     martians: true,
// }
// let box4 = JSON.stringify(candy);
// console.log(box4);
//
// let music = {
//     musicBand: 'Brutto',
//     genre: 'punk-rock',
//     vocal: 'Sergey Mihalok'
// }
// let box5 = JSON.stringify(music);
// console.log(box5);

// - взять json из задания 11 и превратить их обратно в объекты.
// let me = {
//     name: 'Misha',
//     age: 21,
//     city: 'Lviv',
// }
// let box1 = JSON.stringify(me);
// console.log(box1);
//
// let box1Reverse = JSON.parse(box1);
// console.log(box1Reverse);
//
// let tea = {
//     color: 'green',
//     brand: 'Greenfield',
//     series: 'Golden Ceylon',
// }
// let box2 = JSON.stringify(tea);
// console.log(box2);
//
// let box2Reverse = JSON.parse(box2);
// console.log(box2Reverse);
//
// let winter = {
//     season: 'winter',
//     temperature: -40,
//     snow: false,
// }
// let box3 = JSON.stringify(winter);
// console.log(box3);
//
// let box3Reverse = JSON.parse(box3);
// console.log(box3Reverse);
//
// let candy = {
//     planet: 'Mars',
//     position: 4,
//     martians: true,
// }
// let box4 = JSON.stringify(candy);
// console.log(box4);
//
// let box4Reverse = JSON.parse(box4);
// console.log(box4Reverse);
//
// let music = {
//     musicBand: 'Brutto',
//     genre: 'punk-rock',
//     vocal: 'Sergey Mihalok'
// }
// let box5 = JSON.stringify(music);
// console.log(box5);
//
// let box5Reverse = JSON.parse(box5);
// console.log(box5Reverse);

// - взять массив из задания 5,в цикле перебрать его объекты превратив их в json .
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
// ]
//
// for (i=0; i<arr.length; i++){
//     let car = JSON.stringify(arr[i])
//     console.log(car);
// }

// - взять массив из задания 6,в цикле перебрать его объекты превратив их в json .

// let cities = [
//     {
//         name: 'Lviv',
//         people: 727000,
//         country: 'Ukraine',
//         region: 'Earth'
//     },
//     {
//         name: 'Kyiv',
//         people: 2800000,
//         country: 'Ukraine',
//         comfortable: true
//     },
//     {
//         name: 'Kremenchuk',
//         people: 219000,
//         country: 'Ukraine',
//         region: 'Earth'
//     },
//     {
//         name: 'Paris',
//         people: 10000000,
//         country: 'France',
//         region: 'Earth'
//     },
//     {
//         name: 'Pekin',
//         people: 21540000,
//         country: 'Ukraine',
//         region: 'Earth'
//     },
// ]
//
// for(let i of cities){
//     let box = JSON.stringify(i);
//     console.log(box);
// }

// - взять массив из задания 7,в цикле перебрать его объекты превратив их в json и сразу скоприовать в новый массив.
// let arr = [
//     {
//         name: 'BMW',
//         year: 1999,
//         model: 'X-8',
//         color: 'black',
//         enginePower: 599,
//         driver: {
//             name: 'Stepan',
//             age: 40,
//             sex: 'man',
//             experience: '20 years',
//         }
//     },
//     {
//         name: 'Mercedes',
//         year: 1999,
//         model: 'AMG C 43 4MATIC',
//         color: 'black',
//         enginePower: 599,
//         driver: {
//             name: 'Grisha',
//             age: 40,
//             sex: 'man',
//             experience: '20 years',
//         }
//     },
//     {
//         name: 'Audi',
//         year: 1999,
//         model: 'A8',
//         color: 'black',
//         enginePower: 599,
//         driver: {
//             name: 'Stepan',
//             age: 40,
//             sex: 'man',
//             experience: '20 years',
//         }
//     },
//         {
//         name: 'Nissan',
//         year: 1999,
//         model: 'X-Trail',
//         color: 'black',
//         enginePower: 599,
//             driver: {
//                 name: 'Grisha',
//                 age: 40,
//                 sex: 'man',
//                 experience: '20 years',
//             }
//     },
//         {
//         name: 'Porsche',
//         year: 1999,
//         model: 'Cayenne',
//         color: 'black',
//         enginePower: 599,
//             driver: {
//                 name: 'Stepan',
//                 age: 40,
//                 sex: 'man',
//                 experience: '20 years',
//             }
//     },
//     {
//         name: 'Renault',
//         year: 1999,
//         model: 'Logan',
//         color: 'black',
//         enginePower: 599,
//         driver: {
//             name: 'Grisha',
//             age: 40,
//             sex: 'man',
//             experience: '20 years',
//         }
//     },
//     {
//         name: 'Suzuki',
//         year: 1999,
//         model: 'Vitara',
//         color: 'black',
//         enginePower: 599,
//         driver: {
//             name: 'Stepan',
//             age: 40,
//             sex: 'man',
//             experience: '20 years',
//         }
//     },
//     {
//         name: 'Toyota',
//         year: 1999,
//         model: 'Camry',
//         color: 'black',
//         enginePower: 599,
//         driver: {
//             name: 'Grisha',
//             age: 40,
//             sex: 'man',
//             experience: '20 years',
//         }
//     },
//     {
//         name: 'Volkswagen',
//         year: 1999,
//         model: 'Touareg',
//         color: 'black',
//         enginePower: 599,
//         driver: {
//             name: 'Stepan',
//             age: 40,
//             sex: 'man',
//             experience: '20 years',
//         }
//     },
//     {
//         name: 'Ford',
//         year: 1999,
//         model: 'Mustang GT',
//         color: 'black',
//         enginePower: 599,
//         driver: {
//             name: 'Grisha',
//             age: 40,
//             sex: 'man',
//             experience: '20 years',
//         }
//     },
// ]
//
// for(let i of arr){
//     let arr1 = [];
//     let box = JSON.stringify(i)
//     arr1.push(box);
//     console.log(arr1);
// }

// - Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом.
//   Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills.

// let users = [
//     {
//         name: 'Mykola',
//         age: 26,
//         skills: ['java', 'php', 'node.js'],
//     },
//     {
//         name: 'Grigoriy',
//         age: 47,
//         skills: ['java', 'javascript'],
//     },
//     {
//         name: 'Stepan',
//         age: 59,
//         skills: ['java', 'c++'],
//     },
// ];
//
// for(let user of users){
//     for(let i in user){
//         console.log(user[i])
//     }
// }

// - Скопировать все skills всех пользователей в отедльный массив
// let arr = [];
// for(let user of users){
//     arr.push(user['skills']);
// }
// console.log(arr);

// - За допомогою 2х циклів циклів проітеррувати  даний масив і масив кожного об'єкта.
// let users = [
//     {name: 'vasya', age: 31, status: false, skills: ['java', 'js']},
//     {name: 'petya', age: 30, status: true, skills: ['java', 'js', 'html']},
//     {name: 'kolya', age: 29, status: true, skills: ['mysql', ',mongo']},
//     {name: 'olya', age: 28, status: false, skills: ['java', 'js']},
//     {name: 'max', age: 30, status: true, skills: ['mysql', ',mongo']}
// ];
//
// for(let user of users){
//     for(let elem in user){
//         console.log(user[elem]);
//     }
// }

// - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.
// let arr = [];
// for(let user of users){
//     arr.push(user['address']);
// }
// console.log(arr);

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги
// document.createElement. Всі данні в одному блоці. (***?***)

// let container = document.querySelector('.container');
//
// for (let user of users) {
// let newUser = document.createElement("div");
// newUser.innerHTML = `name: ${user.name} age: ${user.age} status: ${user.status}`;
// console.log(newUser);
// container.appendChild(newUser);       //??
// newUser.style.border = ('1px solid black');
// }

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement,
// розділивши всі властивості по своїм блокам (div>div*4) (***?***)

// let container = document.querySelector('.container');
//
// for (let user of users) {
// let newUser = document.createElement("div>div*4"); //??
// newUser.innerHTML = `name: ${user.name} age: ${user.age} status: ${user.status}`;
// console.log(newUser);
// container.appendChild(newUser); //??
// newUser.style.border = ('1px solid black');
// }

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement,
// розділивши всі властивості по своїм блокам ,блок з адресою зробити окремим блоком, з блоками для кожної властивості (***?***)



// - Дано 2 масиви з рівною кількістю об'єктів.

// let usersWithId = [
//     {id: 1, name: 'vasya', age: 31, status: false, address: {}},
//     {id: 2, name: 'petya', age: 30, status: true, address: {}},
//     {id: 3, name: 'kolya', age: 29, status: true, address: {}},
//      {id: 4, name: 'olya', age: 28, status: false, address: {}},
//     ];

// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'},
//     ];

// for(i = 0; i < usersWithId.length; i++){
//     for(j = 0; j <citiesWithId.length; j++){
//         if(usersWithId[i].id == citiesWithId[j].user_id){
//             usersWithId[i].address = citiesWithId[j];
//         }
//     }
// }
// console.log(usersWithId);

// - створити розмітці блок з id, class та текстом в середені. Зчитати окремо цей текст з селекторів по id , class та тегу

// let elem = document.querySelector('#divka');
// console.log(elem);
// let elem = document.querySelector('.divka');
// console.log(elem);

// - змінити цей текст використовуючи селектори id, class,  tag

// let elem = document.querySelector('#divka');
// elem.innerHTML = 'Okten2020'
// console.log(elem);
// let elem = document.querySelector('.divka');
// elem.innerHTML = 'OktenWeb';
// console.log(elem);

// - змінити висоту та ширину блоку використовуючи селектори id, class,  tag

// let elem = document.getElementById('divka')
// elem.style.width = '400px';
// elem.style.height = '400px';
// console.log(elem);
//

// - за допомоги document.createElement та appendChild створити таблицю на 1 рядок з трьома ячейками всередені

// let main = document.createElement('div');
// main.style.width = '300px';
// main.style.height = '150px';
// main.style.backgroundColor = '#000000';

// let body = document.querySelector('body');
// body.appendChild(main);

// for(i = 0; i < 3; i++){
//     let divka = document.createElement('div');
//     divka.style.width = '100px';
//     divka.style.height = '150px';
//     divka.style.border = '1px solid white';
//     main.appendChild(divka);
//     divka.style.display = 'inline-block';
// }

// - за допомоги document.createElement, appendChild та циклу створити таблицю на 10 рядків з трьома ячейками всередені

// let main = document.createElement('div');
// main.style.width = '300px';
// main.style.height = '1050px';
// main.style.backgroundColor = '#000000';

// let body = document.querySelector('body');
// body.appendChild(main);



// for(i = 0; i < 30; i++){
//     let divka = document.createElement('div');
//     divka.style.width = '100px';
//     divka.style.height = '100px';
//     divka.style.border = '1px solid white';
//     divka.style.margin = '0px';
//     main.appendChild(divka);
//     divka.style.display = 'inline-block';
//     divka.style.boxSizing = 'border-box';
// }

// - за допомоги document.createElement, appendChild та 2х циклів створити таблицю на 10 рядків з 5 ячейками всередені

// let table = document.querySelector('#emptyTable');
// for (let i = 0; i < 10; i++) {
// let tr = document.createElement('tr');
// for (let j = 0; j < 5; j++) {
// let td = document.createElement('td');
// td.style.border = '1px solid black';
// td.style.width = '200px';
// td.style.height = '50px';
// td.classList.add('forTd')
// tr.appendChild(td);
// }
// table.appendChild(tr);
// }

// - за допомоги document.createElement, appendChild та 2х циклів створити таблицю на n рядків з m ячейками всередені. n та m отримати з prompt
// let n = +prompt('Введіть рядки');
// let m = +prompt('Введіть стовпці');
// let table = document.querySelector('#emptyTable');

// for (let i = 0; i < n; i++) {
// let tr = document.createElement('tr');

// for (let j = 0; j < m; j++) {
// let td = document.createElement('td');
// td.style.border = '1px solid black';
// td.style.width = '200px';
// td.style.height = '50px';
// td.classList.add('forTd')
// tr.appendChild(td);
// }
// table.appendChild(tr);
// }