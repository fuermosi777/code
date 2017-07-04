var Queue = require('../utils/Queue');

function Animal() {
    this.created = Date.now();
}

Animal.prototype.isEarlier = function(that) {
    return this.created < that.created;
}

function Dog() {}

Dog.prototype = new Animal();

function Cat() {}

Cat.prototype = new Animal();

function AnimalShelter() {
    this.dogQueue = new Queue();
    this.catQueue = new Queue();
}

AnimalShelter.prototype = {

    enqueue: function(animal) {
        if (animal instanceof Cat) {
            this.catQueue.add(animal);
        } else {
            this.dogQueue.add(animal);
        }
    },

    dequeueAny: function() {
        var dog = dogQueue.first();
        var cat = catQueue.first();
        if (!dog) {
            cat = catQueue.remove();
            return cat;
        }
        if (!cat) {
            dog = dogQueue.remove();
            return dog;
        }
        if (!dog || dog.isEarlier(cat)) {
            dog = dogQueue.remove();
            return dog;
        } else {
            cat = catQueue.remove();
            return cat;
        }
    },

    dequeueDog: function() {
        if (this.dogQueue.isEmpty()) return null;
        var dog = this.dogQueue.remove();
        return dog;
    },

    dequeueCat: function() {
        if (this.catQueue.isEmpty()) return null;
        var cat = this.catQueue.remove();
        return cat;
    }

}

function test() {
    var shelter = new AnimalShelter();
    var c1 = new Cat();
    shelter.enqueue(c1);
    console.log(shelter.dequeueCat());
}

test();