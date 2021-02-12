import React from 'react'

type Node = {
  content: React.ReactNode
  childNodes?: Node[]
}

type Props = {
  node: Node
}

const OrganizationTreeChart = (props: Props): JSX.Element => {
  const { node } = props

  return <TreeNode edges={['start', 'end']} node={node} />
}

export default OrganizationTreeChart

type TreeNodeProps = Props & {
  edges: ('start' | 'end')[]
}

const TreeNode = (props: TreeNodeProps) => {
  const { edges, node } = props

  return (
    <div style={{ justifyItems: 'center', flexGrow: 1 }}>
      <div style={{ display: 'flex', height: '1rem' }}>
        <div
          style={{
            borderStyle: 'solid',
            borderColor: 'blue',
            borderWidth: 0,
            borderRightWidth: 1,
            flexGrow: 1,
            borderTopWidth: edges.includes('start') ? 0 : 1,
          }}
        />
        <div
          style={{
            borderStyle: 'solid',
            borderColor: 'blue',
            borderWidth: 0,
            flexGrow: 1,
            borderTopWidth: edges.includes('end') ? 0 : 1,
          }}
        />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {node.content}
      </div>
      {node.childNodes?.length && (
        <>
          <div style={{ display: 'flex', height: '1rem' }}>
            <div
              style={{
                borderStyle: 'solid',
                borderColor: 'blue',
                borderWidth: 0,
                borderRightWidth: 1,
                flexGrow: 1,
              }}
            />
            <div style={{ flexGrow: 1 }} />
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-evenly',
            }}
          >
            {node.childNodes.map((n, i) => (
              <TreeNode
                key={i}
                edges={
                  i === 0 && node.childNodes?.length === 1
                    ? ['start', 'end']
                    : i === 0
                    ? ['start']
                    : ['end']
                }
                node={n}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
