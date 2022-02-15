export class Bear {
    constructor(name, color, legs, carnivore, tail) {
        this.name = name;
        this.color = color;
        this.legs = legs;
        this.carnivore = carnivore;
        this.tail = tail;
    }
    eat(food) {
        console.log(`I eat ${food}`)
    }

    sound(noise) {
        alert(`The ${this.constructor.name} has ${this.legs} legs`)
    }
}