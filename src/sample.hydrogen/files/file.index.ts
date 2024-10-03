const path = require('path');

// Define the structure for the file details
interface FileDetails {
    path: string;
    name: string; 
}

// Define the structure for the file index object
interface FileIndex {
    base: FileDetails[];
    src: FileDetails[];
    model: FileDetails[];
    config: FileDetails[];
    repo: FileDetails[];
    repoInterface: FileDetails[];
}

// Create the file index object to organize your files
export const fileIndex: FileIndex = {
    base: [
        { path: path.join(__dirname, 'files.level.v1', "env.txt"), name: ".env" },
        { path: path.join(__dirname, 'files.level.v1', "gitignore.txt"), name: ".gitignore" },
        { path: path.join(__dirname, 'files.level.v1', "sequelizerc.txt"), name: ".sequelizerc" },
        { path: path.join(__dirname, 'files.level.v1', "tsconfig.json.txt"), name: "tsconfig.json" }
    ],
    src:[
        { path: path.join(__dirname, 'files.src.level.v2', "app.txt"), name: "app.ts" },
        { path: path.join(__dirname, 'files.src.level.v2', "container.txt"), name: "container.ts" },
        { path: path.join(__dirname, 'files.src.level.v2', "main.txt"), name: "main.ts" },
    ],
    model:[
        { path: path.join(__dirname, 'files.models.level.v2', "index.txt"), name: "index.ts" },
        { path: path.join(__dirname, 'files.models.level.v2', "sample.txt"), name: "sample.ts" },
    ],
    config:[
        { path: path.join(__dirname, 'files.config.level.v2', "config.json.txt"), name: "config.json" },
        { path: path.join(__dirname, 'files.config.level.v2', "database.txt"), name: "database.ts" },
    ],
    repo:[
        { path: path.join(__dirname, 'file.repo.level.v2', "sample.repository.txt"), name: "sample.repository.ts" },
    ],
    repoInterface: [
        { path: path.join(__dirname, 'file.repo.interface.level.v3', "sample.repository.interface.txt"), name: "sample.repository.interface.ts" },
    ]
};
