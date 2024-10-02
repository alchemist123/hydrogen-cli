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
exports.copyContentToFile = copyContentToFile;
const fs = __importStar(require("fs-extra"));
const path = __importStar(require("path"));
/**
 * Create a file with the specified filename and file path, copying the content from an existing template file.
 * @param templateFilePath - The path to the template file from which to copy content.
 * @param fileName - The name of the file to create.
 * @param savePath - The path where the file will be saved.
 */
function copyContentToFile(templateFilePath, fileName, savePath) {
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
