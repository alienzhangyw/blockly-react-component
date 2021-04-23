import React, { useState } from 'react'
import Blockly from 'blockly'
import 'blockly/python'
import BlocklyComponent from 'blockly-react-component'

const App = () => {
  const [xml, setXml] = useState('')
  const [code, setCode] = useState('')

  const onWorkspaceChange = (workspace: Blockly.WorkspaceSvg | undefined): void => {
    if(workspace) {
      const workspaceXml = Blockly.Xml.workspaceToDom(workspace, true)
      setXml(Blockly.Xml.domToPrettyText(workspaceXml))
      setCode(Blockly['Python'].workspaceToCode(workspace))
    }
  }

  return <>
    <BlocklyComponent
      style={{ width: '70%', height: '100%' }}
      locale="zh-hans"
      initialXml={`<xml xmlns="https://developers.google.com/blockly/xml">
      <variables>
        <variable>i</variable>
      </variables>
      <block type="controls_for" x="10" y="10">
        <field name="VAR">i</field>
        <value name="FROM">
          <shadow type="math_number">
            <field name="NUM">1</field>
          </shadow>
        </value>
        <value name="TO">
          <shadow type="math_number">
            <field name="NUM">100</field>
          </shadow>
        </value>
        <value name="BY">
          <shadow type="math_number">
            <field name="NUM">1</field>
          </shadow>
        </value>
        <statement name="DO">
          <block type="controls_if">
            <value name="IF0">
              <block type="math_number_property">
                <mutation divisor_input="false"></mutation>
                <field name="PROPERTY">PRIME</field>
                <value name="NUMBER_TO_CHECK">
                  <shadow type="math_number">
                    <field name="NUM">0</field>
                  </shadow>
                  <block type="variables_get">
                    <field name="VAR">i</field>
                  </block>
                </value>
              </block>
            </value>
            <statement name="DO0">
              <block type="text_print">
                <value name="TEXT">
                  <shadow type="text">
                    <field name="TEXT">abc</field>
                  </shadow>
                  <block type="variables_get">
                    <field name="VAR">i</field>
                  </block>
                </value>
              </block>
            </statement>
          </block>
        </statement>
      </block>
    </xml>`}
      onWorkspaceChange={onWorkspaceChange}
      grid={{
        spacing: 25,
        length: 3,
        colour: '#ccc',
        snap: true
      }}
      zoom={{
        controls: true
      }}
    />
    <div className="codearea">
      <textarea className="code" disabled value={xml}></textarea>
      <textarea className="code" disabled value={code}></textarea>
    </div>
  </>
}

export default App
