/**
 * TypeScript Section 2: "Basic Types and Functions"
 *
 * TOPICS:
 *    -number
 *    -string
 *    -boolean
 *    -never
 *    -any
 *
 * PURPOSE:
 *    Introduction to TypeScript and get exposure to using types with the
 *    basic JavaScript functions that we have introduced previously.
 *
 *    Primarily look at the method signatures and the return types,
 *    these are going to be the main areas you see something different!
 *
 * FOCUS ON:
 *    Each function has comments around it including the returns statement...
 *    these comments will really help guide you to understanding them. Or should. I hope.
 * 
 *    Ideally tinker and try and "break" them. A lot of learning comes from breaking/modifying working code
 *    piece by piece and seeing what happens! 
 */

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
