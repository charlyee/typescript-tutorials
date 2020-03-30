//Video 4!
//"Advanced" types?
//Union types!
//Two or more types...


const unionTypesFunction = (a: string | number) => {
    if (typeof a === 'string') {
        console.log("You passed in a string!")
    } else if (typeof a === "number") {
        console.log("You passed in a number!");
    }
};

unionTypesFunction("a");
unionTypesFunction(2);

// unionTypesFunction(true); //It still does NOT take a boolean though!

//Literal types!

const varA = "hello world! :) ";
// varA = "string!"; //Can't change a const!

const literalTypesFunction = (a: "literally") => {
    console.log("This is a literal type! " + a);
};

literalTypesFunction("literally"); //This works!

// literalTypesFunction("string!"); //Doesn't work!

const literallyReturningLiteralsFunction = (): "literally" => {
    return "literally";
}

//Unions and Literals in one go!
//VERY fine control over what you can use here!
const unionTypeLiterals = (a: 2 | 3 | 4 | "string" | true): 5 | "string" | false => { //I find this hard to read...
    return 5;
}

//Type Alias!



type StringsAndNumbers = number | string;

function stringsAndNumbersFunctionExample(a: StringsAndNumbers, b: StringsAndNumbers): StringsAndNumbers { //3 here alone... in a toy example...
    return "a";
}

//D.R.Y. = Don't Repeat Yourself.!!!


type AcceptedParametersTypes = 2 | 3 | 4 | "string" | true; //Contrived example here. State rule or logic behind them.
type AcceptedReturnValueTypes = 5 | "string" | false; //Contrived example 2 here. State rule or logic behind them.



// Try and keep type definitions through type alias and methods separate...







const unionTypeLiterals2 = (a: AcceptedParametersTypes): AcceptedReturnValueTypes => { //MUCH EASIER TO READ!!!!
    return 5;
}

//This process is what we call "refactoring".


//It's not too bad, promise!!! :) 
//Function types...
//Functions are FIRST CLASS!!!!
//
// 1: They can be passed into other functions as parameters.
// 2: They can be returned from functions! 
// functions basically act similar to objects... 

const basicConsoleDotLogFunction = (): void => console.log("hello I am the basic function! :)");
const basicConsoleDotLogFunction2 = (): void => console.log("hello I am the basic function! :)");
const basicConsoleDotLogFunction3 = (): void => console.log("hello I am the basic function! :)");
basicConsoleDotLogFunction();

const functionAcceptingAnotherFunctionInParams = (
    //Params into here!
    callback: () => void //You are taking in a function here that takes NO PARAMETERS "()" and returns VOID "void".
): void => {
    callback();
}

functionAcceptingAnotherFunctionInParams(basicConsoleDotLogFunction);
functionAcceptingAnotherFunctionInParams(basicConsoleDotLogFunction2);
functionAcceptingAnotherFunctionInParams(basicConsoleDotLogFunction3);


const functionReturningBasicFunction = (): ((a: string) => number) => {
    return (a: string): number => {
        console.log("This function was printed!");
        console.log(a);
        return 5;
    }
}

//REVIEW CLOSURES IF THIS IS NOT FAMILIAR! 
console.log(functionReturningBasicFunction()("hello world again!"));


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

//Any type! Again! :)

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

console.log(anyFunction("ANYTHING!", 43434));

//Please review the github pages :)!