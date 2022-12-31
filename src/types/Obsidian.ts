export interface ObsidianNode {
    id: string;
    x: number;
    y: number;
    width: number;
    height: number;
    type: string;
    text?: string;
    label?: string;
    file?: string;
    url?: string;
}

export interface ObsidianEdge {
    id: string;
    fromNode: string;
    toNode: string;
}