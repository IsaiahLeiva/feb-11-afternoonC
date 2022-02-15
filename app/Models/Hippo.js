export class Hippo {
    constructor(name, legs, carnivore, weight) {
        this.name = name;
        this.legs = legs;
        this.carnivore = carnivore;
        this.weight = weight;
    }
    heavy(weight) {
        console.log(`I weigh ${weight}`)
    }

}