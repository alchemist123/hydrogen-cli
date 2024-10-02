#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const create_project_1 = require("../src/create.project");
const create_module_1 = require("../src/create.module");
const display_version_1 = require("../src/vesrion/display.version");
const program = new commander_1.Command();
// // Define the version and description
program
    .command('version')
    .description('Hydregen CLI - A custom CLI tool for Node.js frameworks.')
    .action(async () => await (0, display_version_1.displayVersion)()); // Display version and help
// Define the "create project" command
program
    .command('create <projectName>')
    .description('Create a new project with the specified name.')
    .action((projectName) => {
    create_project_1.createProjectService.createProject(projectName);
});
// Define the "module" command
program
    .command('module <moduleName>')
    .description('Create a new module with the specified name.')
    .action((moduleName) => {
    create_module_1.createModuleService.createModule(moduleName);
});
// Parse the command-line arguments
program.parse(process.argv);
