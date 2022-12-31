import { resolve } from "path";
import { promises as fs } from "fs";

export const getFiles = async (dir: string) => {
    const dirents = await fs.readdir(dir, { withFileTypes: true });
    const files: any = await Promise.all(
        dirents.map((dirent) => {
            const res = resolve(dir, dirent.name);
            return dirent.isDirectory() ? getFiles(res) : res
        })
    );
    return Array.prototype.concat(...files);
};

export const getFileName = (path: string) => {
    return path.split("/").pop();
};
