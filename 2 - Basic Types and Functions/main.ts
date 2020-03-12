/**
 * TypeScript Section 2: "Basic Types and Functions"
 *
 * TOPICS:
 *    1: Dynamically vs. Statically Typed
 *    2: Type Inference and Assignment
 *    3: number
 *    4: string
 *    5: boolean
 *    6: never
 *    7: any
 *    !!! ~Functions are used throughout~.
 *
 * PURPOSE:
 *    Introduction to TypeScript and get exposure to using types with the
 *    basic JavaScript functions that we have introduced previously. Just building ontop of the
 *    JavaScript knowledge that you've already seen and used (hi, hangman project :)!) and making
 *    it work with types!
 *
 * FOCUS ON:
 *    Each function has comments around it including the returns statement...
 *    these comments will really help guide you to understanding them. Or should. I hope.
 *
 *    Ideally tinker and try and "break" them. A lot of learning comes from breaking/modifying working code
 *    piece by piece and seeing what happens!
 */

// 1: DYNAMICALLY VS. STATICALLY TYPED ------------------------------------------------------------------------------------------
//  TypeScript is very different from JavaScript in that TypeScript is so called "statically typed".
//
// Statically Typed?
//
//      Statically typed means that the types when they are defined cannot be changed on the fly.
//      Meaning once a variable or some other value is declared to be a data type such as a string or a number that that particular
//      variable MAY NOT be changed to something else. Once it's a string it will always be a string. once it is a number...
//      probably not surprisingly, it will always be a number. To try and change it would result in errors to the user.
//
//      Another Way to think of being "Statically Typed" is that you know the types of the data as you're coding them in the editor.
//      (As in if you write code in this file, without running it, you know the exact types of every variable at that time.)
//
//      But that might not be so clear without examples, right? So let's look at the opposite: Dynamic Typing.
//
// Dynamically Typed?
//
//      Dynamically Typed means that the types when they are defined are NOT NECESSARILY KNOWN AS YOU ARE TYPING THEM
//      IN THE EDITOR. The types of a variable can be changed on the fly as the program is running.
//      This is exactly what JavaScript can do. And this can lead to devastatingly difficult to debug errors for the users
//      Thus... why I am horrifically biased TOWARDS TypeScript. Because being honest I've been bit by that pain
//      100-200 too many times over the years? Probably.

// Let's do some examples... in JavaScript this would be valid. (Commented out because it breaks this TYPESCRIPT FILE'S CODE).
//      var a = 1;
//      a = "hello";
//      a = {};
//      a = 2;
//      a = "another string"
//
// But we know these changes in the editor right? Okay, let's say we had user input through something like a prompt
// and then we put that into something like that var a = 1 above? That a should be of the type number but it isn't.
//
// Okay, but what exactly is statically typed? Look onwards to section 2! :)

// 2: TYPE INFERENCE VS TYPE ASSIGNMENT ------------------------------------------------------------------------------------------
//    First major discussion on TypeScript is going to start with us using variables in typescript.
//    Though by this point you've covered ES6 Syntax so you probably don't want to honestly go over
//    let vs. const yet again...

const a = 1 + 2; //This is a number, right? (Yes. It is :) ! )
const b = "hello world :)"; //This is a string!

// Okay but what is the difference between JavaScript and this here? Well... try hovering over "a" and "b"
// in the code editor. What do you see at the top of a?
//
//    const a: number
//
// What about above b?
//
//   const b: "hello world :)"
//
// So this is one way to see the type of it.
// Specifically you see the TYPE after the ":" sign.
//
//    const a: number
//
// Here we see that we have a const (constant) variable named a. And that it's TYPE
// (after the colon) is a number. So the type of the const variable a is number.
//
// "WHAT IS THE TYPE 'hello world :)'?!!?!??!?!"
// We will get to that later, but yes-- that IS a type of that const variable. (Type Literals, for those curious.)

// ...
// So just exactly what was that? How were those types assigned?
// The types were INFERRED based off of the assignment to that variable.
// const a = 1 + 2;
// The IDE looks at this, knows that this is a TYPESCRIPT file and with the right extensions to the IDE is like
// "oh, 1 + 2 is a number, right? Okay, then I know a is going to be a NUMBER."
// This is how it INFERS the type from the variable.
//
// Likewise with the keyword 'const' we know that we can't change this variable from this point from ES6 Syntax.
// So when we give a const a specific value then that specific value is assigned as the type of that variable.
// (Type literals are explained in the 3rd project folder.)
// Because it knows that variable will ONLY ever be that assigned value.

const constTwo = 2;
// Hover over constTwo here. It gives 2 as the type right? That's because all this will ever be
// is LITERALLY 2. It isn't a more general number. It is specifically assigned to be 2.

const stringTwo = "another one";
// Hover over this one. "another one" is the type right?

//What if we did this...?
let stringThree = "yet another one?";
// Hover over stringThree. It's type is string. That is because this is a LET variable and NOT A CONST.
// This variable is a let, and therefore it CAN BE CHANGED.

stringThree = "changed the string!";
//Hover over stringThree after this reassignment of the value. It's still a string type.
// (Further discussion on type literals will be deferred till later.)

let boolExample = true;
// Hover over it, type? Boolean right?

// Okay now let's talk about something you CAN do, but should NOT.
// TypeScript's type inference is VERY POWERFUL. Generally speaking, it will do better than you with types.
// Especially as things get more complicated in larger scale projects.

let boolExampleTwo: boolean = true;
// Remember that COLON ":" operator we saw when we hovered over types before?
// You're going to be very familiar with colons by the end of TypeScript.
//
//    let boolExampleTwo: boolean = true;
//
// Now what THIS means is that we VERY SPECIFICALLY STATED THIS TO BE A BOOLEAN.
//
// "But isn't that what type inference did above?" YES. EXACTLY.
// But now you're removing the type inference system, which yes sometimes you might want to do. But often? Not really.
// Plus who wants to type out all of that? Not I.
//
// Does it work? Yes. Does it run? Yes.

let numberExampleThree: number = 2;
let booleanExampleThree: boolean = false;
// Again this works for types. Hover over them, it still works! 

booleanExampleThree = true; //still works
numberExampleThree = 9 * 7 + 1; //still works too!

// Okay so what is the point of this? That we've now guaranteed that we will have a variable stay a particular
// type, and this yields many benefits such as better code completion, preventing unexpected type changes and
// unexpected assignments. TypeScript will send a ton of error messages at you and the IDE will "red squiggly line" 
// the errors before you even run the code. 

// Let's take this number, and I will COMMENT OUT the code I REMOVED because it causes errors.
let numberExampleFour = 4;
// numberExampleFour = "string value??"; //THIS WILL ERROR OUT!
//
// Basically TypeScript is a guardian against bad code.

// But before this section is over I want to introduce one area where you WANT to specify a type.
// Mostly because you cannot infer a type from this initially...

//Uncomment this it gives a red squiggly for error right?:
// let a; 

//What is the type of a here? 
//Hover over a... what do you see there? 
//
//    "let a: any
//     Variable 'a' implicitly has an 'any' type, but a better type may be inferred from usage.ts(7043)
//    Cannot redeclare block-scoped variable 'a'.ts(2451)"
//
// But also this gives a red squiggly. It's hideous.




/**
 * Note that we now have types defined in the PARAMETERS.
 * The type of each parameter expected is indicated after the colon (:) symbol.
 *
 * But interestingly enough note that we also specify the return type at the end of the
 * method signature. In this particular instance we indicate that it is a "number".
 *
 * @param a Specifies that a number is expected as input
 * @param b Specifies that a number is expected as input yet again
 * @returns Returns a number.
 */
function addNumbers(a: number, b: number): number {
  return a + b;
}

console.log(addNumbers(1, 2)); //Expected result is the NUMBER 3.

/**
 * Similar to the method above, we have VERY CLEARLY DEFINED the parameter types
 * and a clear return type.
 *
 * @param stringA accepts a string as the first argument.
 * @param stringB accepts a string as the second argument.
 * @returns Returns a string.
 */
var concatenateStrings = (stringA: string, stringB: string) => {
  return stringA + stringB;
};

console.log(concatenateStrings("hello ", "world")); //Expected result is the STRING "hello world".

/**
 * Void means that we return nothing, and that in the parameters we specified
 * that we have a single string parameter be passed into the function.
 *
 * So to indicate that we are returning nothing you can use the void keyword here.
 * And this indicates that we return NOTHING. And this function only will console.log.
 * Returning nothing.
 */
var returnNothingFunction = (a: string): void => {
  console.log(a);
};

console.log(returnNothingFunction("hello world 2")); //Prints "hello world 2" to the console.

/**
 * This method accepts no parameters, but this method also
 * has a while loop that will never be returned out from. This
 * method will, by definition, NEVER return.
 *
 * So we put the return type of never.
 */
var neverReturnFunction = (): never => {
  while (true) {
    console.log("never returning");
  }
};

// neverReturnFunction(); //This method will just nonstop print "never returning" to the console.
// Commented out intentionally... uncomment it if you want to run it but you now know it will
// go infinately and won't continue down the file.

/**
 * This method showcases taking in two boolean parameters into the function
 * and then we return to the user a boolean that is a result of the two booleans
 * being compared to one another using the boolean and (&&) operator!
 *
 * @param a This method accepts a boolean parameter as it's first parameter.
 * @param b This method accepts a boolean parameter as it's second parameter.
 */
var booleanAndOperatorFunction = (a: boolean, b: boolean): boolean => {
  return a && b;
};

console.log(booleanAndOperatorFunction(true, true)); //Expect this to print TRUE to the console.

/**
 * This function is using a very important keyword to, in MOST cases, avoid.
 * "any". any in typescript basically removes the entire point of using typescript
 * in the first place. This allows you to literally pass in ANY type into the function
 * and to return any type from it.
 *
 * Basically, this word being used in a type makes it act like javascript and you
 * lose all typescript perks. Unless you have a good reason, I STRONGLY recommend you AVOID using any.
 *
 * @param a Passing in literally any data type as the first parameter.
 * @param b Passing in literally any data type as the second parameter.
 */
var functionWithAny = (a: any, b: any): any => {
  return 998989809 + "hello" + 8798574 + "world?";
};
