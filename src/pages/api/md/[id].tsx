import type { NextApiRequest, NextApiResponse } from "next";
import path from "path";
import { promises as fs } from "fs";
import { getExtension } from "../../../utils";
import { getFiles } from "../../../backend/utils";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    const { id } = req.query;
    const jsonDirectory = path.join(process.cwd(), "public/obsidian");
    const mdFiles = (await getFiles(jsonDirectory)).filter(
        (f) => getExtension(f) === "md" && f.includes(id as string)
    );

    let data = null;

    if (mdFiles.length > 0) data = await fs.readFile(mdFiles[0], "utf8");

    res.status(200).json({
        data,
    });
}
