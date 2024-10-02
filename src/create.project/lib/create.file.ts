import * as fs from 'fs-extra';
import * as path from 'path';

/**
 * Create a file with the specified filename and file path, copying the content from an existing template file.
 * @param templateFilePath - The path to the template file from which to copy content.
 * @param fileName - The name of the file to create.
 * @param savePath - The path where the file will be saved.
 */
export function copyContentToFile(templateFilePath: string, fileName: string, savePath: string): void {
    // Ensure the template file exists
    if (!fs.existsSync(templateFilePath)) {
        console.error(`Template file "${templateFilePath}" does not exist.`);
        return;
    }

    // Read the content from the template file
    const content = fs.readFileSync(templateFilePath, 'utf-8');

    // Create the full path for the new file
    const fullPath = path.join(savePath, fileName);

    // Create or overwrite the file with the content
    fs.writeFileSync(fullPath, content);
    console.log(`File "${fileName}" created successfully at "${savePath}".`);
}