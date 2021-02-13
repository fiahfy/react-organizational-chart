# react-organizational-chart

![badge](https://github.com/fiahfy/react-organizational-chart/workflows/Node.js%20Package/badge.svg)

> React Component for Rendering Organizational Chart

[demo page](https://fiahfy.github.io/react-organizational-chart/)

![screenshot](.github/img/screenshot1.png)

## Installation

```bash
npm install @fiahfy/react-organizational-chart
```

## Usage

```js
import OrganizationTreeChart from '@fiahfy/react-organizational-chart'

const node = {
  content: 'root',
  childNodes: [
    {
      content: 'child1',
    },
    {
      content: 'child2',
    },
  ],
}

ReactDOM.render(
  <OrganizationTreeChart node={node} />,
  document.getElementById('app')
)
```
