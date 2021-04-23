# blockly-react-component

> A React component that embeds a Blockly visual programming editor.

[![NPM](https://img.shields.io/npm/v/blockly-react-component.svg)](https://www.npmjs.com/package/blockly-react-component) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

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
| ...blocklyOptions | any of `Blockly.BlocklyOptions` | Options for the blockly injection. See https://developers.google.com/blockly/guides/configure/web/configuration_struct for available options. *If 'toolbox' is not set, it will be a standard toolbox of native blockly blocks by default.* |

## License

MIT © [alienzhangyw](https://github.com/alienzhangyw)
