#!/usr/bin/env node

import chalk from 'chalk';
import clear from 'clear';
import figlet from 'figlet';
import path from 'path';
import program from 'commander';

import yargs from 'yargs';
import boxen from 'boxen';
import chalkAnimation from 'chalk-animation';
import inquirer from 'inquirer';
import emoji from 'node-emoji';
import gradient from 'gradient-string';
import { createSpinner } from 'nanospinner';


clear();
console.log(
  chalk.red(
    figlet.textSync('menor-cli', { horizontalLayout: 'full' })
  )
);

program
  .version('0.0.3')
  .description("An Menor CLI for ordering pizza's")
  .option('-p, --peppers', 'Add peppers')
  .option('-P, --pineapple', 'Add pineapple')
  .option('-b, --bbq', 'Add bbq sauce')
  .option('-c, --cheese <type>', 'Add the specified type of cheese [marble]')
  .option('-C, --no-cheese', 'You do not want any cheese')
  .parse(process.argv);

const opts = program.opts();

console.log('you ordered a pizza with:');
if (opts.peppers) console.log('  - peppers');
if (opts.pineapple) console.log('  - pineapple');
if (opts.bbq) console.log('  - bbq');

const cheese: string = undefined === opts.cheese
  ? 'marble'
  : opts.cheese || 'no';

console.log('  - %s cheese', cheese);

if (!process.argv.slice(2).length) {
  program.outputHelp();
}

console.log(
  chalk.bgBlackBright(
    chalk.yellowBright(
      `${emoji.emojify(
        ":rocket: :rocket: MENOR CLI is running"
      )} ${chalk.yellowBright('-'.repeat(20))}`
    )
  )
);

const usage = chalk.keyword('violet')("\nUsage: menor -l <language>  -s <sentence> \n"
  + boxen(chalk.green("\n" + "Translates a sentence to specific language" + "\n"), { padding: 1, borderColor: 'green', dimBorder: true }) + "\n");
const options = yargs
  .usage(usage)
  .option("l", { alias: "language", describe: "Translate to language", type: "string", demandOption: false })
  .option("s", { alias: "sentence", describe: "Sentence to be translated", type: "string", demandOption: false })
  .help(true)
  .argv;

// console.log(yargs.argv);
const argv = require('yargs/yargs')(process.argv.slice(2)).argv;

if (argv.language == null && argv.l == null) {
  console.log(
    chalk.yellow(
      figlet.textSync('MenorCLI', { horizontalLayout: 'full' })
    )
  );
  yargs.showHelp();
  // return;
}
if (argv.sentence == null && argv.s == null) {
  yargs.showHelp();
  //return;
}

const language = argv.l || argv.language;

const sentence = argv.s || argv.sentence;

console.log(language, sentence);
/* translate(sentence, { to: language?.toLowerCase() }).then(res => {
  console.log("\n" + boxen(chalk.green(sentence + "\n\n" + res.text), { padding: 1, borderColor: 'green', dimBorder: true }) + "\n");
}).catch(err => {
  console.error(err);
}); */


let playerName: any;

const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));

const welcome = async () => {
  const rainbowTitle = chalkAnimation.rainbow(
    emoji.emojify(
      ":hamburger:  MENOR CLI is running... :rocket: :rocket: :rocket: "
    )
  );

  await sleep();
  rainbowTitle.stop();

  console.log(`
	${chalk.bgBlue('HOW TO PLAY')} 
	I am a process on your computer.
	If you get any question wrong I will be ${chalk.bgRed('killed')}
	So get all the questions right...

  `);
}

const handleAnswer = async (isCorrect: boolean) => {
  const spinner = createSpinner('Checking answer...').start();
  await sleep();

  if (isCorrect) {
    spinner.success({ text: `Nice work ${playerName}. That's a legit answer` });
  } else {
    spinner.error({ text: `💀💀💀 Game over, you lose ${playerName}!` });
    process.exit(1);
  }
}

const askName = async () => {
  const answers = await inquirer.prompt({
    name: 'player_name',
    type: 'input',
    message: 'What is your name?',
    default() {
      return 'Player';
    },
  });

  playerName = answers.player_name;
}

const winner = () => {
  console.clear();
  figlet.text(`Congrats , ${playerName} !\n $ 1 , 0 0 0 , 0 0 0`, {
    font: "Bloody",
    horizontalLayout: "default",
    verticalLayout: "default",
    whitespaceBreak: true,
  }, (err: any, data: any) => {
    console.log(gradient.pastel.multiline(data) + '\n');

    console.log(
      chalk.green(
        `Programming isn't about what you know; it's about making the command line look cool`
      )
    );
    process.exit(0);
  });
}

const question1 = async () => {
  const answers = await inquirer.prompt({
    name: 'question_1',
    type: 'list',
    message: 'JavaScript was created in 10 days then released on\n',
    choices: [
      'May 23rd, 1995',
      'Nov 24th, 1995',
      'Dec 4th, 1995',
      'Dec 17, 1996',
    ],
  });

  return handleAnswer(answers.question_1 === 'Dec 4th, 1995');
}

const question2 = async () => {
  const answers = await inquirer.prompt({
    name: 'question_2',
    type: 'list',
    message: 'What is x? var x = 1_1 + "1" + Number(1)\n',
    choices: ['4', '"4"', '"1111"', '69420'],
  });
  return handleAnswer(answers.question_2 === '"1111"');
}

const question3 = async () => {
  const answers = await inquirer.prompt({
    name: 'question_3',
    type: 'list',
    message: `What is the first element in the array? ['🐏', '🦙', '🐍'].length = 0\n`,
    choices: ['0', '🐏', '🐍', 'undefined'],
  });

  return handleAnswer(answers.question_3 === 'undefined');
}

const question4 = async () => {
  const answers = await inquirer.prompt({
    name: 'question_4',
    type: 'list',
    message: 'Which of the following is NOT a primitive type?\n',
    choices: [
      'boolean',
      'number',
      'null',
      'object', // Correct
    ],
  });
  return handleAnswer(answers.question_4 === 'object');
}

const question5 = async () => {
  const answers = await inquirer.prompt({
    name: 'question_5',
    type: 'list',
    message:
      'JS is a high-level single-threaded, garbage-collected,\n' +
      'interpreted(or just-in-time compiled), prototype-based,\n' +
      'multi-paradigm, dynamic language with a ____ event loop\n',
    choices: ['multi-threaded', 'non-blocking', 'synchronous', 'promise-based'],
  });

  return handleAnswer(answers.question_5 === 'non-blocking');
}

// Run it with top-level await
const start = async () => {
  console.clear();
  await welcome();
  await askName();
  await question1();
  await question2();
  await question3();
  await question4();
  await question5();
  winner();
};

start(); 
