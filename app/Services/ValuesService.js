import { ProxyState } from "../AppState.js";
import { Anaconda } from "../Models/Anaconda.js";
import { Bear } from "../Models/Bear.js";
import { Value } from "../Models/Value.js";





let Annie = new Anaconda("Annie", 0)

let Barry = new Bear("something", 0)
// let Carl = new Cow("yup", 35)
// let Barry = new Bear("Barry", "Brown", "four", "yes", "small");
// let Carl = new Cow("Carl", "brown", "four", "yes", "Moo");
// let Dave = new Dog("Dave", "four", "brown", "omnivore", "bark");
// let Ellie = new Elephant("Ellie", "7 tons", "pachyderm", "4", "herbivore");
// let Freddy = new Flamingo("Freddy", 2, false, "Yes");
// let Gretchen = new Goat("Gretchen", 4, false, "Yes", "80lbs");
// let Henry = new Hippo("Henry", 4, false, "Male", "4 tons");
// let Ian = new Iguana("Ian", 4, false, "Male", "8 pounds");
// let Jane = new Jaguar("Jane", 4, true, "Female", "120 pounds");
// let Kim = new Kangaroo("Kim", 2, false, "Female", "150 pounds");
// let Lizzy = new Lemur("Lizzy", 2, false, "Female", "5 pounds");
// let Mike = new Monkey("Mike", 2, false, "Male", "120 pounds");
// let Nick = new Newt("Nick", 4, false, "Male", "0.37 ounces");
// let Oscar = new Ostrich("Oscar", 2, false, "Male", "300 pounds");
// let Percy = new Panda("Percy", 4, false, "Male", "200 pounds");
// let Quinn = new Quail("Quinn", 2, false, "Male", "3.4 ounces");
// let Ricky = new Rhino("Ricky", 4, false, "Male", "2.5 tons");
// let Sam = new Seal("Sam", 4, true, "Male", "1 ton");
// let Terry = new Tiger("Terry", 4, true, "Male", "400 pounds");
// let Ursula = new Urchin("Ursula", 0, false, "Female", "1 pound");
// let Victor = new Vulture("Victor", 2, false, "Male", "30 pounds");
// let Will = new Walrus("Will", 0, false, "Male", "1 ton");
// let Xavier = new Xantis("Xavier", 4, false, "Male", "300 pounds");
// let Yanni = new Yak("Yanni", 4, false, "Male", "1,000 pounds");
// let Zack = new Zebra("Zack", 4, false, "Male", "600 pounds");

//name, legs, carnivore, gender, weight


let arr = [Annie, Barry]



class ValuesService {
  addValue() {
    ProxyState.values = [...ProxyState.values, new Value({ title: Math.random() })]
  }
  removeValue(id) {
    const values = ProxyState.values.filter(v => v.id !== id)
    ProxyState.values = values
  }

  displayName() {
    console.log(arr);
  }
}

export const valuesService = new ValuesService();

