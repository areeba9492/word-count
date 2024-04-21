#! /usr/bin/env node
//Imoport the 'inquirer' module, which is a command line interface for Node.js
import inquirer from "inquirer";
//import chalk for colorful console outputs
import chalk from "chalk";
// Declare a constant  'answer' and assign it to the result of inquirer .prompt function
const answers = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: chalk.redBright("Enter your sentence to count the word:")
    }
]);
let words = answers.Sentence.trim().split(" ");
//print the array of words to the cosole
console.log(chalk.cyanBright(words));
//Print the word of the sentence to the console
console.log(chalk.whiteBright(`Your sentence word count is "${(words.length)}"`));
