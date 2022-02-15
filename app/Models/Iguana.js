export class Iguana {
    constructor(name, legs, carnivore, gender, weight) {
        this.name = name;
        this.legs = legs;
        this.carnivore = carnivore;
        this.gender = gender;
        this.weight = weight;
    }
    myName(name) {
        console.log(`hello, my name is ${this.name}`)
    }

    myLegs(legs) {
        console.log(`I have ${this.legs} legs`)
    }
}