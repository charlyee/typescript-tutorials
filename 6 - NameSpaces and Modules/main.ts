/**
* TypeScript Section 6: "NameSpaces and Modules"
*
* TOPICS:
*   1: 1: Modules (And Import / Export!)
*   2: NameSpaces
*
* PURPOSE:
*   Learn what NameSpaces and Modules are and how to utilize them in Typescript
*
* FOCUS ON:
*   Each function has comments around it including the returns statement...
*   these comments will really help guide you to understanding them. Or should. I hope.
*
*   Ideally tinker and try and "break" them. A lot of learning comes from breaking/modifying working code
*   piece by piece and seeing what happens!
**/


// 1: Modules (And Import / Export!)
//
// Modules are going to require this lesson to be split up into separate files.
// 
// Modules are a concept that should be thought of as the process of taking an original massive file
// filled to the brim with many different methods, functions, classes and the like and now you
// want to break it down into small files with 1 class per file, etc. Really getting down 
// to separation of concerns. 
//
//
// In this instance we have a variable "myText" stored in a file called "myExports.ts".
// This is clearly not in this file, so how do we bring this in? We use the import statement indicated below.
// 
// This import statement will bring in the value EXPORTED from the other file. It's vital that the
// origin file EXPORTS this value otherwise it is kept hidden from import. This goes along a similar
// train of thought as public/private for classes, but for individual files in the system.

//Import myText from the other file.
import { myText } from './myExports';

//Now we can use this as if we just defined it here ourselves...
console.log(myText);

//Same story for classes as well.
import { Square } from './classExport';

//Now we can use this Square class...
const square = new Square(3, 3);
console.log(square.getArea);

// 2: NameSpaces
//
// A namespace is a way to logically group code that is related to one another.
// Think about if you had a whole lot of classes, methods and the rest all dedicated to 
// a very specific hyper-focused task or set of tasks. This could all fall under the umbrella
// of that specific task.
// 
// A namespace, therefore, allows you to focus down in on this set of functionality and dedicate a 
// particular section of code that deals with that particular area of concern! 
// 
// It keeps code organized, clean, easier to read, easier to maintain and instead of needing to 
// specifically call one or two particular parts of functions or classes, instead we can access
// that particular namespace for the work.
// 
// Let's do an example:

namespace CaseChange { // We define a namespace that alters our string passed in.
    export function upperCase(myString: string): string { //NOTE WE NEED TO STILL "EXPORT" THIS!!!! Or it won't show up!!!
        return myString.toUpperCase();
        // If upperCase is called, all letters will be set to uppercase.
    }

     export function lowerCase(myString: string): string { //NOTE WE NEED TO STILL "EXPORT" THIS!!!! Or it won't show up!!!
        return myString.toLowerCase();
        // If lowerCase is called, all letters will be set to lowercase.
    }
}

//So now what we can do with this namespace is that we can now call the namespace name and then we can
//invoke any of the exported functions from it! The namespace basically packages all of these functions
//and the rest all neat and tidy for us to use!
console.log(CaseChange.lowerCase("THIS IS UPPERCASE BEFORE NAMESPACE METHOD"));
console.log(CaseChange.upperCase("this is lowercase before the namespace method is used on it!"));

// Hence modules and namespaces really add a lot to structure, organization and how you might approach the
// overall architecture of your application! In larger projects these tools make or break exactly how
// your project architecture will work. Reducing overall clutter, business, D.R.Y. principle and so much more!!! :) 
