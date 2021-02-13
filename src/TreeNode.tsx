import React from 'react'
import { Node } from '.'

type Props = {
  borderColor: string
  borderStyle: string
  borderWidth: string
  depth: number
  edgeEnd: boolean
  edgeStart: boolean
  hideRoot: boolean
  horizontalMargin: string | number
  verticalMargin: string | number
  node: Node
}

const TreeNode = (props: Props): JSX.Element => {
  const {
    borderColor,
    borderStyle,
    borderWidth,
    depth,
    edgeStart,
    edgeEnd,
    hideRoot,
    horizontalMargin,
    verticalMargin,
    node,
  } = props

  const content = hideRoot ? depth > 0 : true
  const topLine = hideRoot ? depth > 1 : depth > 0
  const bottomLine = hideRoot ? depth > 0 : true

  const styles = {
    line: {
      borderColor,
      borderStyle,
      borderWidth: 0,
      flexGrow: 1,
    },
  }

  return (
    <div>
      {topLine && (
        <div style={{ display: 'flex', height: `calc(${verticalMargin} / 2 )` }}>
          <div
            style={{
              ...styles.line,
              borderRightWidth: borderWidth,
              borderTopWidth: edgeStart ? 0 : borderWidth,
            }}
          />
          <div
            style={{
              ...styles.line,
              borderTopWidth: edgeEnd ? 0 : borderWidth,
            }}
          />
        </div>
      )}
      {content && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            paddingLeft: `calc(${horizontalMargin} / 2 )`,
            paddingRight: `calc(${horizontalMargin} / 2 )`,
          }}
        >
          {node.content}
        </div>
      )}
      {!!node.childNodes?.length && node.hideChild !== true && (
        <>
          {bottomLine && (
            <div style={{ display: 'flex', height: `calc(${verticalMargin} / 2 )` }}>
              <div
                style={{
                  ...styles.line,
                  borderRightWidth: borderWidth,
                }}
              />
              <div style={{ flexGrow: 1 }} />
            </div>
          )}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            {node.childNodes.map((n, i) => (
              <TreeNode
                {...props}
                depth={depth + 1}
                edgeEnd={i === (node.childNodes ?? []).length - 1}
                edgeStart={i === 0}
                key={i}
                node={n}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default TreeNode
