import React, { FC, memo } from "react";
import { Handle, Position } from "reactflow";

const LinkNode: FC<any> = memo(({ data, isConnectable }: any) => {
    return (
        <>
            <Handle
                id="left"
                type="source"
                position={Position.Left}
                style={{ background: "#555" }}
                isConnectable={isConnectable}
            />
            <iframe className="w-full h-full" src={data.value} />
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
                position={Position.Right}
                style={{ bottom: 10, top: "auto", background: "#555" }}
                isConnectable={isConnectable}
            />
        </>
    );
});

LinkNode.displayName = "LinkNode";

export default LinkNode;
