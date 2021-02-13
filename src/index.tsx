import React from 'react'
import TreeNode from './TreeNode'

export type Node = {
  content: React.ReactNode
  childNodes?: Node[]
  hideChild?: boolean
}

type Props = {
  borderColor?: string
  borderStyle?: string
  borderWidth?: string
  hideRoot?: boolean
  horizontalMargin?: string | number
  verticalMargin?: string | number
  node: Node
}

const OrganizationTreeChart = (props: Props): JSX.Element => {
  const {
    borderColor = 'gray',
    borderStyle = 'solid',
    borderWidth = '1px',
    hideRoot = false,
    horizontalMargin = '1rem',
    verticalMargin = '5rem',
    node,
  } = props
  const newProps = {
    borderColor,
    borderStyle,
    borderWidth,
    hideRoot,
    horizontalMargin,
    verticalMargin,
    node,
  }
  return <TreeNode {...newProps} depth={0} edgeEnd edgeStart />
}

export default OrganizationTreeChart
