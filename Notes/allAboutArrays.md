# JavaScript Arrays — सम्पूर्ण गाइड (Hindi)

# 🔴 SECTION 1 — Most Important Topics

> ये topics हर interview में पूछे जाते हैं। इन्हें ज़रूर तैयार करो।

---

## 1. Array क्या होता है?

> 🎯 **Interview Definition:** Array एक ordered collection है जिसमें multiple values एक variable में store होती हैं। JavaScript का Array dynamic है — इसमें mixed data types रख सकते हैं और size automatically बदलती है।

```js
const fruits = ["Apple", "Banana", "Mango"];
const mixed = [1, "hello", true, null, { name: "Rahul" }];

console.log(fruits[0]); // "Apple"  (0-based index)
console.log(fruits.length); // 3
```

---

## 2. Array बनाने के तरीके

> 🎯 **Interview Definition:** Array literal `[]` सबसे common और preferred तरीका है। `new Array()` से भी बना सकते हैं लेकिन इसमें trap है — `new Array(3)` 3 elements नहीं, size-3 का empty array बनाता है। `Array.from()` और `Array.of()` modern तरीके हैं।

```js
// 1. Array Literal (best practice)
const arr = [1, 2, 3];

// 2. new Array() — trap वाला!
const a = new Array(3); // [ <3 empty items> ] — size 3, NOT [3]
const b = new Array(1, 2); // [1, 2]

// 3. Array.from() — iterable या array-like से
Array.from("hello"); // ["h","e","l","l","o"]
Array.from({ length: 3 }, (_, i) => i + 1); // [1, 2, 3]
Array.from(new Set([1, 2, 2, 3])); // [1, 2, 3]

// 4. Array.of() — arguments से array
Array.of(1, 2, 3); // [1, 2, 3]

// 5. Spread से copy
const copy = [...arr]; // [1, 2, 3]
```

---

## 3. Array Methods — Add / Remove

> 🎯 **Interview Definition:** `push/pop` array के end पर काम करते हैं, `unshift/shift` start पर। `splice` सबसे powerful है — किसी भी position पर add/remove कर सकता है। `push` और `pop` O(1) हैं इसलिए `unshift/shift` से fast हैं।

```js
const arr = [1, 2, 3];

// End पर
arr.push(4); // [1, 2, 3, 4] — add, returns new length
arr.pop(); // [1, 2, 3]   — remove last, returns removed element

// Start पर
arr.unshift(0); // [0, 1, 2, 3] — add
arr.shift(); // [1, 2, 3]    — remove first

// splice(startIndex, deleteCount, ...itemsToAdd)
arr.splice(1, 1); // [1, 3]     — index 1 से 1 element हटाओ
arr.splice(1, 0, 99, 100); // [1, 99, 100, 3] — बिना हटाए add करो
arr.splice(1, 2, 55); // [1, 55, 3] — 2 हटाओ, 1 add करो
```

---

## 4. map() — Transform करना

> 🎯 **Interview Definition:** `map()` हर element पर एक function apply करके **नया array** return करता है — original array unchanged रहता है। जब भी array के हर element को transform करना हो, `map()` use करो।

```js
const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map((n) => n * 2); // [2, 4, 6, 8, 10]
const squared = numbers.map((n) => n ** 2); // [1, 4, 9, 16, 25]
const strings = numbers.map((n) => `Item ${n}`); // ["Item 1", ...]

// Objects array के साथ
const users = [
  { name: "Rahul", age: 25 },
  { name: "Priya", age: 22 },
];
const names = users.map((user) => user.name); // ["Rahul", "Priya"]
```

---

## 5. filter() — छानना

> 🎯 **Interview Definition:** `filter()` हर element को एक condition से check करता है और जो elements `true` return करें, उनका **नया array** बनाता है। Original array unchanged रहता है।

```js
const numbers = [1, 2, 3, 4, 5, 6];

const evens = numbers.filter((n) => n % 2 === 0); // [2, 4, 6]
const greaterThan3 = numbers.filter((n) => n > 3); // [4, 5, 6]

// Objects के साथ
const users = [
  { name: "Rahul", active: true },
  { name: "Priya", active: false },
  { name: "Amit", active: true },
];
const activeUsers = users.filter((u) => u.active);
// [{ name: "Rahul"... }, { name: "Amit"... }]
```

---

## 6. reduce() — सब मिलाकर एक value

> 🎯 **Interview Definition:** `reduce()` array के सभी elements को एक single value में "reduce" करता है। एक accumulator (running result) रखता है और हर element के साथ update होता है। Sum, product, grouping, flattening — सब `reduce()` से हो सकता है।

```js
const numbers = [1, 2, 3, 4, 5];

// Sum
const sum = numbers.reduce((acc, curr) => acc + curr, 0); // 15

// Product
const product = numbers.reduce((acc, curr) => acc * curr, 1); // 120

// Max value
const max = numbers.reduce((acc, curr) => (curr > acc ? curr : acc), -Infinity); // 5

// Array → Object (grouping)
const fruits = ["apple", "banana", "apple", "mango", "banana", "apple"];
const count = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});
// { apple: 3, banana: 2, mango: 1 }

// Flatten nested array
const nested = [
  [1, 2],
  [3, 4],
  [5, 6],
];
const flat = nested.reduce((acc, arr) => [...acc, ...arr], []);
// [1, 2, 3, 4, 5, 6]
```

---

## 7. find() और findIndex()

> 🎯 **Interview Definition:** `find()` पहला matching element return करता है (पूरा element, not index)। `findIndex()` पहले matching element का index return करता है। दोनों condition match होते ही रुक जाते हैं — पूरा array traverse नहीं करते।

```js
const users = [
  { id: 1, name: "Rahul" },
  { id: 2, name: "Priya" },
  { id: 3, name: "Amit" },
];

const user = users.find((u) => u.id === 2); // { id: 2, name: "Priya" }
const index = users.findIndex((u) => u.id === 2); // 1

// Not found
users.find((u) => u.id === 99); // undefined
users.findIndex((u) => u.id === 99); // -1
```

---

## 8. forEach() vs map()

> 🎯 **Interview Definition:** `forEach()` हर element पर function चलाता है लेकिन **कुछ return नहीं करता** — side effects के लिए use होता है (logging, DOM update)। `map()` नया array return करता है। अगर result चाहिए तो `map()`, सिर्फ iterate करना हो तो `forEach()`।

```js
const arr = [1, 2, 3];

// forEach — return नहीं होता
arr.forEach((item, index) => {
  console.log(`Index ${index}: ${item}`);
});

// map — नया array मिलता है
const result = arr.map((item) => item * 2); // [2, 4, 6]

// ❌ Common mistake
const wrong = arr.forEach((item) => item * 2); // undefined — forEach से कुछ नहीं मिलता
```

---

## 9. some() और every()

> 🎯 **Interview Definition:** `some()` check करता है कि **कम से कम एक** element condition satisfy करे — मिलते ही `true` return करके रुक जाता है। `every()` check करता है कि **सभी** elements condition satisfy करें — एक भी fail हो तो `false` return करके रुक जाता है।

```js
const numbers = [1, 2, 3, 4, 5];

numbers.some((n) => n > 4); // true  (5 > 4)
numbers.some((n) => n > 10); // false

numbers.every((n) => n > 0); // true  (सब positive)
numbers.every((n) => n > 3); // false (1,2,3 fail)

// Practical use
const scores = [85, 92, 78, 95, 88];
const anyFail = scores.some((s) => s < 40); // false
const allPass = scores.every((s) => s >= 40); // true
```

---

## 10. includes(), indexOf(), lastIndexOf()

> 🎯 **Interview Definition:** `includes()` बताता है कि element array में है या नहीं (boolean)। `indexOf()` पहली occurrence का index देता है, `lastIndexOf()` आखिरी का। `indexOf()` `NaN` नहीं ढूंढ सकता लेकिन `includes()` ढूंढ सकता है।

```js
const arr = [1, 2, 3, 2, 4];

arr.includes(2); // true
arr.includes(99); // false
arr.includes(NaN); // true (NaN भी ढूंढता है!)

arr.indexOf(2); // 1 (पहली बार)
arr.lastIndexOf(2); // 3 (आखिरी बार)
arr.indexOf(99); // -1 (नहीं मिला)

// ❌ indexOf NaN नहीं ढूंढ सकता
[NaN].indexOf(NaN); // -1 (wrong!)
[NaN].includes(NaN); // true (correct ✅)
```

---

## 11. slice() — Part निकालना

> 🎯 **Interview Definition:** `slice(start, end)` array का एक portion निकालकर **नया array** return करता है — original unchanged रहता है। `end` index exclusive है (वो include नहीं होता)। Negative index भी work करता है।

```js
const arr = [0, 1, 2, 3, 4, 5];

arr.slice(1, 4); // [1, 2, 3]  (index 1 से 3 तक)
arr.slice(2); // [2, 3, 4, 5] (index 2 से end तक)
arr.slice(-2); // [4, 5] (आखिरी 2)
arr.slice(-4, -1); // [2, 3, 4]

// Array copy करने के लिए
const copy = arr.slice(); // [0, 1, 2, 3, 4, 5]
```

> **slice vs splice:** `slice` = copy निकालना (original safe), `splice` = original array modify करना।

---

## 12. sort() — Sorting

> 🎯 **Interview Definition:** `sort()` by default elements को string के रूप में sort करता है — इसीलिए numbers के लिए comparator function देना ज़रूरी है। `sort()` original array को **in-place modify** करता है।

```js
// ❌ Default sort — strings की तरह sort होता है
[10, 9, 2, 21, 3].sort(); // [10, 2, 21, 3, 9] — WRONG!

// ✅ Number sort — comparator दो
[10, 9, 2, 21, 3].sort((a, b) => a - b); // [2, 3, 9, 10, 21] ascending
[10, 9, 2, 21, 3].sort((a, b) => b - a); // [21, 10, 9, 3, 2] descending

// String sort
["Banana", "Apple", "Mango"].sort(); // ["Apple", "Banana", "Mango"]

// Object array sort
const users = [
  { name: "Rahul", age: 25 },
  { name: "Amit", age: 22 },
];
users.sort((a, b) => a.age - b.age); // age के हिसाब से ascending
```

---

## 13. flat() और flatMap()

> 🎯 **Interview Definition:** `flat(depth)` nested arrays को एक level पर "flatten" करता है। `flat(Infinity)` से कितनी भी depth flatten हो जाती है। `flatMap()` = `map()` + `flat(1)` एक साथ — map करो और flatten करो।

```js
const nested = [1, [2, 3], [4, [5, 6]]];

nested.flat(); // [1, 2, 3, 4, [5, 6]]  (1 level)
nested.flat(2); // [1, 2, 3, 4, 5, 6]    (2 levels)
nested.flat(Infinity); // [1, 2, 3, 4, 5, 6]    (all levels)

// flatMap — map करो फिर flat(1)
const sentences = ["Hello World", "Good Morning"];
const words = sentences.flatMap((s) => s.split(" "));
// ["Hello", "World", "Good", "Morning"]

// Practical: filter + map एक साथ
const nums = [1, 2, 3, 4];
nums.flatMap((n) => (n % 2 === 0 ? [n, n * 2] : []));
// [2, 4, 4, 8] — even numbers और उनके doubles
```

---

## 14. Spread Operator और Destructuring

> 🎯 **Interview Definition:** Spread (`...`) array को "फैला" देता है — copy, merge, function arguments के लिए use होता है। Destructuring से array की values directly variables में निकाली जाती हैं। दोनों ES6 features हैं और modern JS में बहुत ज़रूरी हैं।

```js
const a = [1, 2, 3];
const b = [4, 5, 6];

// Spread — merge
const merged = [...a, ...b]; // [1, 2, 3, 4, 5, 6]

// Spread — copy (shallow)
const copy = [...a]; // [1, 2, 3]

// Spread — function args
Math.max(...a); // 3

// Destructuring
const [first, second, third] = a;
console.log(first); // 1
console.log(second); // 2

// Skip elements
const [x, , z] = a; // x=1, z=3

// Rest
const [head, ...tail] = [1, 2, 3, 4];
console.log(head); // 1
console.log(tail); // [2, 3, 4]

// Swap variables
let p = 1,
  q = 2;
[p, q] = [q, p]; // p=2, q=1
```

---

## 15. Array Chaining

> 🎯 **Interview Definition:** Array methods को chain करके ek ke baad ek apply kar sakte hain — `filter().map().reduce()` ek hi line mein. Yeh functional programming style hai jo code ko clean aur readable banata hai. Interviews mein chain likhna aana bahut important hai.

```js
const employees = [
  { name: "Rahul", dept: "Tech", salary: 80000 },
  { name: "Priya", dept: "HR", salary: 50000 },
  { name: "Amit", dept: "Tech", salary: 90000 },
  { name: "Neha", dept: "Tech", salary: 75000 },
  { name: "Vikram", dept: "HR", salary: 55000 },
];

// Tech department का total salary
const techTotal = employees
  .filter((e) => e.dept === "Tech") // Tech employees filter
  .map((e) => e.salary) // sirf salary nikalo
  .reduce((sum, sal) => sum + sal, 0); // add karo

console.log(techTotal); // 245000

// Top 2 highest paid names
const top2 = employees
  .sort((a, b) => b.salary - a.salary) // sort descending
  .slice(0, 2) // top 2 lo
  .map((e) => e.name); // names nikalo

console.log(top2); // ["Amit", "Rahul"]
```

---

## 16. Array.isArray() — Type Check

> 🎯 **Interview Definition:** `Array.isArray()` check करता है कि कोई value array है या नहीं। `typeof []` से `"object"` आता है — इसलिए array check के लिए हमेशा `Array.isArray()` use करो, `typeof` नहीं।

```js
Array.isArray([1, 2, 3]); // true
Array.isArray("hello"); // false
Array.isArray({ a: 1 }); // false
Array.isArray(new Array()); // true

// ❌ typeof गलत result देता है
typeof []; // "object" — arrays भी objects हैं!
```

---

## 17. fill() और from() — Array बनाना

> 🎯 **Interview Definition:** `fill(value, start, end)` array को किसी value से भर देता है। `Array.from({length: n}, fn)` से custom arrays बना सकते हैं। Coding interviews में arrays initialize करने के लिए बहुत काम आता है।

```js
// fill
new Array(5).fill(0); // [0, 0, 0, 0, 0]
[1, 2, 3, 4, 5].fill(0, 2, 4); // [1, 2, 0, 0, 5]

// Array.from — custom initialization
Array.from({ length: 5 }, (_, i) => i); // [0, 1, 2, 3, 4]
Array.from({ length: 5 }, (_, i) => i * i); // [0, 1, 4, 9, 16]
Array.from({ length: 5 }, () => []); // [[], [], [], [], []] — 2D array

// Range function
const range = (start, end) =>
  Array.from({ length: end - start }, (_, i) => start + i);
range(1, 6); // [1, 2, 3, 4, 5]
```

---

## 18. Quick Reference — All Array Methods

| Method             | क्या करता है        | Return                   |
| ------------------ | ------------------- | ------------------------ |
| `push(x)`          | End में add         | New length               |
| `pop()`            | End से remove       | Removed element          |
| `unshift(x)`       | Start में add       | New length               |
| `shift()`          | Start से remove     | Removed element          |
| `splice(i,n,x)`    | Add/Remove anywhere | Removed elements array   |
| `slice(s,e)`       | Portion निकालो      | New array                |
| `map(fn)`          | Transform करो       | New array                |
| `filter(fn)`       | Filter करो          | New array                |
| `reduce(fn,init)`  | Single value बनाओ   | Single value             |
| `find(fn)`         | पहला match          | Element या undefined     |
| `findIndex(fn)`    | पहले match का index | Number (-1 if not found) |
| `some(fn)`         | कोई एक match?       | Boolean                  |
| `every(fn)`        | सब match?           | Boolean                  |
| `includes(x)`      | Element है?         | Boolean                  |
| `indexOf(x)`       | पहला index          | Number (-1 if not found) |
| `forEach(fn)`      | Loop                | undefined                |
| `sort(fn)`         | Sort (in-place)     | Same array               |
| `flat(d)`          | Flatten             | New array                |
| `flatMap(fn)`      | map + flat(1)       | New array                |
| `fill(v,s,e)`      | Fill with value     | Same array               |
| `join(sep)`        | Array → String      | String                   |
| `reverse()`        | Reverse (in-place)  | Same array               |
| `concat(...arrs)`  | Arrays जोड़ो        | New array                |
| `Array.isArray(x)` | Array check         | Boolean                  |
| `Array.from(x)`    | Iterable → Array    | New array                |

---

---

# 🟡 SECTION 2 — Good to Know Topics

> Senior-level और DSA-focused interviews के लिए। इनसे तुम average से अलग दिखोगे।

---

## 19. concat() और join()

> 🎯 **Interview Definition:** `concat()` arrays को जोड़कर नया array बनाता है — original unchanged। `join(separator)` array को string में convert करता है। `split()` string को array में — ये दोनों pair हैं।

```js
const a = [1, 2];
const b = [3, 4];

a.concat(b); // [1, 2, 3, 4]
a.concat(b, [5, 6]); // [1, 2, 3, 4, 5, 6]
// Spread better है: [...a, ...b]

[1, 2, 3].join("-"); // "1-2-3"
[1, 2, 3].join(""); // "123"
[1, 2, 3].join(); // "1,2,3" (default comma)

// Reverse string trick
"hello".split("").reverse().join(""); // "olleh"
```

---

## 20. reverse() — Reverse करना

> 🎯 **Interview Definition:** `reverse()` array को in-place reverse करता है — original array modify होता है। Immutable reverse के लिए पहले copy बनाओ।

```js
const arr = [1, 2, 3, 4, 5];

arr.reverse(); // [5, 4, 3, 2, 1] — original बदल गया!

// ✅ Original safe रखना हो तो
const reversed = [...arr].reverse();
// या
const reversed2 = arr.toReversed(); // ES2023 — non-mutating
```

---

## 21. Mutating vs Non-Mutating Methods

> 🎯 **Interview Definition:** Mutating methods original array को change करते हैं (`push`, `pop`, `sort`, `reverse`, `splice`, `fill`). Non-mutating methods नया array return करते हैं (`map`, `filter`, `slice`, `concat`, `flat`). Interview में यह distinction पूछी जाती है।

```js
// ❌ Mutating — original बदलता है
const arr = [3, 1, 2];
arr.sort((a, b) => a - b); // arr = [1, 2, 3]

// ✅ Non-mutating — original safe
const sorted = [...arr].sort((a, b) => a - b);
const reversed = arr.toReversed(); // ES2023
const sorted2 = arr.toSorted(); // ES2023
const spliced = arr.toSpliced(1, 1, 99); // ES2023
```

---

## 22. Set से Duplicates हटाना

> 🎯 **Interview Definition:** `Set` एक collection है जिसमें unique values होती हैं। Array को Set में convert करके और वापस Array में convert करके duplicates हटाए जाते हैं — यह सबसे clean और interview-friendly तरीका है।

```js
const arr = [1, 2, 2, 3, 3, 3, 4];

// Method 1: Set (best)
const unique = [...new Set(arr)]; // [1, 2, 3, 4]

// Method 2: filter
const unique2 = arr.filter((val, index) => arr.indexOf(val) === index);

// Method 3: reduce
const unique3 = arr.reduce((acc, val) => {
  if (!acc.includes(val)) acc.push(val);
  return acc;
}, []);

// Objects से duplicates (by property)
const users = [
  { id: 1, name: "Rahul" },
  { id: 2, name: "Priya" },
  { id: 1, name: "Rahul" },
];
const uniqueUsers = [...new Map(users.map((u) => [u.id, u])).values()];
```

---

## 23. Array से Object बनाना और Object से Array

> 🎯 **Interview Definition:** `Object.entries()` Object को `[key, value]` pairs की array देता है। `Object.fromEntries()` उल्टा करता है। `reduce()` से array को Object में भी convert होता है। यह conversion interviews में बहुत पूछी जाती है।

```js
// Array → Object (reduce)
const arr = ["a", "b", "c"];
const obj = arr.reduce((acc, val, i) => {
  acc[i] = val;
  return acc;
}, {});
// { 0: "a", 1: "b", 2: "c" }

// Array → Object (count करना)
const fruits = ["apple", "banana", "apple", "mango"];
const count = fruits.reduce(
  (acc, f) => ({ ...acc, [f]: (acc[f] || 0) + 1 }),
  {},
);
// { apple: 2, banana: 1, mango: 1 }

// Object → Array
const person = { name: "Rahul", age: 25, city: "Indore" };
Object.keys(person); // ["name", "age", "city"]
Object.values(person); // ["Rahul", 25, "Indore"]
Object.entries(person); // [["name","Rahul"], ["age",25], ["city","Indore"]]
```

---

## 24. 2D Arrays (Matrix)

> 🎯 **Interview Definition:** 2D Array एक array of arrays है जिसे matrix की तरह use करते हैं। `arr[row][col]` से element access होता है। DSA interviews में graphs, grids, और DP के लिए बहुत ज़रूरी है।

```js
// 2D Array बनाना
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(matrix[1][2]); // 6 (row 1, col 2)

// Dynamic 2D array
const rows = 3,
  cols = 3;
const grid = Array.from({ length: rows }, () => new Array(cols).fill(0));
// [[0,0,0], [0,0,0], [0,0,0]]

// ❌ Common trap — सब rows same reference share करते हैं
const wrong = new Array(3).fill([]); // सब एक ही array!
wrong[0].push(1); // सब rows में 1 आ जाएगा!
```

---

## 25. Sorting — Advanced

> 🎯 **Interview Definition:** Complex sorting में multiple criteria हो सकती हैं। Stable sort (same-value elements अपनी relative order रखते हैं) ES2019 से guaranteed है। Localecompare strings को language-aware sort करता है।

```js
const employees = [
  { name: "Rahul", dept: "Tech", salary: 80000 },
  { name: "Amit", dept: "HR", salary: 50000 },
  { name: "Neha", dept: "Tech", salary: 80000 },
  { name: "Priya", dept: "HR", salary: 70000 },
];

// Multi-criteria sort: salary descending, फिर name ascending
employees.sort((a, b) => {
  if (b.salary !== a.salary) return b.salary - a.salary;
  return a.name.localeCompare(b.name);
});

// String sort — case insensitive
["banana", "Apple", "mango"].sort((a, b) =>
  a.toLowerCase().localeCompare(b.toLowerCase()),
);
// ["Apple", "banana", "mango"]
```

---

## 26. reduce() — Advanced Patterns

> 🎯 **Interview Definition:** `reduce()` सिर्फ sum के लिए नहीं — यह सबसे versatile array method है। इससे `map`, `filter`, `flat`, groupBy — सब implement हो सकता है। Senior interviews में यह ज़रूर पूछा जाता है।

```js
// map को reduce से implement करो
const double = [1, 2, 3].reduce((acc, n) => [...acc, n * 2], []);
// [2, 4, 6]

// filter को reduce से implement करो
const evens = [1, 2, 3, 4, 5].reduce(
  (acc, n) => (n % 2 === 0 ? [...acc, n] : acc),
  [],
);
// [2, 4]

// GroupBy — array को object में group करो
const people = [
  { name: "Rahul", city: "Indore" },
  { name: "Priya", city: "Bhopal" },
  { name: "Amit", city: "Indore" },
];
const grouped = people.reduce((acc, person) => {
  const key = person.city;
  acc[key] = acc[key] ? [...acc[key], person] : [person];
  return acc;
}, {});
/*
{
  Indore: [{ name: "Rahul"... }, { name: "Amit"... }],
  Bhopal: [{ name: "Priya"... }]
}
*/

// Pipe functions (function composition)
const pipe =
  (...fns) =>
  (x) =>
    fns.reduce((v, f) => f(v), x);
const process = pipe(
  (x) => x * 2,
  (x) => x + 1,
  (x) => x ** 2,
);
process(3); // ((3*2)+1)^2 = 49
```

---

## 27. Performance — Time Complexity

> 🎯 **Interview Definition:** Array methods की time complexity जानना senior roles के लिए ज़रूरी है। `push/pop` O(1) हैं। `shift/unshift` O(n) हैं क्योंकि सब elements को shift करना पड़ता है। `find/filter/map` सब O(n) हैं।

| Method                        | Time Complexity | क्यों?                     |
| ----------------------------- | --------------- | -------------------------- |
| `push`, `pop`                 | O(1)            | सिर्फ end पर काम           |
| `shift`, `unshift`            | O(n)            | सब elements shift होते हैं |
| `indexOf`, `find`, `includes` | O(n)            | Linear search              |
| `sort`                        | O(n log n)      | Comparison sort            |
| `map`, `filter`, `forEach`    | O(n)            | हर element एक बार          |
| `reduce`                      | O(n)            | हर element एक बार          |
| `slice`                       | O(n)            | Copy बनाना                 |
| `splice`                      | O(n)            | Elements shift होते हैं    |
| Access by index `arr[i]`      | O(1)            | Direct memory access       |

---

## 28. DSA — Common Interview Patterns

> 🎯 **Interview Definition:** Two Pointer, Sliding Window, और Kadane's Algorithm — ये array के top DSA patterns हैं जो 22LPA+ companies (Amazon, Flipkart, Google) में पूछे जाते हैं।

### Two Pointer — Two Sum (Sorted Array)

```js
function twoSum(arr, target) {
  let left = 0,
    right = arr.length - 1;
  while (left < right) {
    const sum = arr[left] + arr[right];
    if (sum === target) return [left, right];
    if (sum < target) left++;
    else right--;
  }
  return [-1, -1];
}
twoSum([1, 2, 3, 4, 6], 6); // [1, 3] (2+4=6)
```

### Sliding Window — Max Sum Subarray of size K

```js
function maxSumSubarray(arr, k) {
  let windowSum = arr.slice(0, k).reduce((a, b) => a + b, 0);
  let maxSum = windowSum;
  for (let i = k; i < arr.length; i++) {
    windowSum += arr[i] - arr[i - k];
    maxSum = Math.max(maxSum, windowSum);
  }
  return maxSum;
}
maxSumSubarray([2, 1, 5, 1, 3, 2], 3); // 9 (5+1+3)
```

### Kadane's Algorithm — Maximum Subarray Sum

```js
function maxSubarraySum(arr) {
  let maxSoFar = arr[0];
  let maxEndingHere = arr[0];
  for (let i = 1; i < arr.length; i++) {
    maxEndingHere = Math.max(arr[i], maxEndingHere + arr[i]);
    maxSoFar = Math.max(maxSoFar, maxEndingHere);
  }
  return maxSoFar;
}
maxSubarraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4]); // 6 (4-1+2+1)
```

### Frequency Counter — Anagram Check

```js
function isAnagram(s1, s2) {
  if (s1.length !== s2.length) return false;
  const count = s1.split("").reduce((acc, ch) => {
    acc[ch] = (acc[ch] || 0) + 1;
    return acc;
  }, {});
  return s2.split("").every((ch) => count[ch]-- > 0);
}
isAnagram("listen", "silent"); // true
```

---

## 29. Immutable Array Operations (Functional Style)

> 🎯 **Interview Definition:** React, Redux जैसे frameworks में state को directly mutate नहीं करते — हमेशा नया array return करते हैं। यह pattern functional programming का core है और senior roles में ज़रूर पूछा जाता है।

```js
const arr = [1, 2, 3, 4, 5];

// Add (immutable)
const added = [...arr, 6]; // end में
const addedAt = [...arr.slice(0, 2), 99, ...arr.slice(2)]; // middle में

// Remove (immutable)
const removed = arr.filter((x) => x !== 3); // [1, 2, 4, 5]
const removedAt = arr.filter((_, i) => i !== 1); // index 1 हटाओ

// Update (immutable)
const updated = arr.map((x, i) => (i === 2 ? 99 : x)); // index 2 को 99 करो

// Toggle (React state pattern)
const ids = [1, 2, 3];
const toggleId = (arr, id) =>
  arr.includes(id) ? arr.filter((x) => x !== id) : [...arr, id];

toggleId(ids, 2); // [1, 3]   — था, हटाया
toggleId(ids, 5); // [1,2,3,5] — नहीं था, जोड़ा
```

---

## 30. Interview Tricks & Common Gotchas

> 🎯 **Interview Definition:** ये वो tricky behaviors हैं जो JavaScript arrays में surprising लगती हैं। इन्हें जानना senior developers को junior से अलग करता है।

```js
// ❌ Gotcha 1: sort() numbers को strings मानता है
[10, 9, 2, 21].sort(); // [10, 2, 21, 9] — WRONG
[10, 9, 2, 21].sort((a,b) => a - b); // [2, 9, 10, 21] ✅

// ❌ Gotcha 2: == से array compare नहीं होते
[] == [];   // false — अलग-अलग references
[] === [];  // false
JSON.stringify(a) === JSON.stringify(b); // ✅ compare trick

// ❌ Gotcha 3: array holes
const arr = [1,,3]; // hole (empty slot)
arr.length;         // 3
arr[1];             // undefined
arr.map(x => x*2);  // [2, empty, 6] — hole skip होती है!
arr.join("-");      // "1--3" — hole = empty string

// ✅ Gotcha 4: delete vs splice
const a = [1, 2, 3];
delete a[1];     // [1, empty, 3] — hole बनता है, length same!
a.splice(1, 1);  // [1, 3]         — properly remove ✅

// ❌ Gotcha 5: forEach break नहीं होता
[1,2,3,4,5].forEach(n => {
  if (n === 3) break; // ❌ SyntaxError!
});
// ✅ for...of use करो break के लिए
for (const n of [1,2,3,4,5]) {
  if (n === 3) break; // ✅ works!
}

// Gotcha 6: length set करने से array truncate होता है
const arr2 = [1, 2, 3, 4, 5];
arr2.length = 3;
console.log(arr2); // [1, 2, 3]
```

---

> 📌 **22 LPA+ Strategy:**
>
> - Section 1 के सब methods हाथों से practice करो — बिना देखे लिख सको।
> - `map`, `filter`, `reduce` chain करना fluently आना चाहिए।
> - Section 2 का DSA section (topic 28) solve करो — यही पूछते हैं Amazon/Flipkart में।
> - Immutable patterns (topic 29) React interviews के लिए must हैं।
> - Gotchas (topic 30) याद रखो — ये "senior vs junior" distinguish करते हैं।
