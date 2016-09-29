function Bag() {
    this.data = [];
}

Bag.prototype = {
    add: function(item) {
        this.data.push(item);
    },
    get: function(index) {
        if (!this.data[index]) return null;
        return this.data[index];
    },
    remove: function(index) {
        if (!this.data[index]) return;
        this.data.splice(index, 1);
    },
    size: function() {
        return this.data.length;
    },
    isEmpty: function() {
        return this.data.length === 0;
    },
    toString: function() {
        return this.data.join(', ');
    }
}

function test() {
    var bag = new Bag();
    console.log(bag.isEmpty());
    bag.add(1);
    bag.add(2);
    console.log(bag.toString());
    console.log(bag.remove(1));
    console.log(bag.toString());
    console.log(bag.size());
}

if (require.main === module) test();
