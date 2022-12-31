import type { NextApiRequest, NextApiResponse } from "next";
import path from "path";
import { promises as fs } from "fs";
import { getExtension, parseData } from "../../../utils";
import { getFiles } from "../../../backend/utils";

export const readJSON = async (file: string, path: string) => {
    const fileContents = await fs.readFile(path, "utf8");
    return {
        name: file,
        content: parseData(JSON.parse(fileContents)),
    };
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    const jsonDirectory = path.join(process.cwd(), "public/obsidian");
    const jsonFiles = (await getFiles(jsonDirectory)).filter(
        (f) => getExtension(f) === "canvas"
    );

    // const promise: any = [];

    // jsonFiles.forEach(async (file) => {
    //     promise.push(readJSON(file, jsonDirectory + "/" + file));
    // });

    // const data = await Promise.all(promise);

    const data = await fs.readFile(jsonDirectory + "/home.canvas", "utf8");

    res.status(200).json({
        files: jsonFiles,
        active: "home",
        data: parseData(JSON.parse(data)),
    });
}
