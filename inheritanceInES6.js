
class Animal {
    constructor(name) {
      this.name = name;
    }
  
    sleep () {
      console.log(`${this.name}: Zzz...`);
    }
  }
  
  class Dog extends Animal {
    constructor(name) {
      super(name);
    }
  
    bark () {
      console.log(`${this.name}: Woof woof!`);
    }
  }
  
  dog = new Dog('Lassie');
  dog.bark(); // Lassie: Woof woof!
  dog.sleep(); // Lassie: Zzz...
  