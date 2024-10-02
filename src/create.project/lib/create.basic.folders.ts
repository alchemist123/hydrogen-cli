import { createFolders } from '../';
import { baseFolder } from '../../sample.hydrogen/folder.details/base.folder'
import { srcFolders } from '../../sample.hydrogen/folder.details/sub.folder.level.v1/src.folders'
import { databaseFolders } from '../../sample.hydrogen/folder.details/sub.folder.level.v1/database.folders'
import { repoFolders } from '../../sample.hydrogen/folder.details/sub.folder.level.v1/repo.folders'
import * as path from 'path';
export const createBasicFolders= (projectPath:string) :void =>{
    try{
        //create level one folders
        createFolders(projectPath,baseFolder);
        // create level two folders
        const srcPath = path.join(projectPath, 'src');
        createFolders(srcPath,srcFolders);
        const databasePath = path.join(projectPath, 'database');
        createFolders(databasePath,databaseFolders);
        const repoPath = path.join(srcPath, 'repositories');
        createFolders(repoPath,repoFolders);
        return;
    }catch(error:any){
        console.error("Oops!! basic folder creation error")
    }
}