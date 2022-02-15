let Ellie = new Elephant("Ellie", "7 tons", "pachyderm", "4", "herbivore");

export class Elephant {
    constructor(name, weight, species, legs, diet) {
        this.name = name;
        this.weight = weight;
        this.species = species;
        this.legs = legs;
        this.diet = diet;
    }
    eat(diet) {
        console.log(`I am an ${this.diet}`)
    }

}