var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.greet = function () {
        console.log("Hello " + this.name);
    };
    return Person;
}());
var person = new Person("John");
person.age = 99;
person.greet();
