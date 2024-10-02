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
exports.copyContentToFile = exports.createBasicFolders = exports.createFolders = exports.createProject = exports.createProjectService = void 0;
exports.createProjectService = __importStar(require("."));
var create_project_1 = require("./create.project");
Object.defineProperty(exports, "createProject", { enumerable: true, get: function () { return create_project_1.createProject; } });
var create_folder_1 = require("./lib/create.folder");
Object.defineProperty(exports, "createFolders", { enumerable: true, get: function () { return create_folder_1.createFolders; } });
var create_basic_folders_1 = require("./lib/create.basic.folders");
Object.defineProperty(exports, "createBasicFolders", { enumerable: true, get: function () { return create_basic_folders_1.createBasicFolders; } });
var create_file_1 = require("./lib/create.file");
Object.defineProperty(exports, "copyContentToFile", { enumerable: true, get: function () { return create_file_1.copyContentToFile; } });
