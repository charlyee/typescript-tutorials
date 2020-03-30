//Video 6! ES6 with TypeScript! :)


//template literals.

let myArray: (string | number)[] = ['one', 1, "two", 2, "three", 3];
myArray.forEach(element => {
    console.log(`This is the value~ ${element}`)
});

//Destructuring.



function addition([numOne, numTwo]: [number, number]) { //We destructure out the array from this like so.
    let sum: number = numOne + numTwo;
    console.log(sum);
}

addition([1, 2]); //Passing in an array.

//Spread operator.

let myArray2 = [1, 2, 3, 'a', 'b', 'c'];
console.log(...myArray2);

//Rest parameter.

function signIn(signInMessage: string, ...names: string[]) {
    console.log(signInMessage + " " + names.join(", ") + "."); //We join all the numbers through this.
}

//Default parameters.

function defaultParamsFunction(firstParam: string, secondParam = "default param!") {
    console.log(`first Param ${firstParam} and now the second param ${secondParam}`)
}

defaultParamsFunction("one param");
defaultParamsFunction("one param", "two param");

//Classes

class Rectangle {
    //Properties
    height: number;
    width: number;

    //Constructor
    constructor(height: number, width: number) {
        this.height = height;
        this.width = width;
    }

    //Methods
    area() {
        return this.calcArea();
    }

    calcArea() {
        return this.height * this.width;
    }
}

let myRectangle = new Rectangle(5, 10); //Expected outpuit: 5 * 10 = 50.
console.log(myRectangle.area());

//Static methods:

class Addition {
    //Properties
    static numOne = 1;
    static numTwo = 2;

    //Methods
    static calcSum() {
        return this.numOne + this.numTwo;
    }
};

console.log(Addition.calcSum());

//Public vs. Private.

class Rectangle2 { //Just copy/pasted from above and we will modify from here!
    //Properties
    private height: number;
    private width: number;

    //Constructor
    public constructor(height: number, width: number) {
        this.height = height;
        this.width = width;
    }

    //Methods
    public area() {
        return this.calcArea();
    }

    public calcArea() {
        return this.height * this.width;
    }
};
//What is encapsulation? Future lecture ===>
//Users that use your object should ONLY be aware of what they absolutely need to be aware of.
//ANYTHING ELSE SHOULD BE HIDDEN (aka "private").
//Also lets you control and keep things streamlined/safer than if you don't have things set out this way.


const rectObject = new Rectangle2(2, 3);
console.log(rectObject.area); //We cannot access private elements!

const originalRect = new Rectangle(2, 3);
console.log(originalRect.width); //If you can access things like this... consider a refactor of the class and the OO design/problem structure approach...


//Interfaces!

//Interface is NOT a class. You cannot create new object instances of an interface...
//Unlike an object, you cannot actually "use" it. You cannot put in data / retrieve data from an interface...
//Maybe closest to an explicitly defined type???? Even that... is misleading...
//
//Think of it as being like a "contract" between what you EXPECT and that things will need to adhere to this "contract".

interface Triangle {
    pointA: number,
    pointB: number,
    pointC: number
}

const printTrianglePoints = (trianglePoints: Triangle) => { //Using this interface here. We have created a contract that we bind the inputs to.
    console.log(trianglePoints.pointA, trianglePoints.pointB, trianglePoints.pointC);
}

//Don't forget the github pages :)! Please check them out! 