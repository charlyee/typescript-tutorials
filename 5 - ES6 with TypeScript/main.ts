/**
* TypeScript Section 5: "ES6 With TypeScript"
*
* TOPICS:
*   1: Template Literals
*   2: Destructuring
*   3: Spread Operator
*   4: Rest Parameter
*   5: Default Parameter
*   6: Class
*   7: Static Methods
*
* PURPOSE:
*   Apply types to what we've learned on ES6
*
* FOCUS ON:
*   Each function has comments around it including the returns statement...
*   these comments will really help guide you to understanding them. Or should. I hope.
*
*   Ideally tinker and try and "break" them. A lot of learning comes from breaking/modifying working code
*   piece by piece and seeing what happens!
**/

// 1: TEMPLATE LITERALS
//
// Template literals are the same as they are in ES6...just with types!
// Let's do an example:

let myArray: (string | number)[] = ['a', 1 ,'c', 2 ,'e']; //we define a mixed array of numbers and strings here
for (let i = 0; i < myArray.length; i++){
    console.log(`I have ${myArray[i]} in my array!`); //we console log every element in our array 
};

// Now let's break down our code:
// We defined our array as a mix of strings and integers, and we explicitly defined that the type of our data must be either a string or number.
// What would happen if we passed a boolean to the array?
// We would get an error because we have a type that is not allowed.
// We call defining MULTIPLE TYPES as a UNION TYPE.

// 2: Destructuring
// 
// When we destructure arrays into separate variables, we can also check to make sure that only specific types are destructured, this avoids type related bugs.

function addition([numOne, numTwo] : [number, number]){ //we define a function which accepts an array with two values, they must be numbers
  let sum: number = numOne + numTwo; //we define sum as the first and second numbers of our array added together, the sum must be a number
  console.log(sum);
};
addition([1,2]);

// Now let's break down our code:
// We defined a function named addition which destructures an array into numOne and numTwo. We defined the data type as numbers. If either or both of the array values are anything other than numbers, the data is rejected.
// We then define a variable 'sum' to store our result, and we do a final safeguard of defining it as a number as well.

// 3: Spread Operator
//
// A spread operator may seem daunting at first, but it's actually simple once you understand its purpose!
// The spread operator will take an array and expand the data within it to a set of items.
// Taking what you know about TypeScript so far, what would this code return?

let myArray: (number)[] = [1,2,3,4, 'b']; //we define our array here
console.log(...myArray); //we have the console print out each element in our array

// What happens in our code?
// That's right! We run into an error! Why? Because our array is supposed to only accept numbers, but we put a string element in it.
// How do we fix it?
// We have to either make sure our dataset only contains numbers or we have to change our array to accept a union type and include strings as an acceptable type.
//Fixed code:

let myArray: (number|string)[] = [1,2,3,4, 'b']; //we define our array here, it now also accepts strings
console.log(...myArray); //we have the console print out each element in our array

// 4: Rest Parameter
//
// What is a rest parameter?
// Let's say we have an array that we need to pass as parameters to a function. This is where rest parameters come in.
// The rest parameter allows us to pass on an indefinite number of parameters into our function. We don't need to know exactly how many elements our array contains, the rest parameter will just keep passing on elements until the array is finished. 
// Taking note of what you read above, what happens when we run this code?

function signIn(signInMessage: string, ...names: string[]) {
    console.log(signInMessage + " " + names.join(", ") + "."); //we define our input types and output here
}

signIn("Welcome back:", "John", "Steve", "Jane", 1337); //we call our function here, with our values

// How can we fix this?
// The same way we did for the spread operator.
// Fixed Code:

function signIn(signInMessage: string, ...names: (string|number)[]) {
    console.log(signInMessage + " " + names.join(", ") + "."); //we define our input types here, with our names array now accepting numbers too
}

signIn("Welcome back:", "John", "Steve", "Jane", 1337); //we call our function here, with our values

// 5: Default Parameters
//
// What are default parameters? 
// Every function parameter expects a value assigned to it, even if the value assigned is null or undefined. With default parameters, we can assign a default value to a parameter if one is not received.
// Let's take a look at an example:

function familyTracker(firstName: string, lastName = "Smith") { //Here we define a function and say that the first name must be a string, the last name is defaulted to "Smith" if there is no other last name provided
    console.log(`${firstName} is a member of the ${lastName} family.`); //We use a template literal to make a statement
};
familyTracker('John', 'Don'); //Expected result: John is a member of the Don family.
familyTracker('John'); //Expected result: John is a member of the Smith family.

// 6: Classes
//
// What are classes?
// Classes are blueprints by which we can define methods and variables to keep like objects together.
// The best way to learn is by example, so let's dive into a class meant to identify a person.

class Rectangle {
  constructor(height: number, width: number) { //we specify that height and width are two variables in the class which are both numbers
    this.height = height;
    this.width = width;
  }
  get area() {
    return this.calcArea(); //a getter method
  }
  calcArea() {
    return this.height * this.width; //a method to calculate the area of a rectangle
  }
}

let myRectangle = new Rectangle(5, 10); //we make a new rectangle with a height of 5 and a width of 10

console.log(myRectangle.area); //we invoke the getting method, which fetches the area of our rectangle

// 7: Static Methods
// 
// What are static methods?
// Static methods are usually used to create utility functions for an application. They cannot be called through a class instance.
// Let's take a look at an example of a static method:

class Addition {
    constructor(numOne: number, numTwo: number) { //we define that our class accepts two variables that must be numbers
        this.numOne = numOne;
        this.numTwo = numTwo;
    }
    static calcSum() {
        return this.numOne + this.numTwo; //here we define our static method to add our two variables together
    }
}

Addition.calcSum(1,2); //we directly call the sum function here because we cannot call it by making an instance of the class (using the new keyword)













