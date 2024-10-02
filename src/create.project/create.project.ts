import * as fs from 'fs-extra';
import * as path from 'path';
import inquirer from 'inquirer';
import { execSync } from 'child_process'; // Import execSync to run shell commands
import { createBasicFolders } from '.';
import { createBasicFiles } from './lib/create.basic.file';
import { createModuleService } from '../create.module';

const databases = [
  { name: 'PostgreSQL', value: 'postgresql' }
];

export async function createProject(projectName: string): Promise<void> {
  const projectPath = path.join(process.cwd(), projectName);

  // Check if project folder already exists
  if (fs.existsSync(projectPath)) {
    console.error(`Error: Project folder "${projectName}" already exists.`);
    process.exit(1);
  }

  try {
    // Create project directory
    fs.mkdirSync(projectPath);

    // Prompt for database selection
    const answers = await inquirer.prompt([
      {
        type: 'list',
        name: 'database',
        message: 'Please select a database for your project:',
        choices: databases,
      },
    ]);

    // Log the selected database
    console.log(`Selected database: ${answers.database}`);

    // Creating basic folder structure
    createBasicFolders(projectPath);
    createBasicFiles(projectPath);
    
    // Change directory to the project path
    process.chdir(projectPath);

    // Create module sample
    createModuleService.createModule('sample');

    // Define the dependencies to be added
    const dependencies = [
      "dotenv@^16.4.5",
      "express@^4.19.2",
      "pg@^8.12.0",
      "reflect-metadata@^0.2.2",
      "sequelize@^6.37.3",
      "sequelize-typescript@^2.1.6",
      "tsyringe@^4.8.0",
      "uuid@^10.0.0",
      "@types/express",
      "@types/uuid",
      "nodemon",
      "sequelize-cli",
      "ts-node",
      "typescript"
    ];

    // Debugging output to verify projectPath
    console.log(`Executing yarn in directory: ${projectPath}`);

    // Run yarn add command to add dependencies
    console.log('Installing dependencies...');
    try {
      execSync(`yarn init -y`, { stdio: 'inherit', cwd: projectPath });
      execSync(`yarn add ${dependencies.join(' ')}`, { stdio: 'inherit', cwd: projectPath });
    } catch (error: any) {
      console.error(`Failed to install dependencies:`, error.message);
      process.exit(1);
    }

    // Update the package.json file with custom scripts
    const packageJsonPath = path.join(projectPath, 'package.json');
    const packageJson = fs.readJSONSync(packageJsonPath); // Read existing package.json

    // Add scripts to package.json
    packageJson.scripts = {
      "build": "npm run clean && tsc",
      "start": "ts-node src/main.ts",
      "dev": "nodemon src/main.ts",
      "clean": "rm -rf dist"
    };

    // Write the updated package.json back to the file system
    fs.writeJSONSync(packageJsonPath, packageJson, { spaces: 2 });

    console.log(`Project "${projectName}" created successfully at ${projectPath}.`);
    console.log(`Database ${answers.database} has been set up for your project.`);
  } catch (error: any) {
    console.error(`Failed to create project "${projectName}":`, error.message);
    process.exit(1);
  }
}
