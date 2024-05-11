'use client'

import { Edge, Node, ReactFlowProvider } from 'reactflow'

import styles from './page.module.css'
import Flow from '../components/Flow'

const nodeSize = {
  width: 100,
  height: 40,
}

// this example uses some v12 features that are not released yet
const initialNodes: Node[] = [
  {
    id: '1',
    type: 'input',
    data: { label: 'Node 1' },
    position: { x: 250, y: 5 },
    width: nodeSize.width,
    height: nodeSize.height,
  },
  {
    id: '2',
    data: { label: 'Node 2' },
    position: { x: 100, y: 100 },
    width: nodeSize.width,
    height: nodeSize.height,
  },
  {
    id: '3',
    data: { label: 'Node 3' },
    position: { x: 400, y: 100 },
    width: nodeSize.width,
    height: nodeSize.height,
  },
]

const initialEdges: Edge[] = [
  { id: 'e1-2', source: '1', target: '2', animated: false },
  { id: 'e1-3', source: '1', target: '3', animated: true },
]

function fetchData(): { nodes: Node[]; edges: Edge[] } {
  return { nodes: initialNodes, edges: initialEdges }
}

export default function Page() {
  const { nodes, edges } = fetchData()

  return (
    <main className={styles.main}>
      <ReactFlowProvider>
        <Flow nodes={nodes} edges={edges} />
      </ReactFlowProvider>
    </main>
  )
}
