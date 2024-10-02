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
exports.createModule = createModule;
const fs = __importStar(require("fs-extra"));
const path = __importStar(require("path"));
const create_templete_1 = require("./lib/create.templete");
function createModule(ModuleName) {
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
        (0, create_templete_1.createFilesFromTemplates)(ModuleName, modulePath);
        console.log(`Project "${ModuleName}" created successfully at ${modulePath}.`);
    }
    catch (error) {
        console.error(`Failed to create project "${ModuleName}":`, error.message);
        process.exit(1);
    }
}
