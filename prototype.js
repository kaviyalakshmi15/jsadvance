const person = {
    alive: true
}

const musician = {
    plays: true
}

musician.__proto__ = person;
console.log(musician.plays);
console.log(musician.alive);
console.log(musician);

// prototypes

Object.setprototypeOf(musician, person);
console.log(object.getprototypeOf(musician));
console.log(musician.__proto__);
console.log(object.getprototypeOf(musician) === musician.__proto__);

// extending the prototype chain

const guitarist ={
    string: 6,
    __proto__: musician
}

console.log(guitarist.alive);
console.log(guitarist.plays);
console.log(guitarist.strings);
console.log(guitarist);

//object with getter and setter

const car = {
    doors: 2,
    seats:"viny1",
    get seatMaterial() {
        return this.seats;
    },
    set seatMaterial(material) {
        this.seats = material;
    }
}

const luxuryCar = {};
object.setprototypeOf(luxuryCar, car);
luxuryCar.seatMaterial = "leather";
console.log(luxuryCar);
console.log(luxuryCar.doors);
console.log(Car);


//getting keys of an object
console.log(object.keys(luxuryCar));

object.keys(luxuryCar).forEach(key => {
    console.log(key);
});


//loop includes inherited props
for (let key in luxuryCar) {
    console.log(key);
}


// object constructors

function Animal(species) {
    this.species = species;
    this.eats = true;
}

Animal.prototype.walks = function () {
    return 'A ${this.species} is walking.';
};

const Bear = new Animal("bear");

console.log(Bear.species);
console.log(Bear.walks());

console.log(Bear.__proto__);
console.log(Bear.__proto__ === Animal.prototype);
console.log(Animal.prototype);
console.log(Bear);


