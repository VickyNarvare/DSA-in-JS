// let arr = [1, 2, 3, 2, 4, 5, 1, 1, 1];
// let count = {};
// for (let i = 0; i < arr.length; i++) {
//   if (count[arr[i]]) {
//     count[arr[i]] += 1;
//   } else {
//     count[arr[i]] = 1;
//   }
// }
// //! chack most fecvent
// for (let val in count) {
// }

// let arrOfObj = [
//   { name: "vicky", age: 20 },
//   { name: "rishi", age: 21 },
// ];
// const getAdult = () => {
//     for(let  of arrOfObj)
// };

// --------------
// function introduce(city, country) {
//   console.log(`${this.name} from ${city} `);
// }
// const person = {
//   name: "Ritik",
// };
// introduce.apply(person, ["inodre"]);
// ----------------

// const user = {
//   name: "Ritik",
//   greet() {
//     console.log(this.name);
//   },
// };
// const fn = user.greet.bind(user);
// fn();

// ----------------
// const animal = {
//   eats: true,
// };
// const dog = Object.create(animal);
// console.log(dog.eats);
// ----------------
function printRightTriangleNumbers(n) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      process.stdout.write(`${String.fromCharCode(64 + j)} `);
    }
    console.log();
  }
}
printRightTriangleNumbers(5);
