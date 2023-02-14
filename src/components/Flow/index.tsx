import { FC, useMemo } from "react";
import ReactFlow, { Edge, Node, ConnectionLineType, Controls } from "reactflow";
import "reactflow/dist/style.css";
import FileNode from "./FileNode";
import LinkNode from "./LinkNode";
import MarkdownNode from "./MarkdownNode";

interface FlowProps {
    data: {
        nodes: Array<Node>;
        edges: Array<Edge>;
    };
}

const Flow: FC<FlowProps> = ({ data }) => {
    const { nodes, edges } = data;
    const nodeTypes = useMemo(
        () => ({ file: FileNode, markdown: MarkdownNode, link: LinkNode }),
        []
    );

    return (
        <>
            {edges && nodes && (
                <ReactFlow
                    connectionLineType={ConnectionLineType.Straight}
                    fitView
                    nodeTypes={nodeTypes}
                    nodes={nodes}
                    edges={edges}
                    connectionMode="loose"
                >
                    <Controls />
                </ReactFlow>
            )}
        </>
    );
};

export default Flow;
