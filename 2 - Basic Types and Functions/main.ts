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
 *    8: Type Guards
 *    9: Type Casting
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
let anotherExample;

// What is the type of anotherExample here?
// Hover over anotherExample... what do you see there?
//      let anotherExample: any
//
// I will discuss any in more detail later on, but for now you can think of it as being ANY type.
// Or behaving as "normal javascript" where you're giving up literally every single advantage of
// using typescript. It's fine in JavaScript but in TypeScript this is something that would
// be caught as a potential issue during code review for sure.

// So when we want a variable declared BEFORE we use it, then we can instantiate it like this.

let numberExampleFive: number; // Notice how there is no variable here to get the type implicitly from?
// This means that TypeScript CANNOT infer the type from it.
// (How could it?).
// So in THIS instance it is more secure to declare it beforehand.

//Now let's just do some examples...

/**
 * IMPLICITLY DETERMINES THAT i IS A NUMBER TYPE FROM 0 ASSIGNMENT.
 */
for (let i = 0; i < 10; i++) {
  console.log(i);
}

let booleanExampleFour: boolean;
booleanExampleFour = true || (true && true); //This will evaluate to true.
console.log(booleanExampleFour);

// 3: Number ------------------------------------------------------------------------------------------
//    Now from this point forward we're going to try and use these data types using FUNCTIONS.
//    Functions can be defined using function keyword or "fat arrow" syntax. This is a TypeScript lessons
//    though and NOT a lesson in JavaScript. Refer to JavaScript if you are confused on what a function is, etc.
//
// Look at the comment block ABOVE THE METHOD for method details.

/**
 * Note that we now have types defined in the PARAMETERS.
 * The type of each parameter expected is indicated after the colon (:) symbol.
 *
 * But interestingly enough note that we also specify the return type at the end of the
 * method signature. In this particular instance we indicate that it is a "number".
 *
 * Remember implicit type assignment from the earlier section? Return types can be done
 * implicitly and usually that is good enough. But with TypeScript it is often QUITE safer
 * for your code to explicitly say "I expect a number to be returned from this function."
 * This allows the developer to know exactly what they are going to return from the function
 * and the person calling the function to know what that function will return to them.
 *
 * @param a Specifies that a number is expected as input
 * @param b Specifies that a number is expected as input yet again
 * @returns Returns a number.
 */
function addNumbers(a: number, b: number): number {
  return a + b;
}

// This function might look like this in JavaScript with the Types Removed.
// Compare and contrast these. These differences are the only major differences in functions.
//
// function addNumbers(a, b) {
//   return a + b;
// }

console.log(addNumbers(1, 2)); //Expected result is the NUMBER 3.


// 4: String ------------------------------------------------------------------------------------------
//    Now let's do some examples using the String data type.

/**
 * Similar to the method above, we have VERY CLEARLY DEFINED the parameter types
 * and a clear return type.
 *
 * @param stringA accepts a string as the first argument.
 * @param stringB accepts a string as the second argument.
 * @returns Returns a string.
 */
var concatenateStrings = (stringA: string, stringB: string): string => {
  return stringA + stringB;
};

//JavaScript "Equivalent"
// var concatenateStrings = (stringA, stringB) => {
//   return stringA + stringB;
// };

console.log(concatenateStrings("hello ", "world")); //Expected result is the STRING "hello world".

/**
 * Void means that we return nothing, and that in the parameters we specified
 * that we have a single string parameter be passed into the function.
 *
 * So to indicate that we are returning nothing you can use the void keyword here.
 * And this indicates that we return NOTHING. And this function only will console.log.
 * Returning nothing.
 *
 * @param a This method accepts a string as it's one parameter argument.
 * @returns This method returns void to the caller.
 */
var returnNothingFunction = (a: string): void => {
  console.log(a);
};

console.log(returnNothingFunction("hello world 2")); //Prints "hello world 2" to the console.

// 5: Boolean  ------------------------------------------------------------------------------------------
//    Now let's do some examples using the Boolean data type.

/**
 * This method showcases taking in two boolean parameters into the function
 * and then we return to the user a boolean that is a result of the two booleans
 * being compared to one another using the boolean and (&&) operator!
 *
 * @param a This method accepts a boolean parameter as it's first parameter.
 * @param b This method accepts a boolean parameter as it's second parameter.
 * @returns This method returns a boolean to the caller.
 */
var booleanAndOperatorFunction = (a: boolean, b: boolean): boolean => {
  return a && b;
};

console.log(booleanAndOperatorFunction(true, true)); //Expect this to print TRUE to the console.

// 6: Never ------------------------------------------------------------------------------------------
//    Now let's do some examples using the String data type.

/**
 * This method accepts no parameters, but this method also
 * has a while loop that will never be returned out from. This
 * method will, by definition, NEVER return.
 *
 * "But when will that happen?"
 * Think of things like infinite while loops that never exit.
 * Think of things like functions that occur when the program crashes or hits an error...
 * (Which would immediately halt program execution. Because of the error. And thus NEVER return. )
 *
 * Is this always used? NO. But is it used sometimes? YES, frequently enough I felt the need to specify it here!
 *
 * So we put the return type of never.
 * @returns This method is expected to NEVER return.
 */
var neverReturnFunction = (): never => {
  while (true) {
    console.log("never returning");
  }
};

// neverReturnFunction(); //This method will just nonstop print "never returning" to the console.
// Commented out intentionally... uncomment it if you want to run it but you now know it will
// go infinately and won't continue down the file.

// 7: Any ------------------------------------------------------------------------------------------
//    Now let's do some examples using the any data type.


/**
 * This function is using a very important keyword to, in MOST cases, avoid.
 * "any". any in typescript basically removes the entire point of using typescript
 * in the first place. This allows you to literally pass in ANY type into the function
 * and to return any type from it.
 *
 * Basically, this word being used in a type makes it act like javascript and you
 * lose all typescript perks. Unless you have a good reason, I STRONGLY recommend you AVOID using any.
 *
 * Because think about it, with TypeScript we know if we are getting numbers, strings or bools (etc) right?
 * Now when we do this we have NO IDEA from the method signature alone what this method actually expects
 * to take in or what it expects to put out... this is literally removing any point to having
 * used TypeScript.
 *
 * Sometimes is using any useful? YES. But not always. And in many cases you would want to
 * instead use "Unknown" type... google-fu that term if you are curious about it. We don't have the
 * time to cover it here and it's very-much a specific case.
 *
 * @param a Passing in literally any data type as the first parameter.
 * @param b Passing in literally any data type as the second parameter.
 */
var functionWithAny = (a: any, b: any): any => {
  return 998989809 + "hello" + 8798574 + "world?";
};

// 8: Type Guards ------------------------------------------------------------------------------------------
//    Type Guards are just pieces of code that you can add to do a RUNTIME check of the types of code.
//    As introduced before, TypeScript only checks the types prior to compilation and will give you a host
//    of warning and error messages. This allows you to introduce even more checking of types...
//    
//    If I am quite honest though? TypeScript has come very far as a language and TypeChecking like this
//    is not something I do fairly often, because if you define you want a string you will get a string.
//    TypeScript won't let you pass a number into a method that is defined with a string. It just won't 
//    allow it and will give you many error messages.
//
//    But I digress. TypeGuard example!

/**
 * This method will take in any data type and then will print to the console if it is
 * a string or a number.
 * @param a Takes in a parameter of any type, essentially turning this into "JavaScript" parameter.
 */
var functionWithTypeGuards = (a: any): void => {
  if (typeof a === 'string') { //The typeguard is this typeof a === 'string'
    console.log("input is a string data type!");
  } else if (typeof a === 'number') {//The second typeguard is this typeof a === 'number'
    console.log("input is a number data type!")
  }
};



// 9: Type Casting ------------------------------------------------------------------------------------------
//    Type casting is the process of converting a particular data element of one type into a brand new
//    data element of another type. It is meant to "retain the value equivalent" of the original value
//    when it is changed to the "value equivalent" of the second value type.
//
//    This might not be completely clear at this point, but some examples might help.


const numberVariable = "123"; // But this will be a STRING because it is surrounded by quotes.
// This poises a problem, we want it to be a number. If we tried to pass this into a function
// such as this function...

const fn2 = (inputNumber: number) => {
  console.log(inputNumber);
}

// Then this would fail!
//
// So what type casting does is it allows us to transform the value of a variable into
// a different data type! Awesome, right!?
//
// So let's do a few examples of some conversions, of course this is not exhaustive.
// But if you need to find out a conversion, just google-fu it :)!

fn2(+numberVariable);

//This is a "condensed" syntax, it's very small. But notice the + sign in front of the string variable?
//This is something that will tell the compiler to please transform the numberVariable into a number!
//
// fn2(numberVariable); //If we don't include the + then we try and pass a string into it!
//And that's just not going to work in TypeScript! Thus this is commented out!
//
// And of course this method still works, but you already knew this from earlier JavaScript lectures!
// I just wanted to add a bit of spice, as this is all mostly review here.

fn2(Number(numberVariable));

// What about casting a NUMBER variable datatype to STRING now?

const stringVariable = 432;

const fn3 = (inputString: string) => {
  console.log(inputString);
}

// fn3(stringVariable); //This won't work. Commented out. 


//What we can do is invoke this method like this to convert this string to a number...

fn3(String(stringVariable));

// Neat, huh?!
// TypeScript gives us incredible control over the types, how data is shifting around and makes things
// FAR more robust and resilient to change than vanilla JS.
//
// Fewer bugs, able to code forward with confidence that TS will block painful type errors. Makes code FAR
// easier to read, especially as the system scales in size and much much more.
// Thus why I am extremely happy to use it in my personal businesses and advocate strongly for it
// to anyone I am mentoring! 
//
//
// But this is just the surface, we have a lot more awesome features to go from here! 
// See you in the third installment!



