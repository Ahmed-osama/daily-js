# desing patterns in javascript

**functions are first class citizen :**
you can pass function as a parameter or assign to variable

**callback :**
passing a function as parameter to a parent function and executing it inside the parent function

---

## creational design patterns

patterns for object

### The Prototype class pattern

allow us to define a blueprint for specific type of an Item (object)

```js
class Car {
  constructor({ doors, engine, color }) {
    Object.assign(this, { doors, engine, color });
  }
}

const civic = new Car({ doors: 4, engine: "v6", color: "silver" });

console.log(civic);
/*
{
  "doors": 4,
  "engine": "v6",
  "color": "silver"
  __proto__:{
    constructor: class Car,
    __proto__: Object
  }
}
*/
```

### The Constructor pattern

use already defined class and extend it into a new class

```js
class Car {
  constructor({ doors, engine, color }) {
    Object.assign(this, { doors, engine, color });
  }
}
class SUV extends Car {
  constructor({ doors, engine, color, wheels }) {
    super({ doors, engine, color });
    this.wheels = wheels;
  }
}
const stepway = new SUV({
  doors: 4,
  engine: "v8",
  color: "red",
  wheels: 17,
});

console.log(stepway);
/*
    {
        doors: 4,
        engine: "v8",
        color: "red",
        wheels: 17
    }
*/
```

### Singleton pattern

simply preventing a class from creating more than one instance

```js
let instance = null;
class Car {
  constructor({ doors, engine, color }) {
    if (instance) {
      return instance;
    } else {
      Object.assign(this, { doors, engine, color });
      instance = this;
    }
  }
}
```

### Factory Pattern

when you want to create mechanism that creates objects

```js
class Car {
  constructor({ doors, engine, color }) {
    Object.assign(this, { doors, engine, color });
  }
}

class CarFactory {
  createCar(type) {
    switch (type) {
      case "civic":
        return new Car({ doors: 2, engine: "v6", color: "gray" });
      case "corolla":
        return new Car({ doors: 4, engine: "v6", color: "red" });
    }
  }
}

const someCarFactory = new CarFactory();
const civic = someCarFactory.createCar("civic");
const corolla = someCarFactory.createCar("corolla");
```

### Abstract Factory

extending the previous example

```js
class SUV {
  constructor({ doors, engine, color }) {
    Object.assign(this, { doors, engine, color, wheels });
  }
}

class SUVFactory {
  createCar(type) {
    switch (type) {
      case "4-wheel":
        return new Car({ doors: 2, engine: "v6", color: "gray", wheels: 17 });
      case "compact":
        return new Car({ doors: 4, engine: "v6", color: "red", wheels: 18 });
    }
  }
}

const suvFactory = new SUVFactory();
const carFactory = new CarFactory();

function autoFactory(model, type) {
  switch (model) {
    case "SUV":
      return suvFactory.createCar(type);
    case "sedan":
      return carFactory.createCar(type);
  }
}
```
