import { myText } from "./myExports"; //And that was a lot of autocomplete! Handy!
import { Square } from "./classExport"; //More autocomplete, yay!
//Modules and Namespaces! (And import/export!)
//Keep files small, focused on a single particular concern or set.


//Modules.
//Problem: We want to use functions/classes/etc from other files... how would we solve this problem?

console.log(myText);

const square = new Square(3, 3); //3*3 = area, expected answer = 9;
console.log(square.getArea());

//Namespaces.
//More organization tools...

namespace CaseChange {
    export function upperCase(myString: string): string {
        return myString.toUpperCase();
    }



    export function lowerCase(myString: string): string {
        return myString.toLowerCase();
    }
}

console.log(CaseChange.lowerCase("UPPERCASE ORIGINALLY"));
console.log(CaseChange.upperCase("originally lowercase!!!"));

//Really important to think of project structure/architecture... especially for larger projects!!!
//Also don't forget to check out the github pages :) :) :) 