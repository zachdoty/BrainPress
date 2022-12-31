/* eslint-disable @next/next/no-img-element */
import React, { FC, memo } from "react";
import { Handle, Position } from "reactflow";
import { getExtension } from "../../utils";

const FileNode: FC<any> = memo(({ data, isConnectable }: any) => {

    const getFileType = (file: string) => {
        const ext = getExtension(file);
        if (["png", "jpg", "jpeg", "gif"].includes(ext)) return "image";
        if (["mp4", "mov", "avi"].includes(ext)) return "video";
        if (["mp3", "wav"].includes(ext)) return "audio";
        if (["md", "txt"].includes(ext)) return "text";
        return ext;
    };

    const type = getFileType(data.value);

    return (
        <>
            <Handle
                type="target"
                position={Position.Left}
                style={{ background: "#555" }}
                onConnect={(params) => console.log("handle onConnect", params)}
                isConnectable={isConnectable}
            />
            {type === "image" && (
                <img
                    src={`/obsidian/${data.value}`}
                    alt=""
                    className="w-full h-full object-cover"
                />
            )}
            {type === "video" && (
                <video controls={true} className="w-full h-full">
                    <source
                        src={`/obsidian/${data.value}`}
                        type={`video/${getExtension(data.value)}`}
                    />
                </video>
            )}
            {type === "pdf" && (
                <object
                    data={`/obsidian/${data.value}`}
                    className="w-full h-full object-cover"
                />
            )}
            <Handle
                type="source"
                position={Position.Top}
                id="a"
                style={{ top: 10, background: "#555" }}
                isConnectable={isConnectable}
            />
            <Handle
                type="source"
                position={Position.Right}
                id="b"
                style={{ bottom: 10, top: "auto", background: "#555" }}
                isConnectable={isConnectable}
            />
        </>
    );
});

FileNode.displayName = "FileNode";

export default FileNode;
