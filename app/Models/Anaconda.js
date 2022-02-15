

export class Anaconda {
    constructor(name, color, legs, gender, weight, tail) {
        this.name = name;
        this.color = color;
        this.legs = gender;
        this.weight = weight;
        this.tail = tail;
    }
    eat(food) {
        console.log(`I eat ${food}`)
    }
    speak(noise) {
        alert(`The ${this.constructor.name} says ${noise}!`)
    }

}