class Person {
  age: number;       //variable : type
  constructor(public name: String) {
  }

  greet() {
    console.log("Hello " + this.name);
  }
}

const person = new Person("John");
person.age = 99;
person.greet();