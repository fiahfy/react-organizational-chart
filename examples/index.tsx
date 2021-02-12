import React from 'react'
import ReactDOM from 'react-dom'
import OrganizationTreeChart from '../src'

const Div = ({ children }: { children: React.ReactNode }) => (
  <div
    style={{
      width: 200,
      height: 50,
      border: '1px solid red',
      alignItems: 'center',
      justifyContent: 'center',
      display: 'flex',
    }}
  >
    {children}
  </div>
)
const node = {
  content: <Div>Root</Div>,
  childNodes: [
    {
      content: <Div>Parent1</Div>,
      childNodes: [
        {
          content: <Div>Child1-1</Div>,
        },
      ],
    },
    {
      content: <Div>Parent2</Div>,
      childNodes: [
        {
          content: <Div>Child2-1</Div>,
        },
        {
          content: <Div>Child2-2</Div>,
        },
      ],
    },
  ],
}

const App = () => {
  return <OrganizationTreeChart node={node} />
}

ReactDOM.render(<App />, document.getElementById('app'))
