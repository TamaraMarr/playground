function Rectangle (width, height) {
    this.width = width;
    this.height = height;
};

Rectangle.prototype.area = function () {
    return this.width * this.height;
}

function Square (length) {
    this.width = this.height = length;
}

Square.prototype = Object.create(Rectangle.prototype);

Square.prototype.diagonal = function() {
    return Math.sqrt(this.area() * 2);
}

var square = new Square(4);

console.log(square.area());
console.log(square.diagonal());