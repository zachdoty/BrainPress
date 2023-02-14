import React, { FC, memo } from "react";
import { Handle, Position } from "reactflow";
import ReactMarkdown from 'react-markdown'

const MarkdownNode: FC<any> = memo(({ data, isConnectable }: any) => {
    return (
        <>
            <Handle
                id="left"
                type="source"
                position={Position.Left}
                style={{ background: "#555" }}
                onConnect={(params) => console.log("handle onConnect", params)}
                isConnectable={isConnectable}
            />
            <ReactMarkdown>{data.text}</ReactMarkdown>
            <Handle
                id="top"
                type="source"
                position={Position.Top}
                style={{ top: 10, background: "#555" }}
                isConnectable={isConnectable}
            />
            <Handle
                id="right"
                type="source"
                position={Position.Right}
                style={{ background: "#555" }}
                isConnectable={isConnectable}
            />
            <Handle
                id="bottom"
                type="source"
                position={Position.Bottom}
                style={{ bottom: 10, top: "auto", background: "#555" }}
                isConnectable={isConnectable}
            />
        </>
    );
});

MarkdownNode.displayName = "MarkdownNode";

export default MarkdownNode;
