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
exports.createBasicFolders = void 0;
const __1 = require("../");
const base_folder_1 = require("../../sample.hydrogen/folder.details/base.folder");
const src_folders_1 = require("../../sample.hydrogen/folder.details/sub.folder.level.v1/src.folders");
const database_folders_1 = require("../../sample.hydrogen/folder.details/sub.folder.level.v1/database.folders");
const repo_folders_1 = require("../../sample.hydrogen/folder.details/sub.folder.level.v1/repo.folders");
const path = __importStar(require("path"));
const createBasicFolders = (projectPath) => {
    try {
        //create level one folders
        (0, __1.createFolders)(projectPath, base_folder_1.baseFolder);
        // create level two folders
        const srcPath = path.join(projectPath, 'src');
        (0, __1.createFolders)(srcPath, src_folders_1.srcFolders);
        const databasePath = path.join(projectPath, 'database');
        (0, __1.createFolders)(databasePath, database_folders_1.databaseFolders);
        const repoPath = path.join(srcPath, 'repositories');
        (0, __1.createFolders)(repoPath, repo_folders_1.repoFolders);
        return;
    }
    catch (error) {
        console.error("Oops!! basic folder creation error");
    }
};
exports.createBasicFolders = createBasicFolders;
