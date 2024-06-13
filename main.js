import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bold.cyanBright("\n \t Subhan Khan - Word counter \n"));
console.log("=".repeat(60));
let answer = await inquirer.prompt([
    {
        name: "sentence", // changed to lower case 's'
        type: "input",
        message: "Enter a sentence :-",
    },
]);
let Words = answer.sentence.trim().split(" ");
console.log("=".repeat(60));
console.log(chalk.bold("- sentence Word :-"));
console.log(Words);
console.log(`${chalk.bold.redBright(Words.length)}`); // changed to 'length'
console.log("=".repeat(60)); // corrected to match the upper line
