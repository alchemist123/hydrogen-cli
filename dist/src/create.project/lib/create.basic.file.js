"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createBasicFiles = void 0;
const path_1 = __importDefault(require("path"));
const __1 = require("../");
const file_index_1 = require("../../sample.hydrogen/files/file.index");
// Helper function to handle copying files to the specified directory
const copyFilesToDirectory = (fileCategory, targetDir) => {
    if (file_index_1.fileIndex[fileCategory]) {
        file_index_1.fileIndex[fileCategory].forEach((item) => {
            (0, __1.copyContentToFile)(item.path, item.name, targetDir);
        });
    }
};
// Define the function to create basic files
const createBasicFiles = (projectPath) => {
    try {
        // Map of directory paths and corresponding file categories in fileIndex
        const directories = {
            base: projectPath,
            src: path_1.default.join(projectPath, 'src'),
            model: path_1.default.join(projectPath, 'src/models'),
            config: path_1.default.join(projectPath, 'src/config'),
            repo: path_1.default.join(projectPath, 'src/repositories'),
            repoInterface: path_1.default.join(projectPath, 'src/repositories/interface'),
        };
        // Iterate through the directories and copy files accordingly
        Object.entries(directories).forEach(([category, dirPath]) => {
            copyFilesToDirectory(category, dirPath);
        });
    }
    catch (error) {
        console.error("Oops!! basic folder creation error", error);
    }
};
exports.createBasicFiles = createBasicFiles;
