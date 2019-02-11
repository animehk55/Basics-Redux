
// const person = {
//     name: 'Animesh',
//     age: 27,
//     location: {
//         city: 'Gandhinagar',
//         temp: -89
//     }
// };

// // const name = person.name;
// // const age = person.age;
// // console.log(`${name} is ${age}.`)


// // const { name, age } = person;
// // console.log(`${name} age is ${age}.`)
// // console.log(name, age)
// // console.log(person.name, person.age, person.location.city, person.location.temp);

// // console.log(`Hey ${person.name} today is very cold as temprature is ${person.location.temp}, how will the younger ages like ${person.age} would survive.`)

// const {city, temp : temprature } = person.location;
// const {name: firstName = 'Helloish', age} = person;
// console.log(`Hey ${firstName} today is very cold as temprature is ${temprature}, how will the younger ages like ${age} would survive.`);


// // IMPORTANT if name does not exist then it will automatically take the default name and remove the text to be undefined


// const book = {
//     title: 'Sonagreens',
//     author: 'Rayan de Makeothy',
//     publisher: {
//         name: 'animesh sof'
//     }
// }
// const { name: first_Name = 'Self-Published' } = book.publisher;
// // console.log(book.title, book.author, book.publisher.name);
// console.log(book.title, book.author, first_Name);







// -------
// Array destructuring 

const address = ['2/39', 'Himachal', 'Dehradun', '1544' ];
const [ , city= 'Lucknow', ] = address;

console.log(`you are at ${city}`);