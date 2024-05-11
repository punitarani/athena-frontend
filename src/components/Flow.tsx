'use client'

import { useCallback, useMemo, useState } from 'react'
import ReactFlow, {
  addEdge,
  Node,
  Edge,
  applyNodeChanges,
  applyEdgeChanges,
  OnNodesChange,
  OnEdgesChange,
  OnConnect,
} from 'reactflow'

import TextUpdaterNode from '../components/nodes/TextUpdaterNode'

import 'reactflow/dist/style.css'


export default function App({
  nodes: initNodes,
  edges: initEdges,
}: {
  nodes: Node[]
  edges: Edge[]
}) {
  const [nodes, setNodes] = useState<Node[]>(initNodes)
  const [edges, setEdges] = useState<Edge[]>(initEdges)

  const nodeTypes = useMemo(() => ({ textUpdater: TextUpdaterNode }), []);

  const onNodesChange: OnNodesChange = useCallback(
    (chs) => {
      setNodes((nds) => applyNodeChanges(chs, nds))
    },
    [setNodes],
  )

  const onEdgesChange: OnEdgesChange = useCallback(
    (chs) => {
      setEdges((eds) => applyEdgeChanges(chs, eds))
    },
    [setEdges],
  )

  const onConnect: OnConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  )

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
      />
    </div>
  )
}
