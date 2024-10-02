// src/version/display.version.ts

import figlet from 'figlet';
import chalk from 'chalk';

const version = '1.0.6';

export async function displayVersion(): Promise<void> {
  // Display the title in large ASCII art with green color
  console.log(
    chalk.green(figlet.textSync('Hydrogen CLI', { horizontalLayout: 'default' }))
  );

  // Display the version number with a box and additional styling
  console.log(chalk.bgGray.black(` Version: ${version} `));
  console.log(chalk.gray('='.repeat(40)));

  // Display help details with better formatting
  console.log(chalk.yellowBright('Available Commands:'));
  console.log(chalk.white('  hydrogen create <projectName>   Create a new project with the specified name.'));
  console.log(chalk.white('  hydrogen module <moduleName>      Create a new module with the specified name, including controller, service, and interface.'));
  console.log(chalk.white('  hydrogen version                  Display the current Hydrogen CLI version.'));
  console.log(chalk.gray('='.repeat(40)));

  // Optionally, add a footer or additional information
  console.log(chalk.green('For more information, visit: https://hygrogencli.backslashgo.com\n'));
}
