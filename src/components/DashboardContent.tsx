import React, { useState, useRef } from "react";

type NodeType = "normal" | "fallback";

interface Node {
  id: string;
  type: NodeType;
  x: number;
  y: number;
  text: string;
}

interface Edge {
  from: string;
  to: string;
}

function DashboardContent() {
  const [nodes, setNodes] = useState<Node[]>([]);
  const [edges, setEdges] = useState<Edge[]>([]);
  const [draggingNodeId, setDraggingNodeId] = useState<string | null>(null);
  const [dragOffset, setDragOffset] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [dragLinkFrom, setDragLinkFrom] = useState<string | null>(null);
  const [dragLinkTo, setDragLinkTo] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const addNode = () => {
    const container = containerRef.current;
    const rect = container?.getBoundingClientRect();
    const x = rect ? rect.width / 2 - 75 : 100;
    const y = rect ? rect.height / 2 - 50 : 100;
    const newNode: Node = {
      id: Date.now().toString(),
      type: "normal",
      x,
      y,
      text: "Edit me",
    };
    setNodes((ns) => [...ns, newNode]);
  };

  const addFallback = () => {
    const container = containerRef.current;
    const rect = container?.getBoundingClientRect();
    const x = rect ? rect.width / 2 - 75 : 100;
    const y = rect ? rect.height / 2 - 50 : 100;
    const newNode: Node = {
      id: Date.now().toString(),
      type: "fallback",
      x,
      y,
      text: "Fallback",
    };
    setNodes((ns) => [...ns, newNode]);
  };

  const clearBoard = () => {
    setNodes([]);
    setEdges([]);
  };

  const onNodeMouseDown = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    const node = nodes.find((n) => n.id === id);
    if (!node) return;
    const startX = e.clientX;
    const startY = e.clientY;
    setDraggingNodeId(id);
    setDragOffset({ x: startX - node.x, y: startY - node.y });
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!draggingNodeId) return;
    e.preventDefault();
    const newX = e.clientX - dragOffset.x;
    const newY = e.clientY - dragOffset.y;
    setNodes((ns) =>
      ns.map((node) => (node.id === draggingNodeId ? { ...node, x: newX, y: newY } : node))
    );
  };

  const onMouseUp = () => {
    if (draggingNodeId) setDraggingNodeId(null);
  };

  const deleteNode = (id: string) => {
    setNodes((ns) => ns.filter((n) => n.id !== id));
    setEdges((es) => es.filter((e) => e.from !== id && e.to !== id));
  };

  const onTextChange = (id: string, value: string) => {
    setNodes((ns) => ns.map((n) => (n.id === id ? { ...n, text: value } : n)));
  };

  const onLinkDragStart = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    setDragLinkFrom(id);
    setDragLinkTo(null);
  };

  const onNodeDragOver = (e: React.DragEvent, id: string) => {
    e.preventDefault();
    if (dragLinkFrom && id !== dragLinkFrom) {
      setDragLinkTo(id);
    }
  };

  const onNodeDragLeave = (e: React.DragEvent, id: string) => {
    e.preventDefault();
    if (dragLinkTo === id) {
      setDragLinkTo(null);
    }
  };

  const onNodeDrop = (e: React.DragEvent, id: string) => {
    e.preventDefault();
    if (dragLinkFrom && id !== dragLinkFrom) {
      setEdges((es) => {
        if (es.find((edge) => edge.from === dragLinkFrom && edge.to === id)) return es;
        return [...es, { from: dragLinkFrom, to: id }];
      });
    }
    setDragLinkFrom(null);
    setDragLinkTo(null);
  };

  const NODE_WIDTH = 150;
  const NODE_HEIGHT = 100;

  const getNodeCenter = (node: Node) => ({
    x: node.x + NODE_WIDTH / 2,
    y: node.y + NODE_HEIGHT / 2,
  });

  return (
    <div className="flex h-full min-h-[600px] text-white bg-[#222228]">
      <div className="w-48 bg-[#1f1f24] border-r border-fuchsia-600/30 p-4 flex flex-col gap-4">
        <button onClick={addNode} className="bg-fuchsia-600 hover:bg-fuchsia-500 rounded-md py-2 font-semibold">
          Add New Node
        </button>
        <button onClick={addFallback} className="bg-violet-600 hover:bg-violet-500 rounded-md py-2 font-semibold">
          Add Fallback
        </button>
        <button onClick={clearBoard} className="bg-red-600 hover:bg-red-500 rounded-md py-2 font-semibold">
          Clear Board
        </button>
      </div>
      <div
        className="relative flex-1 overflow-hidden"
        ref={containerRef}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
      >
        <svg className="absolute top-0 left-0 w-full h-full pointer-events-none">
          {edges.map(({ from, to }, i) => {
            const fromNode = nodes.find((n) => n.id === from);
            const toNode = nodes.find((n) => n.id === to);
            if (!fromNode || !toNode) return null;
            const fromCenter = getNodeCenter(fromNode);
            const toCenter = getNodeCenter(toNode);
            return (
              <line
                key={i}
                x1={fromCenter.x}
                y1={fromCenter.y}
                x2={toCenter.x}
                y2={toCenter.y}
                stroke="#bb86fc"
                strokeWidth={3}
                markerEnd="url(#arrowhead)"
              />
            );
          })}
          <defs>
            <marker
              id="arrowhead"
              markerWidth="10"
              markerHeight="7"
              refX="10"
              refY="3.5"
              orient="auto"
              fill="#bb86fc"
            >
              <polygon points="0 0, 10 3.5, 0 7" />
            </marker>
          </defs>
        </svg>
        {nodes.map((node) => (
          <div
            key={node.id}
            draggable
            onDragStart={(e) => onLinkDragStart(e, node.id)}
            onDragOver={(e) => onNodeDragOver(e, node.id)}
            onDragLeave={(e) => onNodeDragLeave(e, node.id)}
            onDrop={(e) => onNodeDrop(e, node.id)}
            onMouseDown={(e) => onNodeMouseDown(e, node.id)}
            className={`absolute bg-[#3a3a45] rounded-lg border border-fuchsia-600/50 shadow-lg flex flex-col p-3 ${
              draggingNodeId === node.id ? "opacity-70" : "opacity-100"
            }`}
            style={{ width: NODE_WIDTH, height: NODE_HEIGHT, left: node.x, top: node.y, userSelect: "none" }}
          >
            <div className="flex justify-between items-center mb-1">
              <div className="font-semibold text-white select-text cursor-text">
                {node.type === "fallback" ? (
                  <div>{node.text}</div>
                ) : (
                  <input
                    type="text"
                    value={node.text}
                    onChange={(e) => onTextChange(node.id, e.target.value)}
                    className="bg-[#2a2a31] rounded px-2 py-1 w-full text-white border border-transparent focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
                  />
                )}
              </div>
              <button
                onClick={() => deleteNode(node.id)}
                className="text-red-500 font-bold hover:text-red-700"
                title="Delete node"
              >
                ×
              </button>
            </div>
            <div className="text-xs text-gray-400 select-none">{node.id}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DashboardContent;
