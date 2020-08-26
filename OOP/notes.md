# OOP

**what is a paradigm ?**

a paradigm is any approach to organize our code that make it easy to add features and functionality.

---

## object creation

**objects**

can encapsulate related data to related functionalities

**Object.create**

what ever you pass as parameter (object) we be the prototype for the newly created object

**create objects using functions**

```
  function createUser(name, age){
    return {
      name,
      age,
      greet(){
        return `hey my name is ${name} and i'm ${age} years old`
      }
    }
  }

  const user1 = createUser('ahmed',30)
```

> **parameter** is a variable in a method definition. When a method is called, the **arguments** are the data you pass into the method's parameters.

> overtime JS executes a function it creates a brand new execution context

---

## Prototype and new

using functions to create objects has a flaw that it always copy the methods on every time you create an new object.

**the solution** is to save all the functionalities and commons in a separate folder and make javascript look for the methods in this object (Prototype).

**functions are Objects & functions** function object combo, any time you access function with . you are accessing it in its object form, function as objects has prototype property by default points to Big O Object.

**new keyword & share functions with prototype** every time using `new` keyword
