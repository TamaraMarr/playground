function Animal(name) {
    this.name = name;
}

Animal.prototype.sleep = function () {
    console.log(this.name + ': Zzz...');
}

function Dog(name) {
    this.name = name;
}

// Create a reference for the prototype
Dog.prototype = Object.create(new Animal());

Dog.prototype.makeSound = function () {
    console.log(this.name + ': Woof woof!');
}

var dog = new Dog('Lassie');
dog.makeSound(); // Lassie: Woof woof!
dog.sleep(); // Lassie: Zzz...
dog.missing(); // Throws Error

Dog.prototype.sleep = function () {
    console.log(this.name + ': Overriding Zzzz....');
}

var dog = new Dog('Lassie');
dog.makeSound(); // Lassie: Woof woof!
dog.sleep(); // Lassie: Overriding Zzzz....

Dog.prototype.sleep = function () {
    Animal.prototype.sleep.call(this);
}
