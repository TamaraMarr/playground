// ES6
// class Car {
//     constructor(brand) {
//         this.brand = brand;
//     }

//     drive() {
//         console.log('vroom');
//     }
// }

// class Ford extends Car {
//     constructor(name) {
//         super();
//         this.name = name;
//     }
// }

// ES5
function Car (brand) {
    this.brand = brand;
}

Car.prototype.drive = function () {
    console.log('vroom');
}

function Ford(name, brand) {
    Car.call(this, brand); // getting parent's constructor
    
    this.name = name
}

// THE ACTUAL INHERITANCE
Ford.prototype = Object.create(Car.prototype); // sets up the prototype chain
Ford.prototype.constructor = Ford; // restoring Ford's constructor

var fiesta = new Ford('fiestica', 'fiesta');
console.log(fiesta instanceof Car);
fiesta.drive();