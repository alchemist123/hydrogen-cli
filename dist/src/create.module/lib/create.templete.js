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
Object.defineProperty(exports, "__esModule", { value: true });
exports.createFilesFromTemplates = createFilesFromTemplates;
const fs = __importStar(require("fs-extra"));
const path = __importStar(require("path"));
// Utility function to capitalize the first letter of a string
function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
// Function to dynamically create different files from templates
function createFilesFromTemplates(moduleName, baseModulePath) {
    // Define the mapping of file types to their template and output file name
    const fileMappings = {
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
    for (const fileType of Object.keys(fileMappings)) {
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
        }
        catch (error) {
            console.error(`Failed to create ${fileType} file "${outputFileName}":`, error.message);
        }
    }
}
