//Objects and other Data Structures!
//Fundamental building blocks to solving problems!

const person = {
    name: "John Doe", //Type inference makes it so that this name is a STRING data type.
    id: 4983248924,
    likesPineapplesOnPizza: true
}

// person.name = true; //Error!

console.log(person.name.toUpperCase()); //TypeScript KNOWS that this is a string data type! :)


//Let's explicitly define the person object type...

//Generally speaking... not what I'd recommend to do! Perhaps consider classes??????

const person2: { //We have EXPLICITLY DEFINED the type of the object. For EACH of the properties in one "bundle" of an object.
    name: string;
    id: number;
    likesPineapplesOnPizza: boolean;
}
    = {
    name: "John Doe", //Type inference makes it so that this name is a STRING data type.
    id: 4983248924,
    likesPineapplesOnPizza: true
}

let aNumber: number = 2; //Same thing as above! But above is an object! 

let anotherPerson = {
    name: "JohnDoe",
    id: 894058093509345,
    likesPineapples: true,
    dog: { //THIS DOG OBJECT IS NESTED WITHIN ANOTHER OBJECT!
        dogName: "Doggy!",
        isHappy: true!
    }
}

//Arrays!
//VERY similar to JS...

const arr = ["one", "two", "three", "four"];

arr.forEach(element => {
    console.log(element);
});

const numberArray: number[] = []; //No data values in this empty list... nothing to infer the types from! It's an empty list!

let numberOrStringArray: (number | string)[];
numberOrStringArray = [1, 2, 3, "one", "two", "three"];

numberOrStringArray.forEach(element => {
    console.log(element);
});

//Enumerations!



enum PizzaToppings {
    PINEAPPLE,
    PEPPERONIO,
    HAM,
    CHEESE,
    TOMATOSAUCE,
    MUSHROOMS,
    MORE
}

console.log(PizzaToppings);

console.log(PizzaToppings.PINEAPPLE);
console.log(PizzaToppings.CHEESE);

//MAPS
//Hopefully you remember it from ES6 Syntax!
//Vanilla JS -> ES6/ECMA2015+ Syntax => TypeScript ... Functionality has built up over time!!! :)

const myMap = new Map();
myMap.set("one", "value of one");//KEY VALUE PAIR
myMap.set("two", "value of two");//KEY VALUE PAIR
myMap.set("three", "value of three");//KEY VALUE PAIR
//KEY VALUE PAIR

console.log(myMap.get("three"));

type MyMapType = Record<number, string>;

const myOtherMap: Record<number, string> = { //KEY VALUE PAIR
    1: "hello!",//KEY VALUE PAIR
    2: "world!",//KEY VALUE PAIR
    3: "third value",//KEY VALUE PAIR
    4: "fourth value",//KEY VALUE PAIR
    4328947823489234: "some other value"//KEY VALUE PAIR
}

myOtherMap[4328947823489234]; //This is how you can get a particular value out... by specifying it's key!

myMap[9001] = "this value is over nine thousand!!!!";

console.log(myMap[9001]);


//Sets!
//Review ES6 Syntax!

const mySet = new Set();
mySet.add(1);
mySet.add(2);
mySet.add(3);
console.log(mySet);

//A set will only hold UNIQUE values. 
mySet.add(2);
console.log(mySet);

//Please review the GitHub books :) 