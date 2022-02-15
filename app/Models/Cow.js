let Carl = new Cow("Carl", "brown", "four", "yes", "Moo");

export class Cow {
    constructor(name, color, legs, vegetarian, sound) {
        this.name = name;
        this.color = color;
        this.legs = legs;
        this.vegetarian = vegetarian;
        this.sound = sound;
    }
    speak(sound) {
        console.log(`The ${this.constructor.name} says ${sound}`)
    }
    diet(vegetarian) {
        console.log(`${this.vegetarian}, I am a vegetarian`)
    }

}