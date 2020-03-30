


const a = 1; //This has a type when you define it!! (Number in this instance.)
//You know this type AS YOU CODE IT.

//When you have dynamically typed, the type of the variable can change much more fluidly. 


const b = 1 + 2;
const c = "hello world!";

var anotherOne = 1;
// anotherOne = "string";
// anotherOne = {};
// anotherOne = true;

var andAnotherOne = "string"; //These types were INFERRED based on this assignment of this data to the variable!

const var1 = 1;
// var1 = 323;

const stringVar1 = "stringy";

let anotherLetVariableNumber = 1;
anotherLetVariableNumber = 2;

let anotehrLetStringVariable = "string original";
anotehrLetStringVariable = "changed";

let anotherLetBoolean = true;
anotherLetBoolean = false;


//Waht if we define the types???

let boolExampleDefined: boolean = true;

let numberExampleDefined: number = 3;

let stringExampleDefined: string = "string!";
stringExampleDefined = "new string";

// stringExampleDefined = 2; //NOT ALLOWED.

//Why exactly are we not using type inference??? Same result...
//Do you trust the TypeScript compiler...? You should...

//One edge case...
let anotherVariable; //NO DATA ASSIGNED. How can type inference work?
anotherVariable = 2;
anotherVariable = "string";
anotherVariable = false;

let numberExample: number;

// numberExample = "string"; //NOT ALLOWED!!!
numberExample = 4;

for (let i = 0; i < 10; i++) { //0 1 2 3 4 5 6 7 8 9 
    console.log(i);
}


let booleanExample: boolean;
booleanExample = true || (true && true);
console.log(booleanExample);

//Functions and data types!
//Numbers
function addNumbers(a: number, b: number): number { //METHOD SIGNATURE.
    return a + b;
}

console.log(addNumbers(4, 3));

//Strings
var concatenateStrings = (stringA: string, stringB: string): string => {
    return stringA + stringB; //"Concatenates Strings"
}

console.log(concatenateStrings("hello! ", "world!"));

//Let's say we want a method that will not return a value. Void.

var returnNothingFunction = (a: string): void => {
    console.log(a);
}

//booleans

const booleanAndOperatorFunction = (a: boolean, b: boolean): boolean => {
    return a && b;
}

//Let's say a method will NEVER return. It returns NEVER.

var neverReturnFunction = (): never => {
    while (true) { //Infinite while loop! There are a few fringe cases where you'd maybe want to use this...
        console.log("never returning! :) ");
    }
}

//any ...
//controversial
//Indicates potential design failure, or lack of knowledge of union types, etc. Usually... 

var functionWithAny = (a: any, b: any): any => {
    return 99498385934859435 + "hello" + 48324734535 + "world????";
};


//Let's talk type GUARDS and type CASTING.

var functionWithTypeGuards = (a: any): void => {
    if (typeof a === 'string') { //The typeguard is the "typeof a === 'string'"
        console.log("input is a string data type!");
    } else if (typeof a === 'number') { //The typeguard is the "typeof a === 'number'"!
        console.log("input is a number data type!");
    }
}
//Typeguards are ... mostly something that belongs in a museum at this point. For most cases.
//Also who wants to check these manually... eugh.

//Type casting! 
//This should mostly be review... 

let stringVariable = "123";

const fn2 = (inputNumber: number) => {
    console.log(inputNumber);
}

fn2(+stringVariable); //Won't accept! Needs a number! Cast it!






const numberVariable = 432;
const fn3 = (inputString: string) => {
    console.log(inputString);
}

fn3(String(numberVariable));

//Remember github books!!!!! :) LOTS of code examples and comments! :) 