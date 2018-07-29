function Node(value) {
    this.value = value;
    this.leftChild = null;
    this.rightChild = null;

    this.insertLeft = function(value) {
        if (this.leftChild !== null) {
            this.leftChild = new Node(value);
        } else {
            var newNode = new Node(value);
            newNode.leftChild = this.leftChild;
            this.leftChild = newNode;
        }
    }

    this.insertRight = function(value) {
        if (this.rightChild !== null) {
            this.rightChild = new Node(value);
        } else {
            var newNode = new Node(value);
            newNode.rightChild = this.rightChild;
            this.rightChild = newNode;
        }
    }
}

var one = new Node(1);
one.insertLeft(2);
one.insertRight(5);

var two = one.leftChild;
var five = one.rightChild;

two.insertLeft(3);
two.insertRight(4);

var three = two.leftChild;
var four = two.rightChild;

four.insertLeft(8);

five.insertLeft(6);
five.insertRight(7);

var six = five.leftChild;
six.insertRight(9);

console.log(JSON.stringify(one));

var queue = [];

function breadthFirstSearch(node) {
    queue.unshift(node);

    while (queue.length !== 0) {
        var currentNode = queue.shift();
    
        if (currentNode.leftChild) {
            console.log(currentNode.leftChild.value);
        } else if (currentNode.rightChild) {
            console.log(currentNode.rightChild.value);
        }
        
        breadthFirstSearch();
    }
}
