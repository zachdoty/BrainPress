import { Edge, Node } from "reactflow";

import { ObsidianEdge, ObsidianNode } from "../types/Obsidian";

const replaceLink = (link: string | undefined) => {
    if (!link) return link;

    const regExp = /\[\[(.*?)\]\]/gm;
    let matches;
    do {
        matches = regExp.exec(link);
        if (matches) {
            const dt = matches[1];
            const ext = getExtension(dt);
            if (ext === "canvas") {
                link = link.replace(
                    matches[0],
                    `[${matches[1]}](/view/${encodeURIComponent(
                        matches[1].replace(".canvas", "")
                    )})`
                );
            } else {
                link = link.replace(
                    matches[0],
                    `[${matches[1]}](/md/${encodeURIComponent(matches[1])})`
                );
            }
        }
    } while (matches);
    return link;
};

export const getExtension = (file: string) => {
    const fileParts = file.split(".");
    return fileParts[fileParts.length - 1];
};

const getText = (node: ObsidianNode): string | undefined => {
    let text = node.text;
    if (node.type === "file") {
        text = "";
    } else if (node.type === "group") {
        text = node.label;
    }
    return replaceLink(text);
};

const getValue = (node: ObsidianNode): string | undefined => {
    if (node.type === "file") {
        return node.file;
    } else if (node.type === "link") {
        return node.url;
    } else {
        return "";
    }
};

export const parseData = (data: {
    nodes: Array<ObsidianNode>;
    edges: Array<ObsidianEdge>;
}): { nodes: Array<Node>; edges: Array<Edge> } | null => {
    let res = null;
    if (data) {
        const nodes = data.nodes.map((node) => {
            return {
                id: node.id,
                type: !["text", "group"].includes(node.type)
                    ? node.type
                    : "markdown",
                data: {
                    text: getText(node),
                    value: getValue(node),
                },
                position: {
                    x: node.x,
                    y: node.y,
                },
                style: {
                    width: node.width,
                    height: node.height,
                    zIndex: node.type === "group" ? -1 : 1,
                },
            };
        });
        const edges = data.edges.map((edge) => {
            return {
                id: edge.id,
                source: edge.fromNode,
                target: edge.toNode,
            };
        });
        res = { nodes, edges };
    }
    return res;
};
