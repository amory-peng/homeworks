// function hammerTime(time) {
//   setTimeout(() => console.log(`${time} is hammertime`), time);
// }
//
// hammerTime(1000);
//
// window.setTimeout(alert('hammertime'), 3000);

// const readline = require('readline');
//
// const reader = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });
//
// function teaTime() {
//   let r1, r2;
//   reader.question('tea?', (res) => {
//     r1 =res;
//     console.log(`you replied: ${r1}`);
//
//     reader.question('biscuits?', (res) => {
//       r2 =res;
//       console.log(`you replied: ${r2}`);
//       reader.close();
//       console.log(`${r1} tea, ${r2} biscuits`);
//     });
//   });
//
// }

//teaTime();

function Cat () {
   this.name = 'Markov';
   this.age = 3;
 }

 function Dog () {
   this.name = 'Noodles';
   this.age = 4;
 }

 Dog.prototype.chase = function (cat) {
   console.log(`My name is ${this.name} and I'm chasing ${cat.name}! Woof!`)
 };

 const Markov = new Cat ();
 const Noodles = new Dog ();

Noodles.chase(Markov);

Noodles.chase.call(Markov, Noodles);
