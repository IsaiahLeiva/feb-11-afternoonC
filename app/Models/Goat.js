export class Goat {
    constructor(name, legs, carnivore, tail, weight) {
        this.name = name;
        this.legs = legs;
        this.carnivore = carnivore;
        this.tail = tail;
        this.weight = weight;
    }

    heavy(weight) {
        console.log(`I weigh ${this.weight}`)
    }
    hasTail(tail) {
        console.log(`${this.tail}, I have a tail`)
    }
}