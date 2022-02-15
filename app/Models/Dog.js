let Dave = new Dog("Dave", "four", "brown", "omnivore", "bark");

export class Dog {
    constructor(name, legs, color, diet, sound) {
        this.name = name;
        this.legs = legs;
        this.color = color;
        this.diet = diet;
        this.sound = sound;
    }

    walk(legs) {
        console.log(`I'm a dog, I have ${this.legs}legs`)
    }
    noise(sound) {
        console.alert(`I go ${sound}`)
    }

}