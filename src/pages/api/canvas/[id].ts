import type { NextApiRequest, NextApiResponse } from "next";
import path from "path";
import { promises as fs } from "fs";
import { parseData } from "../../../utils";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    const { id } = req.query;
    const jsonDirectory = path.join(process.cwd(), "public/obsidian");
    

    const data = await fs.readFile(jsonDirectory + `/${id ?? 'home'}.canvas`, "utf8");

    res.status(200).json({
        active: id,
        data: parseData(JSON.parse(data)),
    });
}
