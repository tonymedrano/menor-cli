#!/usr/bin/env node
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var chalk_1 = __importDefault(require("chalk"));
var clear_1 = __importDefault(require("clear"));
var figlet_1 = __importDefault(require("figlet"));
var commander_1 = __importDefault(require("commander"));
var yargs_1 = __importDefault(require("yargs"));
var boxen_1 = __importDefault(require("boxen"));
var chalk_animation_1 = __importDefault(require("chalk-animation"));
var inquirer_1 = __importDefault(require("inquirer"));
var node_emoji_1 = __importDefault(require("node-emoji"));
var gradient_string_1 = __importDefault(require("gradient-string"));
var nanospinner_1 = require("nanospinner");
(0, clear_1.default)();
console.log(chalk_1.default.red(figlet_1.default.textSync('menor-cli', { horizontalLayout: 'full' })));
commander_1.default
    .version('0.0.3')
    .description("An Menor CLI for ordering pizza's")
    .option('-p, --peppers', 'Add peppers')
    .option('-P, --pineapple', 'Add pineapple')
    .option('-b, --bbq', 'Add bbq sauce')
    .option('-c, --cheese <type>', 'Add the specified type of cheese [marble]')
    .option('-C, --no-cheese', 'You do not want any cheese')
    .parse(process.argv);
var opts = commander_1.default.opts();
console.log('you ordered a pizza with:');
if (opts.peppers)
    console.log('  - peppers');
if (opts.pineapple)
    console.log('  - pineapple');
if (opts.bbq)
    console.log('  - bbq');
var cheese = undefined === opts.cheese
    ? 'marble'
    : opts.cheese || 'no';
console.log('  - %s cheese', cheese);
if (!process.argv.slice(2).length) {
    commander_1.default.outputHelp();
}
console.log(chalk_1.default.bgBlackBright(chalk_1.default.yellowBright("".concat(node_emoji_1.default.emojify(":rocket: :rocket: MENOR CLI is running"), " ").concat(chalk_1.default.yellowBright('-'.repeat(20))))));
var usage = chalk_1.default.keyword('violet')("\nUsage: menor -l <language>  -s <sentence> \n"
    + (0, boxen_1.default)(chalk_1.default.green("\n" + "Translates a sentence to specific language" + "\n"), { padding: 1, borderColor: 'green', dimBorder: true }) + "\n");
var options = yargs_1.default
    .usage(usage)
    .option("l", { alias: "language", describe: "Translate to language", type: "string", demandOption: false })
    .option("s", { alias: "sentence", describe: "Sentence to be translated", type: "string", demandOption: false })
    .help(true)
    .argv;
// console.log(yargs.argv);
var argv = require('yargs/yargs')(process.argv.slice(2)).argv;
if (argv.language == null && argv.l == null) {
    console.log(chalk_1.default.yellow(figlet_1.default.textSync('MenorCLI', { horizontalLayout: 'full' })));
    yargs_1.default.showHelp();
    // return;
}
if (argv.sentence == null && argv.s == null) {
    yargs_1.default.showHelp();
    //return;
}
var language = argv.l || argv.language;
var sentence = argv.s || argv.sentence;
console.log(language, sentence);
/* translate(sentence, { to: language?.toLowerCase() }).then(res => {
  console.log("\n" + boxen(chalk.green(sentence + "\n\n" + res.text), { padding: 1, borderColor: 'green', dimBorder: true }) + "\n");
}).catch(err => {
  console.error(err);
}); */
var playerName;
var sleep = function (ms) {
    if (ms === void 0) { ms = 2000; }
    return new Promise(function (r) { return setTimeout(r, ms); });
};
var welcome = function () { return __awaiter(void 0, void 0, void 0, function () {
    var rainbowTitle;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                rainbowTitle = chalk_animation_1.default.rainbow(node_emoji_1.default.emojify(":hamburger:  MENOR CLI is running... :rocket: :rocket: :rocket: "));
                return [4 /*yield*/, sleep()];
            case 1:
                _a.sent();
                rainbowTitle.stop();
                console.log("\n\t".concat(chalk_1.default.bgBlue('HOW TO PLAY'), " \n\tI am a process on your computer.\n\tIf you get any question wrong I will be ").concat(chalk_1.default.bgRed('killed'), "\n\tSo get all the questions right...\n\n  "));
                return [2 /*return*/];
        }
    });
}); };
var handleAnswer = function (isCorrect) { return __awaiter(void 0, void 0, void 0, function () {
    var spinner;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                spinner = (0, nanospinner_1.createSpinner)('Checking answer...').start();
                return [4 /*yield*/, sleep()];
            case 1:
                _a.sent();
                if (isCorrect) {
                    spinner.success({ text: "Nice work ".concat(playerName, ". That's a legit answer") });
                }
                else {
                    spinner.error({ text: "\uD83D\uDC80\uD83D\uDC80\uD83D\uDC80 Game over, you lose ".concat(playerName, "!") });
                    process.exit(1);
                }
                return [2 /*return*/];
        }
    });
}); };
var askName = function () { return __awaiter(void 0, void 0, void 0, function () {
    var answers;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, inquirer_1.default.prompt({
                    name: 'player_name',
                    type: 'input',
                    message: 'What is your name?',
                    default: function () {
                        return 'Player';
                    },
                })];
            case 1:
                answers = _a.sent();
                playerName = answers.player_name;
                return [2 /*return*/];
        }
    });
}); };
var winner = function () {
    console.clear();
    (0, figlet_1.default)("Congrats , ".concat(playerName, " !\n $ 1 , 0 0 0 , 0 0 0"), function (err, data) {
        console.log(gradient_string_1.default.pastel.multiline(data) + '\n');
        console.log(chalk_1.default.green("Programming isn't about what you know; it's about making the command line look cool"));
        process.exit(0);
    });
};
var question1 = function () { return __awaiter(void 0, void 0, void 0, function () {
    var answers;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, inquirer_1.default.prompt({
                    name: 'question_1',
                    type: 'list',
                    message: 'JavaScript was created in 10 days then released on\n',
                    choices: [
                        'May 23rd, 1995',
                        'Nov 24th, 1995',
                        'Dec 4th, 1995',
                        'Dec 17, 1996',
                    ],
                })];
            case 1:
                answers = _a.sent();
                return [2 /*return*/, handleAnswer(answers.question_1 === 'Dec 4th, 1995')];
        }
    });
}); };
var question2 = function () { return __awaiter(void 0, void 0, void 0, function () {
    var answers;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, inquirer_1.default.prompt({
                    name: 'question_2',
                    type: 'list',
                    message: 'What is x? var x = 1_1 + "1" + Number(1)\n',
                    choices: ['4', '"4"', '"1111"', '69420'],
                })];
            case 1:
                answers = _a.sent();
                return [2 /*return*/, handleAnswer(answers.question_2 === '"1111"')];
        }
    });
}); };
var question3 = function () { return __awaiter(void 0, void 0, void 0, function () {
    var answers;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, inquirer_1.default.prompt({
                    name: 'question_3',
                    type: 'list',
                    message: "What is the first element in the array? ['\uD83D\uDC0F', '\uD83E\uDD99', '\uD83D\uDC0D'].length = 0\n",
                    choices: ['0', '🐏', '🐍', 'undefined'],
                })];
            case 1:
                answers = _a.sent();
                return [2 /*return*/, handleAnswer(answers.question_3 === 'undefined')];
        }
    });
}); };
var question4 = function () { return __awaiter(void 0, void 0, void 0, function () {
    var answers;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, inquirer_1.default.prompt({
                    name: 'question_4',
                    type: 'list',
                    message: 'Which of the following is NOT a primitive type?\n',
                    choices: [
                        'boolean',
                        'number',
                        'null',
                        'object', // Correct
                    ],
                })];
            case 1:
                answers = _a.sent();
                return [2 /*return*/, handleAnswer(answers.question_4 === 'object')];
        }
    });
}); };
var question5 = function () { return __awaiter(void 0, void 0, void 0, function () {
    var answers;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, inquirer_1.default.prompt({
                    name: 'question_5',
                    type: 'list',
                    message: 'JS is a high-level single-threaded, garbage-collected,\n' +
                        'interpreted(or just-in-time compiled), prototype-based,\n' +
                        'multi-paradigm, dynamic language with a ____ event loop\n',
                    choices: ['multi-threaded', 'non-blocking', 'synchronous', 'promise-based'],
                })];
            case 1:
                answers = _a.sent();
                return [2 /*return*/, handleAnswer(answers.question_5 === 'non-blocking')];
        }
    });
}); };
// Run it with top-level await
var start = function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.clear();
                return [4 /*yield*/, welcome()];
            case 1:
                _a.sent();
                return [4 /*yield*/, askName()];
            case 2:
                _a.sent();
                return [4 /*yield*/, question1()];
            case 3:
                _a.sent();
                return [4 /*yield*/, question2()];
            case 4:
                _a.sent();
                return [4 /*yield*/, question3()];
            case 5:
                _a.sent();
                return [4 /*yield*/, question4()];
            case 6:
                _a.sent();
                return [4 /*yield*/, question5()];
            case 7:
                _a.sent();
                winner();
                return [2 /*return*/];
        }
    });
}); };
start();
