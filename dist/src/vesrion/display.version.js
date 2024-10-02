"use strict";
// src/version/display.version.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.displayVersion = displayVersion;
const figlet_1 = __importDefault(require("figlet"));
const chalk_1 = __importDefault(require("chalk"));
const version = '1.0.0';
async function displayVersion() {
    // Display the title in large ASCII art with green color
    console.log(chalk_1.default.green(figlet_1.default.textSync('Hydrogen CLI', { horizontalLayout: 'default' })));
    // Display the version number with a box and additional styling
    console.log(chalk_1.default.bgGray.black(` Version: ${version} `));
    console.log(chalk_1.default.gray('='.repeat(40)));
    // Display help details with better formatting
    console.log(chalk_1.default.yellowBright('Available Commands:'));
    console.log(chalk_1.default.white('  hydrogen create <projectName>   Create a new project with the specified name.'));
    console.log(chalk_1.default.white('  hydrogen module <moduleName>      Create a new module with the specified name, including controller, service, and interface.'));
    console.log(chalk_1.default.white('  hydrogen version                  Display the current Hydrogen CLI version.'));
    console.log(chalk_1.default.gray('='.repeat(40)));
    // Optionally, add a footer or additional information
    console.log(chalk_1.default.green('For more information, visit: https://hygrogencli.backslashgo.com\n'));
}
