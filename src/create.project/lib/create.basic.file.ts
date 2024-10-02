import path from 'path';
import { copyContentToFile } from '../';
import { fileIndex } from "../../sample.hydrogen/files/file.index";

// Define the structure of file categories within fileIndex
type FileCategory = keyof typeof fileIndex;

// Helper function to handle copying files to the specified directory
const copyFilesToDirectory = (fileCategory: FileCategory, targetDir: string) => {
    if (fileIndex[fileCategory]) {
        fileIndex[fileCategory].forEach((item) => {
            copyContentToFile(item.path, item.name, targetDir);
        });
    }
};

// Define the function to create basic files
export const createBasicFiles = (projectPath: string): void => {
    try {
        // Map of directory paths and corresponding file categories in fileIndex
        const directories: Record<FileCategory, string> = {
            base: projectPath,
            src: path.join(projectPath, 'src'),
            model: path.join(projectPath, 'src/models'),
            config: path.join(projectPath, 'src/config'),
            repo: path.join(projectPath, 'src/repositories'),
            repoInterface: path.join(projectPath, 'src/repositories/interface'),
        };

        // Iterate through the directories and copy files accordingly
        Object.entries(directories).forEach(([category, dirPath]) => {
            copyFilesToDirectory(category as FileCategory, dirPath);
        });

    } catch (error: any) {
        console.error("Oops!! basic folder creation error", error);
    }
};
