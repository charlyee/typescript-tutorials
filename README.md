# TypeScript Tutorials

## 1: First Steps - Developer Environment

### Suggested IDE:
Visual Studio Code
https://code.visualstudio.com/

This is my personal recommendation for an IDE to use, and that I have used it extensively with TypeScript to great success and that the IDE really helps TypeScript work well and that the IDE really keeps you on track at all stages of development.

### Suggested Extensions (for Visual Studio Code):

1: ESLint

2: Material Icon Theme

3: Path Intellisense

4: Prettier - Code Formatter

5: TSLint 

6: Live Reload

Extensions can be thought of as adding additional functionalities to the IDE, these can range from highlighting code a certain way, changing the colors that you see on the screen, giving you better more concise error messages, better autocomplete and much much more. 

But the jist of it is that you should ultimately think about them as being like adding additional powers to your integrated developer environment.


### Auto Format

I STRONGLY advise students to use this and to use this very frequently. Autoformatting often will help your code be much much more easily readable and manageable. Especially now we have introduced you to more advanced syntax such as "fat arrow functions" and classes.

Where is it Located?

By default they should be: alt, shift, f.

- Preferences -> Keyboard Shortcuts 

- Then search for ‘format document’

- This will bring up your particular keybinds for autoformatting. 

By default they should be: alt, shift, f.

## 2: How To Run WITH HTML INTEGRATION (Hello Project Work!!!! :) )

#### PART 1: Creating Files

1: Create an `index.html` file (as you are used to).

2: File structure (as you are used to). How have you set up your folders and files in the past for projects? It does not change much here. `styles`, `html` etc. However, do not create a JavaScript file.

3: Typescript files have the .ts file extension at the end. Similar to how JavaScript had .js and html files have .html file extensions.

Create a TypeScript file with the name like `main.ts`

4: Now what you need to do is modify the html file with the baseline structure (consider using html:5 code snippet for baseline layout?) already in it and add a script tag that matches your TypeScript file's name.

Eg: Above we said `main.ts` right? Now we want to import a .js (yes that is not a typo) into the html of the same name.

Now we say we import `main.js` into the HTML file! 

Example:
`<script src="main.js"></script>`


#### PART 2: Running This TypeScript Code With HTML.

1: Start the HTML file using the 'Live Reload' option. This should bring up a browser window.
 
2: Make modifications / code changes to the TypeScript file. For example add `console.log("Hello :)!"  )` line to your TypeScript file `main.ts`.

3: Use the command `tsc main.ts`, assuming still that you're using main.ts as your TypeScript file name.

This will create a new JavaScript file of the same name, eg: main.js.

4: Now this JavaScript file produced is the same one that you added to your html file directly before in the script tags.

With live reload enabled as soon as this JavaScript file is compiled from the TypeScript file your webpage should reload with the changes :)!

#### PART 3: Running This TypeScript Code IN THE TERMINAL. NO HTML! 

For the majority of these TypeScript tutorials it is assumed that we will not actually have any HTML integration and that this will all be done in the terminal directly. HTML is nice, but for our purposes it clutters/clouds our actual concern: TYPESCRIPT.

1: Install ts-node using the command `npm install typescript ts-node -g`

2: Now you can run TypeScript files directly using `ts-node main.ts` where you could replace main.ts with whatever name you gave the TypeScript file.

