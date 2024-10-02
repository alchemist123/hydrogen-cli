"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProject = createProject;
const fs = __importStar(require("fs-extra"));
const path = __importStar(require("path"));
const inquirer_1 = __importDefault(require("inquirer"));
const child_process_1 = require("child_process"); // Import execSync to run shell commands
const _1 = require(".");
const create_basic_file_1 = require("./lib/create.basic.file");
const create_module_1 = require("../create.module");
const databases = [
    { name: 'PostgreSQL', value: 'postgresql' }
];
async function createProject(projectName) {
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
        const answers = await inquirer_1.default.prompt([
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
        (0, _1.createBasicFolders)(projectPath);
        (0, create_basic_file_1.createBasicFiles)(projectPath);
        // Change directory to the project path
        process.chdir(projectPath);
        // Create module sample
        create_module_1.createModuleService.createModule('sample');
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
            (0, child_process_1.execSync)(`yarn init -y`, { stdio: 'inherit', cwd: projectPath });
            (0, child_process_1.execSync)(`yarn add ${dependencies.join(' ')}`, { stdio: 'inherit', cwd: projectPath });
        }
        catch (error) {
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
    }
    catch (error) {
        console.error(`Failed to create project "${projectName}":`, error.message);
        process.exit(1);
    }
}
