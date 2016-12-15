
function testFn () {
  const favoriteFood = "pizza";

  if (true) {
    let favoriteFood = "ramen";
    console.log(favoriteFood);
  }

  console.log(favoriteFood);
}


function madLib(arg1, arg2, arg3) {
  var str = `We ${arg1} the ${arg2} ${arg3}`;
  console.log(str);
}

// madLib("have", "best", "words");

function isSub(str, sub) {
  console.log(str.includes(sub));
}

// isSub("happiness", "hap")

function fizzBuzz(arr) {
 let out = [];
 for (var i = 0; i < arr.length; i++) {
   if ((arr[i] % 3 == 0) || (arr[i] % 5 == 0)) {
     out.push(arr[i])
   }
 }
 console.log(out);
}

function isPrime(num) {
  if (num < 2) {
    return false;
  }

  for (var i = 2; i < num; i ++) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
}

function sumOfNPrimes(num) {
  let sum = 0;
  let count = 0;
  n = 2
  while (count < num) {
    if (isPrime(n)) {
      sum += n;
      count += 1
    }
    n += 1;
  }
  return sum;
}

// console.log(isPrime(4));
// console.log(sumOfNPrimes(4));

function titleize(arr, callback) {
  let out = arr.map(name => `Mx. ${name} Jingelheimer Schmidt`);
  callback(out);
}

titleize(["Mary", "Jim", "Bob"], (names) =>{
  names.forEach(name => console.log(name));
});

function Elephant(name, tricks) {
  this.name = name;
  this.tricks = tricks;
}

Elephant.prototype.trumpet = function() {
  console.log(`${this.name} goes honk`);
};

bob = new Elephant("Bob", ["jump for joy"]);

bob.trumpet();

function dinerBreakfast() {
  let order = "I'd like cheesy scrambled eggs please.";
  console.log(order);

  return function (food) {
    order = `${order.slice(0, order.length - 8)} and ${food} please.`;
    console.log(order);
  };
};

test = dinerBreakfast();
test("toast");
test("juice");
