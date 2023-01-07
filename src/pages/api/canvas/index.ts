import type { NextApiRequest, NextApiResponse } from "next";
import path from "path";
import { promises as fs } from "fs";
import { parseData } from "../../../utils";

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

    const data = await fs.readFile(jsonDirectory + "/home.canvas", "utf8");

    res.status(200).json({
        active: "home",
        data: parseData(JSON.parse(data)),
    });
}
