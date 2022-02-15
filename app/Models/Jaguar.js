export class Jaguar {
    constructor(name, legs, carnivore, gender, weight) {
        this.name = name;
        this.legs = legs;
        this.carnivore = carnivore;
        this.gender = gender;
        this.weight = weight;
    }

    myName(name) {
        console.log(`Hello, my name is ${this.name}`)
    }

    myDiet(carnivore) {
        console.log(`${this.carnivore}, I am a carnivore`)
    }

}