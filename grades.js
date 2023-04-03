import inquirer from "inquirer";
import chalk from "chalk";
let tittle = `-------------Average Calculator-------------`;
console.log(chalk.red.bold(tittle));
let Grades = await inquirer.prompt([
    {
        name: 'engMarks',
        type: 'number',
        message: 'Enter English Marks: '
    },
    {
        name: 'urduMarks',
        type: 'number',
        message: 'Enter Urdu Marks: '
    }
]);
const Average = (Grades.engMarks + Grades.urduMarks) / 2;
console.log('Average =', chalk.red(Average));
if (Average <= 35) {
    console.log(chalk.blue.bold(`Unfortunately , you Failed.`));
}
else if (Average <= 50) {
    console.log(chalk.blue.bold(`You got E grade.`));
}
else if (Average <= 65) {
    console.log(chalk.blue.bold(`You got D grade.`));
}
else if (Average <= 75) {
    console.log(chalk.blue.bold(`You got C grade.`));
}
else if (Average <= 85) {
    console.log(chalk.blue.bold(`You got B grade.`));
}
else if (Average <= 95) {
    console.log(chalk.blue.bold(`You got A grade.`));
}
else if (Average >= 95) {
    console.log(chalk.blue.bold(`You got A+ grade.`));
}
