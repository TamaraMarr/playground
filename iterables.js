function ArrayMap() {
    this.names = [];

    this.getValue = function(key) {
        for (var i = 0; i < this.names.length; i++) {
            if (this.names[i][0] === key) {
                return this.names[i][1];
            }
        }
    };
    
    this.addValue = function(name, number) {
        this.names.push([name, number]);
    };
}

function ObjectMap() {
    this.names = {};

    this.getValue = function(key) {
        return this.names[key];
    };
    
    this.addValue = function(name, number) {
        this.names[name] = number;
    };
}

function ZigZagIterator(a) {
    this.a = a;
    this.visited = 0;
    this.side = 'left';

    this.leftInd = -1;
    this.rightInd = this.a.length;

    this.hasNext = function() {
        if(this.visited < this.a.length) {
            return true;
        } else {
            return false;
        }
    }

    this.getNext = function() {
        this.visited++;
        if(this.side === 'left'){
            this.leftInd++;
            this.side = 'right';
            return this.a[this.leftInd];
        } else {
            this.rightInd--;
            this.side = 'left';
            return this.a[this.rightInd];
        }
    }
}

function ReverseIterator(array) {
    this.a = array;
    this.visited = 0;
    this.position = this.a.length;

    this.hasNext = function() {
        if(this.visited < this.a.length) {
            return true;
        } else {
            return false;
        }
    }

    this.getNext = function() {
        this.visited++;
        this.position--;
        return this.a[this.position]
    }
}

function Array() {
    this.a = [];
    
    this.getZigZagIterator = function() {
        return new ZigZagIterator(this.a);
    }

    this.getReverseIterator = function() {
        return new ReverseIterator(this.a);
    }

    this.initRandom = function() {
        for (var i = 1; i <= 10; i++) {
            this.a[i-1] = i;
        }
    }
}

function Main() {
    this.main = function() {
        // var drazenovImenik = new ObjectMap();
        // console.log(drazenovImenik.getValue('Jovana'));
        // drazenovImenik.addValue('Jovana', '455148561321');
        // console.log(drazenovImenik.getValue('Jovana'));

        var zz = new Array();
        zz.initRandom();

        var zz_it = zz.getReverseIterator();
        while(zz_it.hasNext()) {
            console.log(zz_it.getNext());
        }        
    }
}

///////////////////////

(new Main()).main();

var hello = "hello";
console.log(typeof hello);