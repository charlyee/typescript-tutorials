import { number } from "prop-types";

/**
 * TypeScript Section 4: "TypeScript with Objects and Other Data Structures"
 *
 * TOPICS:
 *    1: Object Types
 *    2: Array Types
 *    3: Enums
 *    4: Maps
 *    5: Sets
 *
 * PURPOSE:
 *        In JavaScript we introduced you to many different so-called data structure types.
 *        This included things like objects, arrays, maps and sets.
 *        This section serves to teach you how TypeScript acts upon all of these data structures.
 *
 * FOCUS ON:
 *      Each function has comments around it including the returns statement...
 *      these comments will really help guide you to understanding them. Or should. I hope.
 *
 *      Ideally tinker and try and "break" them. A lot of learning comes from breaking/modifying working code
 *      piece by piece and seeing what happens!
 */
const a = true;

// 1: OBJECT TYPES ----------------------------------------------------------------------------------------
// Remember Objects from JavaScript? Well they are still here in TypeScript!
// Look at the syntax for this object. Nothing has changed that much in terms of how you write it.
const person = {
  name: "John Doe",
  id: 3232324,
  likesPineapplesOnPizza: true
};

// But let's take the property of name and try and assign it a number...
// This doesn't work and thus has been commented out to remove the error.
//
// person.name = 2;
//
// ERROR MESSAGE:
// (property) name: string
// Type '2' is not assignable to type 'string'.ts(2322)
//
// But let's talk about something that typescript does allow that IS interesting.

// console.log(person.idk);//Commented out because this doesn't work

// The above line does NOT work, TypeScript catches that the property doesn't exist on the object
// and will give you an error message for it. JavaScript would instead just let you print it
// and have it specified as undefined... that is clearly not what we want to happen (usually!).

//Let's talk about something we can do though!

console.log(person.name.toUpperCase());
// Try typing that out character by character... notice how the . character autocompletes very nicely?
// Another feature of using TypeScript for this is that we also get very powerful autocompletion capabilities.

// But let's hold on for a second, we didn't explicitly define the object type did we? No. We didn't.
// Remember type inference from before? Well that's going to come in full swing here for each and every property!
// It might be more clear if I made another object...
const personTwo = {
  name: "John Doe",
  id: 3232324,
  likesPineapplesOnPizza: true
};

//Now hover over this personTwo constant and then we will see:
//
// const personTwo: {
//   name: string;
//   id: number;
//   likesPineapplesOnPizza: boolean;
// }
//
// Remember hovering over individual variables before? Well, that's the exact same sort of
// idea here!
// Here we have a new variable, a constant variable specifically, assigned with this object.
// This object has been assigned a set of values on properties.
// Each of these properties has been assigned a value.
// Think of them like individual variables.
// Each individually being assigned an implicit type based on what the variable was assigned with.
//
// If it helps, think of it like nested types in a type? All implicitly typed...
//
// Now let's step back and evaluate these objects closely.
// The first one is what we ACTUALLY TYPED. The second one is the TYPE that TYPESCRIPT GENERATED
// USING IMPLICIT TYPING.
//
// const personTwo = {
//   name: "John Doe",
//   id: 3232324,
//   likesPineapplesOnPizza: true
// };
//
// const personTwo: {
//   name: string;
//   id: number;
//   likesPineapplesOnPizza: boolean;
// }
//
// Notice how the one we typed is (key: value) pairs?
// Notice how the one from TypeScript is (key: TYPE) pairs?
//
// This is TypeScript's "behind the scenes" representation of this object.
// This "behind the scenes" representation is NOT AN OBJET THAT EXISTS.
// Only your "personTwo" object you typed out and defined yourself exists. This representation is just it's TYPE.
//
// No different than when you in an earlier section did something to the effect of:
//
// let a = 2;
// hover over it... youd' see that the type of a was "number".
// number is the type in this instance.
//
// And likewise this "object type" in the background is NO DIFFERENT. It's the TYPE of the object.

//"But I remember you being able to explicitly write out the type before"...
//Sure... it's not the best practice but we THEORETICALLY COULD.

//Remember this for basic variables (non-objects from before)?
let aNumber: number = 2; //Explicitly we said here that the type of aNumber is number.

//Same principle for objects... and this syntax might be a bit ugly but it works.
//Things to look for: WHERE IS THE COLON, WHERE IS THE EQUAL SIGN? Let the syntax guide you if you get lost.
let anObject: {
  name: string;
  id: number;
  likesPineapplesOnPizza: boolean;
} = {
  name: "John Doe",
  id: 3232324,
  likesPineapplesOnPizza: true
};

// Look at how the type is explicitly defined. This is similar to what TypeScript is doing BEHIND THE SCENES.
// I cannot emphasize enough: MESS AROUND WITH THIS CODE! Try and break it! See what happens! Please use it :)!

//Before I finish off this section YES, you can have objects nested in other objects be defined.
let anotherPerson = {
  name: "John Doe",
  id: 3232324,
  likesPineapplesOnPizza: true,
  dog: {
    dogName: "Doggy!",
    isHappy: true
  }
};

//Just like before, hover over the object and see what you get...
//
//This object in an object's inferrred Type using TYPESCRIPT is:
//
// let anotherObject: {
//   name: string;
//   id: number;
//   likesPineapplesOnPizza: boolean;
//   dog: {
//       dogName: string;
//       isHappy: boolean;
//   };
// }

// 2: ARRAY TYPES ----------------------------------------------------------------------------------------
// Arrays are EXTREMELY similar to JavaScript.

const arr = ["hello", "world", "how", "are", "ya?"];

//Hover over this type as well. What type is it?
//
// const arr: string[]
// This means that it is a STRING ARRAY. Remember the square brackets [] usually are used for arrays?
// Just put the type in front of that and you have a TypeScript Array defined with that type!

//Can still iterate over it no issue... still acts and behaves as a "normal" "javascript" "array" would.
arr.forEach(element => {
  console.log(element);
});

const numberArray: number[] = []; //Note that this array didn't have any values in it... so TS cannot implicitly type it.
//So we had to declare it clearly here. But this is the syntax that you would use.

// But there are other instances that we might want to explicitly state the type of the array.
// Remember union types?
let numberOrStringArray: (number | string)[];
numberOrStringArray = [2, 3, "string", "string3"];

//Just be careful to keep the brackets there...
//    let numberOrStringArray: (number | string)[];
//
//is different from
//    let numberOrStringArray: number | string[];

//And again as expected we can use it like "normal arrays" even in this case...
for (const elem of numberOrStringArray) {
  console.log(elem);
}

// 3: ENUM TYPES ----------------------------------------------------------------------------------------
// So let's take the case that we have a specific number of things that we know can be a property on an object
// or just generally used.
enum PizzaToppings {
  PINEAPPLE,
  PEPPERONI,
  HAM,
  CHEESE,
  TOMATOSAUCE,
  MUSHROOMS,
  IDK
}

// ... Like pizza toppings there...
// We know that there is a finite set amount of toppings that we can have for Pizza.
// and therefore from there we can set all of these different toppings types in this enum.
//
// Why would we want to do this? Tons of reasons all the way from code readability, maintainability and debugging
// and keeping things compartamentalized in an easier to use format.
// We could theoretically declare variables for all of these. But it's just so so so much easier to just
// slam them all into an enum and then reference values from this enum.
//
// And yes, in industry enums are VERY VERY FREQUENTLY USED.
//
// But what does this look like when we print it?

console.log(PizzaToppings);

// {
//   '0': 'PINEAPPLE',
//   '1': 'PEPPERONI',
//   '2': 'HAM',
//   '3': 'CHEESE',
//   '4': 'TOMATOSAUCE',
//   '5': 'MUSHROOMS',
//   '6': 'IDK',
//   PINEAPPLE: 0,
//   PEPPERONI: 1,
//   HAM: 2,
//   CHEESE: 3,
//   TOMATOSAUCE: 4,
//   MUSHROOMS: 5,
//   IDK: 6
// }

// So what we have here is that the enum is basically displayed directly into the console.
// But what we can make out here is key-value pairs here. We can see things like
//    '0': 'PINEAPPLE',
//  or
//    PINEAPPLE: 0,
//
// So from this we can see that pineapple is tied to '0' or 0.
//
// Technically an enum "is that value" but the enum hides it and makes it far easier for a human to read
// because isn't pineapple easier to work with and read than 0?
// If that isn't the case... I am slightly jealous! :( But it is easier for me and many others!
//

//So try typing pizza toppingsout and then hit the dot operator (the .) just like this.
//Autocomplete FTW!
console.log(PizzaToppings.CHEESE);

//Now this will print the value "3" to the console...
//Remember how I said the enum just makes it easier for humans to read? Well the "actual value" of it
//is just an integer (by default-- if you want to find out how to use NON DEFAULTS then by all means... google-fu it!)
//The purpose, just to reiterate, is just to make programming far clearer and more concise. Easier to maintain, debug, etc.

console.log(PizzaToppings.PINEAPPLE);

// 4: MAPS TYPES ----------------------------------------------------------------------------------------

// 5: SETS TYPES ----------------------------------------------------------------------------------------
