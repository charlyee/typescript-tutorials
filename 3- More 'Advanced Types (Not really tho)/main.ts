/**
 * TypeScript Section 3: "More 'Advanced Types (Not really tho)"
 *
 * TOPICS:
 *    1: Union Types
 *    2: Literal Types
 *    3: Type Alias
 *    4: Function Types
 *    5: any
 *
 * PURPOSE:
 *        To introduce you to these more "advanced" types, but the reality is that these are very commonly used
 *        with TypeScript and you should absolutely try and familiarize yourself with them.
 *
 *        eg: You want to create an array that can contain both strings and numbers, how do you do that?
 *        eg: You want to be able to have a function accept a function as an argument or return one...
 *              well... how do you do that? (Remember: JavaScript functions are FIRST CLASS.)
 *        eg: You want to be able to specify you only want the user to put in one of a few options
 *              such as 5,6,7 or "hello" into a method (and yes this happens!!!). How do you do that?
 *
 * FOCUS ON:
 *      Each function has comments around it including the returns statement...
 *      these comments will really help guide you to understanding them. Or should. I hope.
 *
 *      Ideally tinker and try and "break" them. A lot of learning comes from breaking/modifying working code
 *      piece by piece and seeing what happens!
 */

// 1: UNION TYPES ------------------------------------------------------------------------------------------
//      Union types are used where you have something that you want to be able to be or accept (or whatever else)
//      two or more types. Where just specifying a string is not desired. Where you might want something like
//      "hey, I want a STRING and a NUMBER to be able to be passed into this function."

/**
 * Union types function example.
 * Will print to the console.log whether it was a string or a number
 * parameter passed into this method.
 *
 * @param a Can accept a string or a number as a parameter into this method.
 */
const unionTypesFunction = (a: string | number) => {
  if (typeof a === "string") {
    console.log("You passed in a string into this function!");
  } else if (typeof a === "number") {
    console.log("You passed in a number into the function!");
  }

  //Technically because we're using typescript we should NOT expect anything
  //that isn't either a number or a string to be passed into this method!
};

// 2: LITERAL TYPES ----------------------------------------------------------------------------------------
//       Literal types are where you... literally... say that you want to have passed
//       into the method (or used etc etc). This allows you to really refine what you
//       expect users to use the method for.

/**
 * Example of a literal type being used in the parameters.
 * @param a Only accepts the string 'literally'
 */
const literalTypesFunction = (a: "literally") => {
  console.log("This is a literal type!");
};

/**
 * So now we specify that this function will literally return "literally".
 * Literal types are useful for deciding exactly what will be returned!
 * But... this misses a key consideration, doesn't it?
 *
 * Try changing the return to any other string. Look at how the IDE will give you
 * errors! I strongly recommend you mess about with these methods! Change code! :)
 */
const literallyReturningLiteralsFunction = (): "literally" => {
  return "literally";
};

/**
 * This method accepts very specific parameters into itself and
 * also has very specific types that the method may return.
 *
 * @param a Accepts either 2,3,4 or the string "well now" as parameters.
 * @return Returns one of 5, "no" or the boolean value false.
 */
const unionTypeLiterals = (
  a: 2 | 3 | 4 | "well now" | true
): 5 | "no" | false => {
  return 5;
};

// 3: TYPE ALIAS -------------------------------------------------------------------------------------------
//       So in that last function we defined... that was quite a mouthful for types right?
//       What if we could define a 'variable' to store these types in?
//       That's where the "type alias" feature comes in handy!

//Let's say that we wanted to do a single 'type' that indicated we would
//accept both a number and a string type into the parameters.
type StringsAndNumbers = number | string;

//That is all that this does here. It specifies that we have made a "custom type" or better
//known as a TYPE ALIAS called "StringsAndNumbers" that allows us to have either numbers
//or strings as a type.

function stringsAndNumbersFunctionExample(
  a: StringsAndNumbers,
  b: StringsAndNumbers
) {
  if (typeof a === "string") {
    console.log("You passed in a string into this function!");
  } else if (typeof a === "number") {
    console.log("You passed in a number into the function!");
  }
}

//Let's take that type from above.... where we specified a very long type literal...
//that was disgusting, wasn't it? Well I thought so-- so let's define it as a custom type
//by using a type alias!!!! :)
// const unionTypeLiterals = (
//     a: 2 | 3 | 4 | "well now" | true
//   ): 5 | "no" | false => {
//     return 5;
//   };

type AcceptedParametersTypes = 2 | 3 | 4 | "well now" | true;
type AcceptedReturnValueTypes = 5 | "no" | false;

/**
 *
 * @param a Accepts AcceptedParametersTypes/
 * @param b Accepts AcceptedParametersTypes/
 * @param c Accepts AcceptedParametersTypes/
 * @returns Returns a value from AcceptedReturnValueTypes.
 */
function moreTypeAliasingExamples(
  a: AcceptedParametersTypes,
  b: AcceptedParametersTypes,
  c: AcceptedParametersTypes
): AcceptedReturnValueTypes {
  return false;
}

// 4: FUNCTION TYPES ---------------------------------------------------------------------------------------
//       Recall that functions are FIRST CLASS, you learned this in JavaScript.
//       Recap:
//          Functions can be passed into other functions as arguments.
//          Functions can be returned to other functions.
//
//       So what does this mean given everything you've now seen with TypeScript...?
//       "That TypeScript will be super picky... again... :("
//       Yes! Exactly!!!!! :D

/**
 * Basic function that just console.log's a basic string.
 * @returns void
 */
const basicConsoleDotLogFunction = (): void =>
  console.log("hello I am the function!");

/**
 * This function's only purpose is for it to TAKE IN A FUNCTION AS AN ARGUMENT
 * and then RUN THAT FUNCTION PASSED IN AS AN ARGUMENT.
 *
 * Look VERY closely at the parameter. We have a variable called "callback" and
 * that we have a returned value of VOID from this. So we have given a "short hand" version
 * of the method signature of the method above...
 *
 * Look at the method signature of the 'basicConsoleDotLogFunction' method...
 * It returns void
 *
 * @param callback
 * @returns void
 */
const functionAcceptingAnotherFunctionInArguments = (
  callback: () => void
): void => {
  callback();
};

functionAcceptingAnotherFunctionInArguments(basicConsoleDotLogFunction); //Passing that basic function from above as
//an argument into this other function.

/**
 * Returning a function from another function.
 * Look VERY CAREFULLY at the return type from this function!!!!
 * This is a function definition being defined as what we will return.
 *
 * Remember anonymous functions from regular JavaScript? That's what we are returning here.
 * An anonymous function. Where the anonymous function will accept a string as it's one argument
 * parameter. And where it will return a number.
 *
 * ... Does it look overwhelming? Take a step back. Pick at this code.
 * This is all syntax that you've already seen before. Break it down piece by piece.
 *
 * We state here: something like "WE EXPECT THIS FUNCTION TO RETURN
 * ANOTHER FUNCTION. THIS OTHER FUNCTION THAT WE ARE RETURNING SHOULD
 * ACCEPT A STRING AND RETURN A NUMBER."
 */

const functionReturningBasicFunction = (): ((a: string) => number) => {
  return (a: string):  number => {
    console.log("This function was printed!");
    console.log(a);
    return 5;
  };
};

// Likewise this is how you'd invoke it like a closure.
// TypeScript and JavaScript are very very similar in these mechanics.

console.log(functionReturningBasicFunction()("hello world again!"));

// Final Example for Functions and TypeScript: Closure with functions.
// Likewise this is how you'd invoke it like a closure.
// TypeScript and JavaScript are very very similar in these mechanics.
// This example involves types with a closure.
// We have THREE methods declared here.
// 1: A method declared
const functionTakingOneFunctionAsAnArgumentAndReturningAnotherFunction = (
  aString: string,
  callback: (callBackParam: string) => string
): ((a: string) => string) => {
  const closureConst = callback(aString);

  return (callbackString: string) => {
    return closureConst + callbackString;
  };
};

console.log(
  functionTakingOneFunctionAsAnArgumentAndReturningAnotherFunction(
    "Hello ",
    (a: string): string => {
      return a;
    }
  )("world! :D")
);

// 6: ANY TYPE ---------------------------------------------------------------------------------------------
//      We talked about the any type earlier, but let's make it more concrete here.
//      The ANY type means that we basically remove types from typescript where any is used.
//      ANY means that ANY data type can be used.
//      ANY, thankfully, is quite true to it's name... literally any data type...
//
//      Generally speaking, unless you REALLY know what you're doing, this type should be avoided.
//      If you are "using typescript" and use any everywhere you completely overturned the entire point
//      of using TypeScript in the first place...
//
//      Sometimes useful? Yeah! Absolutely!
//      But this is one of those "developer beware" key words. Useful sometimes, but used too often it's dangerous!

function anyFunction(a: any, b: any): any {
  a = 2;
  a = {};
  a = "42";
  a = +a;
  b = 8;
  b = { objectProperty: "okThen" };
  let c = +a + " " + b.objectProperty;
  return c;
}

console.log(anyFunction("lol", "anything!!!!!"));
