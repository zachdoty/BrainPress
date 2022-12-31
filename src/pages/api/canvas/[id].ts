import type { NextApiRequest, NextApiResponse } from "next";
import path from "path";
import { promises as fs } from "fs";
import { parseData, getExtension } from "../../../utils";
import { getFiles } from "../../../backend/utils";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    const { id } = req.query;
    const jsonDirectory = path.join(process.cwd(), "public/obsidian");
    const jsonFiles = (await getFiles(jsonDirectory)).filter(
        (f) => getExtension(f) === "canvas" && f.includes(id as string)
    );

    const data = await fs.readFile(jsonDirectory + `/${id}.canvas`, "utf8");

    res.status(200).json({
        files: jsonFiles,
        active: id,
        data: parseData(JSON.parse(data)),
    });
}
