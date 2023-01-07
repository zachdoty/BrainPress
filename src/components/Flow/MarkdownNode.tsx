import React, { FC, memo } from "react";
import { Handle, Position } from "reactflow";
import ReactMarkdown from 'react-markdown'

const MarkdownNode: FC<any> = memo(({ data, isConnectable }: any) => {
    return (
        <>
            <Handle
                type="target"
                position={Position.Left}
                style={{ background: "#555" }}
                onConnect={(params) => console.log("handle onConnect", params)}
                isConnectable={isConnectable}
            />
            <ReactMarkdown>{data.text}</ReactMarkdown>
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

MarkdownNode.displayName = "MarkdownNode";

export default MarkdownNode;
