let Freddy = new Flamingo("Freddy", 2, "No", "Yes");

export class Flamingo {
    constructor(name, legs, teeth, tail) {
        this.name = name;
        this.legs = legs;
        this.teeth = teeth;
        this.tail = tail;
    }

    have(legs) {
        console.log(`I have ${this.legs}legs`)
    }

    hello(name) {
        console.log(`hello, my name is ${this.name}`)
    }

}