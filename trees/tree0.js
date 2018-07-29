function Node(value) {
    this.value = value;
    this.leftChild = null;
    this.rightChild = null;

    this.insertLeft = function (value) {
        if (this.leftChild !== null) {
            this.leftChild = new Node(value);
        } else {
            var newNode = new Node(value);
            newNode.leftChild = this.leftChild;
            this.leftChild = newNode;
        }
    }

    this.insertRight = function (value) {
        if (this.rightChild !== null) {
            this.rightChild = new Node(value);
        } else {
            var newNode = new Node(value);
            newNode.rightChild = this.rightChild;
            this.rightChild = newNode;
        }
    }
}

var a = new Node('a');

a.insertLeft('b');
a.insertRight('c');

var b = a.leftChild;
var c = a.rightChild;

b.insertRight('d');
c.insertLeft('e');
c.insertRight('f');

function debthFirstSearch(node) {
    console.log(node.value);

    if (node.leftChild !== null) {
        debthFirstSearch(node.leftChild);
    }

    if (node.rightChild !== null) {
        debthFirstSearch(node.rightChild);
    }
}

debthFirstSearch(a);