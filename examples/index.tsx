import React, { useMemo, useState } from 'react'
import ReactDOM from 'react-dom'
import OrganizationTreeChart from '../src'

const Item = ({
  children,
  childSize,
  hideChild,
  onClick,
}: {
  children: React.ReactNode
  childSize: number
  hideChild: boolean
  onClick: () => void
}) => (
  <div
    onClick={onClick}
    style={{
      alignItems: 'center',
      border: '1px solid red',
      cursor: 'pointer',
      display: 'flex',
      height: 50,
      justifyContent: 'center',
      position: 'relative',
      width: 200,
    }}
  >
    {childSize > 0 && (
      <div style={{ margin: '1rem', position: 'absolute', left: 0 }}>
        {hideChild ? '+' : '-'}
      </div>
    )}
    <div style={{ textAlign: 'center' }}>
      {children} {childSize > 0 ? `(${childSize})` : ''}
    </div>
  </div>
)

const item = {
  id: '1',
  items: [
    {
      id: '1-1',
      items: [
        {
          id: '1-1-1',
        },
      ],
    },
    {
      id: '1-2',
      items: [
        {
          id: '1-2-1',
        },
        {
          id: '1-2-2',
          items: [
            {
              id: '1-2-2-1',
            },
            {
              id: '1-2-2-2',
            },
          ],
        },
      ],
    },
    {
      id: '1-3',
      items: [
        {
          id: '1-3-1',
        },
        {
          id: '1-3-2',
        },
      ],
    },
  ],
}

const useToggle = (initialIds: string[]) => {
  const [hiddenIds, setHiddenIds] = useState<string[]>(initialIds)
  const isHidden = (id: string) => hiddenIds.includes(id)
  const toggle = (id: string) => {
    setHiddenIds((hiddenIds) =>
      isHidden(id) ? hiddenIds.filter((i) => i !== id) : [...hiddenIds, id]
    )
  }
  return { isHidden, toggle }
}

const App = () => {
  const [options, setOptions] = useState({
    borderColor: 'gray',
    borderStyle: 'solid',
    borderWidth: '1px',
    hideRoot: false,
    horizontalMargin: '1rem',
    verticalMargin: '5rem',
  })
  const { isHidden, toggle } = useToggle(['1-2'])

  const node = useMemo(() => {
    const convert = ({ id, items }) => {
      return {
        content: (
          <Item
            childSize={(items ?? []).length}
            hideChild={isHidden(id)}
            onClick={() => toggle(id)}
          >
            Item {id}
          </Item>
        ),
        hideChild: isHidden(id),
        childNodes: (items ?? []).map(convert),
      }
    }
    return convert(item)
  }, [isHidden, toggle])

  return (
    <div
      style={{
        boxSizing: 'border-box',
        display: 'flex',
        height: '100%',
        padding: '1rem',
      }}
    >
      <div style={{ flexGrow: 1 }}>
        <OrganizationTreeChart node={node} {...options} />
      </div>
      <fieldset>
        <legend>Options</legend>
        <label style={{ display: 'block', whiteSpace: 'nowrap' }}>
          borderColor:
          <select
            onChange={(e) =>
              setOptions((options) => ({
                ...options,
                borderColor: e.target.value,
              }))
            }
            value={options.borderColor}
          >
            {['gray', 'red', 'blue', 'yellow', 'green'].map((value, i) => {
              return (
                <option key={i} value={value}>
                  {value}
                </option>
              )
            })}
          </select>
        </label>
        <label style={{ display: 'block', whiteSpace: 'nowrap' }}>
          borderStyle:
          <select
            onChange={(e) =>
              setOptions((options) => ({
                ...options,
                borderStyle: e.target.value,
              }))
            }
            value={options.borderStyle}
          >
            {['solid', 'double', 'groove', 'dashed', 'dotted'].map(
              (value, i) => {
                return (
                  <option key={i} value={value}>
                    {value}
                  </option>
                )
              }
            )}
          </select>
        </label>
        <label style={{ display: 'block', whiteSpace: 'nowrap' }}>
          borderWidth:
          <select
            onChange={(e) =>
              setOptions((options) => ({
                ...options,
                borderWidth: e.target.value,
              }))
            }
            value={options.borderWidth}
          >
            {Array(10)
              .fill(1)
              .map((_, i) => {
                const value = `${i}px`
                return (
                  <option key={i} value={value}>
                    {value}
                  </option>
                )
              })}
          </select>
        </label>
        <label style={{ display: 'block', whiteSpace: 'nowrap' }}>
          <input
            checked={options.hideRoot}
            onChange={(e) =>
              setOptions((options) => ({
                ...options,
                hideRoot: e.target.checked,
              }))
            }
            type="checkbox"
          />
          hideRoot
        </label>
        <label style={{ display: 'block', whiteSpace: 'nowrap' }}>
          horizontalMargin:
          <select
            onChange={(e) =>
              setOptions((options) => ({
                ...options,
                horizontalMargin: e.target.value,
              }))
            }
            value={options.horizontalMargin}
          >
            {Array(10)
              .fill(1)
              .map((_, i) => {
                const value = `${i}rem`
                return (
                  <option key={i} value={value}>
                    {value}
                  </option>
                )
              })}
          </select>
        </label>
        <label style={{ display: 'block', whiteSpace: 'nowrap' }}>
        verticalMargin:
          <select
            onChange={(e) =>
              setOptions((options) => ({
                ...options,
                verticalMargin: e.target.value,
              }))
            }
            value={options.verticalMargin}
          >
            {Array(10)
              .fill(1)
              .map((_, i) => {
                const value = `${i}rem`
                return (
                  <option key={i} value={value}>
                    {value}
                  </option>
                )
              })}
          </select>
        </label>
      </fieldset>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
