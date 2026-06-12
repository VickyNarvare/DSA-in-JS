# JavaScript Objects — सम्पूर्ण गाइड (Hindi)

---

# 🔴 SECTION 1 — Most Important Topics

> ये topics हर interview में पूछे जाते हैं। इन्हें ज़रूर तैयार करो।

---

## 1. Object क्या होता है?

> 🎯 **Interview Definition:** Object एक ऐसा data structure है जिसमें related data और functions को एक साथ key-value pairs के रूप में store किया जाता है। जैसे एक person का name, age, city — सब एक जगह।

JavaScript में **Object** एक collection होता है key-value pairs का। इसे real world की चीज़ों को represent करने के लिए use करते हैं।

```js
const person = {
  name: "Rahul",
  age: 25,
  city: "Indore",
};
```

यहाँ `name`, `age`, `city` — ये **keys (properties)** हैं, और `"Rahul"`, `25`, `"Indore"` — ये **values** हैं।

---

## 2. Object बनाने के तरीके

> 🎯 **Interview Definition:** JavaScript में Object 5 तरीकों से बना सकते हैं — Object Literal (सबसे simple), `new Object()`, Constructor Function (same structure के multiple objects के लिए), `Object.create()` (prototype set करके), और ES6 Class (modern OOP style)।

### 2.1 Object Literal (सबसे common)

```js
const car = { brand: "Toyota", model: "Innova", year: 2023 };
```

### 2.2 Constructor Function

```js
function Person(name, age) {
  this.name = name;
  this.age = age;
}
const p1 = new Person("Amit", 30);
```

### 2.3 ES6 Class (modern तरीका)

```js
class Student {
  constructor(name, roll) {
    this.name = name;
    this.roll = roll;
  }
  greet() {
    console.log(`Hello, I am ${this.name}`);
  }
}
const s1 = new Student("Neha", 101);
s1.greet(); // "Hello, I am Neha"
```

### 2.4 `Object.create()`

```js
const animal = {
  speak() {
    console.log("I make a sound");
  },
};
const dog = Object.create(animal);
dog.speak(); // "I make a sound"
```

---

## 3. Properties Access करना

> 🎯 **Interview Definition:** Object की properties दो तरीकों से access होती हैं — Dot Notation (`obj.key`) जो simple cases में use होती है, और Bracket Notation (`obj["key"]`) जो dynamic keys या special characters वाले keys के लिए ज़रूरी है।

```js
console.log(person.name); // Dot Notation → "Rahul"
console.log(person["age"]); // Bracket Notation → 25

const key = "city";
console.log(person[key]); // Dynamic key → "Indore"
```

---

## 4. Property Add, Update, Delete करना

> 🎯 **Interview Definition:** Object में नई property directly assign करके add होती है, existing value को overwrite करके update होती है, और `delete` keyword से remove होती है। JavaScript objects by default mutable (बदलने योग्य) होते हैं।

```js
const obj = { a: 1 };
obj.b = 2; // Add
obj.a = 99; // Update
delete obj.b; // Delete
console.log(obj); // { a: 99 }
```

---

## 5. Methods और `this` keyword

> 🎯 **Interview Definition:** जब किसी Object की property एक Function हो, तो उसे Method कहते हैं। `this` उस object को point करता है जिसने वो method call किया हो। Arrow functions में `this` अपना नहीं होता — वो enclosing scope का `this` लेती हैं।

```js
const user = {
  name: "Vikram",
  greet() {
    console.log("Hello, I am " + this.name);
  },
};
user.greet(); // "Hello, I am Vikram"
```

> ⚠️ Arrow function में `this` काम नहीं करता — हमेशा regular function use करो methods के लिए।

---

## 6. Object Loop करना

> 🎯 **Interview Definition:** Object को loop करने के लिए `for...in` सबसे common है जो सभी enumerable keys देता है। `Object.keys()`, `Object.values()`, `Object.entries()` modern तरीके हैं जो Array return करते हैं जिन पर `map`, `filter` जैसे methods use हो सकते हैं।

```js
const obj = { a: 1, b: 2, c: 3 };

for (let key in obj) {
  console.log(key, "=", obj[key]); // a=1, b=2, c=3
}

Object.keys(obj); // ["a", "b", "c"]
Object.values(obj); // [1, 2, 3]
Object.entries(obj); // [["a",1], ["b",2], ["c",3]]
```

---

## 7. Destructuring

> 🎯 **Interview Definition:** Destructuring एक ES6 shortcut है जिससे Object की properties को एक line में directly variables में unpack कर सकते हैं। इससे code clean और readable बनता है, और rename या default value भी दे सकते हैं।

```js
const { name, age } = person;
console.log(name); // "Rahul"

// Rename करके
const { name: fullName } = person;

// Default value
const { country = "India" } = person;

// Nested
const {
  address: { city },
} = company;
```

---

## 8. Spread Operator (`...`)

> 🎯 **Interview Definition:** Spread operator (`...`) किसी Object की सारी properties को दूसरी जगह "फैला" देता है। इससे दो objects को merge करना और shallow copy बनाना बहुत आसान हो जाता है।

```js
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

const merged = { ...obj1, ...obj2 }; // Merge
console.log(merged); // { a: 1, b: 2, c: 3, d: 4 }

const copy = { ...obj1 }; // Shallow copy
```

---

## 9. Deep Copy vs Shallow Copy

> 🎯 **Interview Definition:** Shallow Copy सिर्फ top-level properties copy करती है — nested objects का reference share होता है, इसलिए एक बदलने पर दूसरा भी बदल जाता है। Deep Copy में पूरा structure independently copy होता है — दोनों एक-दूसरे से बिल्कुल अलग।

```js
const original = { a: 1, nested: { b: 2 } };

// ❌ Shallow — nested share होती है
const shallow = { ...original };
shallow.nested.b = 99;
console.log(original.nested.b); // 99 — original भी बदला!

// ✅ Deep — पूरी copy
const deep = structuredClone(original);
deep.nested.b = 99;
console.log(original.nested.b); // 2 — safe रहा
```

---

## 10. Prototype और Prototype Chain

> 🎯 **Interview Definition:** हर JavaScript object के पास एक hidden `__proto__` link होती है जो उसे एक parent object (prototype) से जोड़ती है। जब कोई property खुद object पर नहीं मिलती, तो JS उसे prototype chain में ऊपर-ऊपर ढूंढता है — यही Prototype Chain है।

```js
const animal = {
  breathe() {
    console.log("Breathing...");
  },
};
const dog = Object.create(animal);
dog.bark = function () {
  console.log("Woof!");
};

dog.bark(); // खुद का → "Woof!"
dog.breathe(); // parent से → "Breathing..."
```

```
dog → animal → Object.prototype → null
```

---

## 11. Optional Chaining (`?.`) और Nullish Coalescing (`??`)

> 🎯 **Interview Definition:** `?.` से deeply nested properties safely access होती हैं — बीच में `null`/`undefined` हो तो error नहीं, बस `undefined` मिलता है। `??` तब default value देता है जब left side `null` या `undefined` हो — `||` से बेहतर है क्योंकि `0` और `""` को falsy नहीं मानता।

```js
// Optional Chaining
console.log(user?.profile?.address?.city); // undefined — error नहीं

// Nullish Coalescing
const theme = settings.theme ?? "dark"; // null हो तो "dark"
const count = 0 ?? 10; // 0 — (0 valid माना)
const count2 = 0 || 10; // 10 — (0 को falsy माना)
```

---

## 12. JSON और Object

> 🎯 **Interview Definition:** JSON (JavaScript Object Notation) एक text format है data share करने के लिए। `JSON.stringify()` से JS Object को JSON string में convert करते हैं (server को भेजने के लिए), और `JSON.parse()` से JSON string को वापस Object में।

```js
const obj = { name: "Riya", age: 21 };

const json = JSON.stringify(obj); // '{"name":"Riya","age":21}'
const parsed = JSON.parse(json); // { name: "Riya", age: 21 }
```

> ⚠️ `undefined`, functions और Symbols JSON में include नहीं होते।

---

## 13. Object Built-in Methods

> 🎯 **Interview Definition:** JavaScript में Object पर कई built-in static methods होते हैं — `assign` (merge/copy), `freeze` (immutable बनाना), `seal` (नई properties रोकना), `keys/values/entries` (iterate करना), `fromEntries` (array से object बनाना)।

```js
// assign — merge
Object.assign(target, source);

// freeze — पूरी तरह lock (add/update/delete — कुछ नहीं)
const config = Object.freeze({ limit: 100 });
config.limit = 999; // कोई effect नहीं

// seal — नई properties बंद, existing update हो सकती हैं
const obj = Object.seal({ x: 1 });
obj.x = 99; // ✅
obj.y = 5; // ❌

// hasOwn — property check
Object.hasOwn(obj, "x"); // true
```

---

## 14. Quick Reference चीटशीट

| Feature         | Syntax                       |
| --------------- | ---------------------------- |
| Object बनाना    | `const obj = { key: value }` |
| Property access | `obj.key` या `obj["key"]`    |
| Property delete | `delete obj.key`             |
| Keys निकालना    | `Object.keys(obj)`           |
| Values निकालना  | `Object.values(obj)`         |
| Merge करना      | `{ ...obj1, ...obj2 }`       |
| Deep Copy       | `structuredClone(obj)`       |
| Safe access     | `obj?.a?.b`                  |
| Default value   | `obj.x ?? "default"`         |
| Loop करना       | `for (let k in obj)`         |
| JSON बनाना      | `JSON.stringify(obj)`        |
| JSON parse      | `JSON.parse(str)`            |
| Freeze          | `Object.freeze(obj)`         |
| Destructuring   | `const { a, b } = obj`       |

---

---

# 🟡 SECTION 2 — Good to Know Topics

> ये topics senior-level या advanced interviews में काम आते हैं। जानना अच्छा है।

---

## 15. Nested Objects

> 🎯 **Interview Definition:** जब किसी Object की value खुद एक Object हो, तो उसे Nested Object कहते हैं। इन्हें access करने के लिए dot notation को chain करते हैं जैसे `company.address.city`।

```js
const company = {
  name: "TechCorp",
  address: {
    city: "Bhopal",
    state: "MP",
    pin: 462001,
  },
};

console.log(company.address.city); // "Bhopal"
console.log(company["address"]["pin"]); // 462001
```

---

## 16. Shorthand Properties & Methods

> 🎯 **Interview Definition:** ES6 का shorthand feature है जिसमें अगर variable name और property name same हो तो `{ name: name }` की जगह सिर्फ `{ name }` लिख सकते हैं। Methods में `function` keyword हटा सकते हैं।

```js
const name = "Ravi";
const age = 22;

const person1 = { name: name, age: age }; // Old
const person2 = { name, age }; // Shorthand ✅

const obj = {
  greet() {
    return "Hi!";
  }, // function keyword नहीं
};
```

---

## 17. Computed Property Names

> 🎯 **Interview Definition:** Computed Property Names से Object बनाते वक्त square brackets `[]` में expression या variable डालकर dynamic key set कर सकते हैं। यह runtime पर key का नाम decide करने के लिए useful है।

```js
const key = "score";

const result = {
  [key]: 99, // → score: 99
  [`${key}_label`]: "A+", // → score_label: "A+"
};
```

---

## 18. Getter और Setter

> 🎯 **Interview Definition:** Getter (`get`) एक special method है जो किसी property को read करने पर automatically call होता है, और Setter (`set`) value assign करने पर। इनसे property access को control और validate किया जा सकता है।

```js
const circle = {
  radius: 5,
  get area() {
    return Math.PI * this.radius ** 2;
  },
  set diameter(d) {
    this.radius = d / 2;
  },
};

console.log(circle.area); // 78.53...
circle.diameter = 20;
console.log(circle.radius); // 10
```

---

## 19. Symbol as Property Key

> 🎯 **Interview Definition:** Symbol एक primitive data type है जो हर बार unique value बनाता है। इसे Object की property key की तरह use करने पर वो key completely unique और hidden रहती है — `Object.keys()` में भी नहीं आती।

```js
const id = Symbol("id");

const user = {
  name: "Arun",
  [id]: 42,
};

console.log(user[id]); // 42
console.log(user.id); // undefined
console.log(Object.keys(user)); // ["name"] — Symbol छुपा
```

---

## 20. Property Descriptors

> 🎯 **Interview Definition:** हर Object property के पीछे hidden metadata होती है जिसे Property Descriptor कहते हैं — इसमें `writable` (बदल सकते हैं?), `enumerable` (loop में आएगा?), और `configurable` (delete/redefine होगा?) जैसे flags होते हैं।

```js
Object.defineProperty(obj, "y", {
  value: 20,
  writable: false, // बदल नहीं सकते
  enumerable: false, // for...in में नहीं आएगा
  configurable: false, // delete नहीं होगा
});
```

---

## 21. Private Fields — Encapsulation (ES2022)

> 🎯 **Interview Definition:** ES2022 के Private Fields (`#`) से class की properties को truly private बनाया जाता है — बाहर से directly access नहीं होतीं। यह Encapsulation का real implementation है जहाँ data को methods के through ही control किया जाता है।

```js
class BankAccount {
  #balance = 0; // Private field

  constructor(owner) {
    this.owner = owner;
  }

  deposit(amount) {
    this.#balance += amount;
  }
  withdraw(amount) {
    this.#balance -= amount;
  }

  get balance() {
    return this.#balance;
  }
}

const acc = new BankAccount("Mohit");
acc.deposit(5000);
console.log(acc.balance); // 5000
console.log(acc.#balance); // ❌ SyntaxError — private है
```

---

## 22. `Object.fromEntries()` — Array से Object

> 🎯 **Interview Definition:** `Object.fromEntries()` key-value pairs की array को Object में convert करता है। यह `Object.entries()` का उल्टा है — Map को Object में convert करने के लिए भी useful है।

```js
const entries = [
  ["name", "Sona"],
  ["age", 24],
];
const obj = Object.fromEntries(entries);
console.log(obj); // { name: "Sona", age: 24 }

// Map → Object
const map = new Map([
  ["x", 1],
  ["y", 2],
]);
console.log(Object.fromEntries(map)); // { x: 1, y: 2 }
```

---

> 📌 **Final Tip:** Section 1 interview में must है — ये 14 topics पक्के करो। Section 2 bonus है जो तुम्हें average से अलग बनाएगा!
