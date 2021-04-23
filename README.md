# blockly-react-component

> A React component that embeds a Blockly visual programming editor.

[![NPM](https://img.shields.io/npm/v/blockly-react-component.svg)](https://www.npmjs.com/package/blockly-react-component) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

> Created with [create-react-library](https://github.com/transitive-bullshit/create-react-library).

## Install

```bash
npm install --save blockly-react-component
```
or

```bash
yarn add blockly-react-component
```

## Usage

```tsx
import React, { Component } from 'react'

import BlocklyComponent from 'blockly-react-component'

class Example extends Component {
  render() {
    return <BlocklyComponent />
  }
}
```

## Properties

| Prop | Type | Description |
| ---- | ---- | ----------- |
| id | `string` | HTML id attribute for the blockly Div element. |
| locale | `string` | Blockly workspace locale, see https://github.com/google/blockly/tree/master/msg/js for available languages. Default locale is 'en'. *Since blockly uses a global namespace, you can not set different languages in multiple component instances.* |
| className | `string` | CSS class for the blockly Div element. |
| style | `React.CSSProperties` | CSS style properties for the blockly Div element. |
| initialXml | `string` | Initial Xml content for the blockly editor. |
| onWorkspaceChange | `(workspace?: Blockly.WorkspaceSvg) => void` | Do something when blockly workspace content changes. |
| ...blocklyOptions | any of `Blockly.BlocklyOptions` | Options for the blockly injection. See https://developers.google.com/blockly/guides/configure/web/configuration_struct for available options. *You can generate a toolbox xml from [Blockly Developer Tools](https://blockly-demo.appspot.com/static/demos/blockfactory/index.html) - Workspace Factory.* |

## Example

See the code on [example/src/App.tsx](https://github.com/alienzhangyw/blockly-react-component/blob/main/example/src/App.tsx). It uses a standard blockly built-in toolbox.

[Example Page](https://alienzhangyw.github.io/blockly-react-component/)

## License

MIT © [alienzhangyw](https://github.com/alienzhangyw)
