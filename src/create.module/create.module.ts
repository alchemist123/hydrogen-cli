import * as fs from 'fs-extra';
import * as path from 'path';
import { createFilesFromTemplates } from './lib/create.templete';

export function createModule(ModuleName: string): void {
  // Get the base path of the "src" directory
  const modulePath = path.join(process.cwd(), "src", ModuleName);

  // Check if the module folder already exists
  if (fs.existsSync(modulePath)) {
    console.error(`Error: Module folder "${ModuleName}" already exists.`);
    process.exit(1);
  }

  try {
    // Create the project directory using the module path
    fs.mkdirSync(modulePath, { recursive: true });

    // Optional: Create additional subfolders or files as part of the module
    fs.mkdirSync(path.join(modulePath, 'interface'));
    fs.mkdirSync(path.join(modulePath, 'type'));

    createFilesFromTemplates(ModuleName,modulePath)


    console.log(`Project "${ModuleName}" created successfully at ${modulePath}.`);
  } catch (error: any) {
    console.error(`Failed to create project "${ModuleName}":`, error.message);
    process.exit(1);
  }
}
