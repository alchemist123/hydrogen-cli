import * as fs from 'fs-extra';
import * as path from 'path';

// Define the type of files that can be generated
type FileType = 'controller' | 'service' | 'interface' | 'container';

// Utility function to capitalize the first letter of a string
function capitalizeFirstLetter(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Function to dynamically create different files from templates
export function createFilesFromTemplates(moduleName: string, baseModulePath: string): void {
  // Define the mapping of file types to their template and output file name
  const fileMappings: Record<FileType, { templateFile: string; outputFileName: string; folder?: string }> = {
    controller: {
      templateFile: path.join(__dirname, 'templates', 'controller-template.txt'),
      outputFileName: `${moduleName}.controller.ts`
    },
    service: {
      templateFile: path.join(__dirname, 'templates', 'service-template.txt'),
      outputFileName: `${moduleName}.service.ts`
    },
    interface: {
      templateFile: path.join(__dirname, 'templates', 'interface-template.txt'),
      outputFileName: `${moduleName}.interface.ts`,
      folder: 'interface' // Specify a separate folder for interface files
    },
    container: {
      templateFile: path.join(__dirname, 'templates', 'container-template.txt'),
      outputFileName: `${moduleName}.continer.ts`
    }
  };

  // Iterate over each file type and create the respective file
  for (const fileType of Object.keys(fileMappings) as FileType[]) {
    const { templateFile, outputFileName, folder } = fileMappings[fileType];
    const folderPath = folder ? path.join(baseModulePath, folder) : baseModulePath; // Create folder path if specified
    const outputFilePath = path.join(folderPath, outputFileName);

    try {
      // Create the folder if it doesn't exist
      if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath, { recursive: true });
      }

      // Read the content of the template file
      let fileContent = fs.readFileSync(templateFile, 'utf-8');

      // Replace placeholders in the template with dynamic values
      const className = capitalizeFirstLetter(moduleName);
      fileContent = fileContent
        .replace(/{ClassName}/g, className)
        .replace(/{ModuleName}/g, moduleName);

      // Write the modified content to the target file
      fs.writeFileSync(outputFilePath, fileContent);
      console.log(`${capitalizeFirstLetter(fileType)} "${outputFileName}" created successfully at ${outputFilePath}.`);
    } catch (error: any) {
      console.error(`Failed to create ${fileType} file "${outputFileName}":`, error.message);
    }
  }
}
