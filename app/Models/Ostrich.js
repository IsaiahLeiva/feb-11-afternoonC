export class Ostrich {
    constructor(name, legs, carnivore, gender, weight) {
        this.name = name;
        this.legs = legs;
        this.carnivore = carnivore;
        this.gender = gender;
        this.weight = weight;
    }

    mylegs(legs) {
        console.log(`I have ${this.legs} legs`)
    }

    myWeight(weight) {
        console.log(`I weigh ${this.weight}`)
    }
}