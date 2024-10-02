#!/usr/bin/env node

import { Command } from 'commander';
import { createProjectService } from '../src/create.project';
import { createModuleService } from '../src/create.module';
import { displayVersion } from '../src/vesrion/display.version';



const program = new Command();

// // Define the version and description
program
  .command('version')
  .description('Hydregen CLI - A custom CLI tool for Node.js frameworks.')
  .action( async() => await displayVersion()); // Display version and help

// Define the "create project" command
program
  .command('create <projectName>')
  .description('Create a new project with the specified name.')
  .action((projectName: string) => {
    createProjectService.createProject(projectName);
  });

// Define the "module" command
program
  .command('module <moduleName>')
  .description('Create a new module with the specified name.')
  .action((moduleName) => {
    createModuleService.createModule(moduleName);
  });

// Parse the command-line arguments
program.parse(process.argv);
