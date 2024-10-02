import * as fs from 'fs-extra';
import * as path from 'path';
export const createFolders = (projectPath: string, folders: string[]): void =>{
    folders.forEach(folder => {
      const folderPath = path.join(projectPath, folder);
      if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath, { recursive: true });
        console.log(`Created folder: ${folderPath}`);
      } else {
        console.warn(`Folder "${folder}" already exists, skipping.`);
      }
    });
    return;
  }
  