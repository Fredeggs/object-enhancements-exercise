const createInstructor = (firstName, lastName) => {
    return {
      firstName,
      lastName
    }
  }

const favoriteNumber = 42;
const instructor1 = {
  firstName: "Colt",
  [favoriteNumber]: "That is my favorite!"
}

const instructor2 = {
    firstName: "Colt",
    sayHi(){
      return "Hi!";
    },
    sayBye(){
      return this.firstName + " says bye!";
    }
}

const createAnimal = (species, verb, noise) => {
    return {
        species,
        [verb](){
            return noise;
        }
    }
}

const d = createAnimal("dog", "bark", "Woooof!")
// {species: "dog", bark: ƒ}
d.bark()  //"Woooof!"

const s = createAnimal("sheep", "bleet", "BAAAAaaaa")
// {species: "sheep", bleet: ƒ}
s.bleet() //"BAAAAaaaa"