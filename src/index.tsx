import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import * as Blockly from 'blockly/core'
import 'blockly/blocks'

interface Props extends Blockly.BlocklyOptions {
  /** HTML id attribute for the blockly Div element. */
  id?: string
  /** Blockly workspace locale, see https://github.com/google/blockly/tree/master/msg/js
   * for available languages. Default locale is 'en'. */
  locale?: string
  /** CSS class for the blockly Div element. */
  className?: string
  /** CSS style properties for the blockly Div element. */
  style?: React.CSSProperties
  /** Initial Xml content for the blockly editor. */
  initialXml?: string
  /** Do something when blockly workspace content changes. */
  onWorkspaceChange?: (workspace?: Blockly.WorkspaceSvg) => void
}

const BlocklyComponent = ({
  id,
  locale,
  className,
  style,
  initialXml,
  onWorkspaceChange,
  ...blocklyOptions
}: Props) => {
  const ref = useRef<HTMLDivElement>(null)
  const [workspace, setWorkspace] = useState<Blockly.WorkspaceSvg>()

  const changeListener = () => {
    if (workspace && onWorkspaceChange) {
      onWorkspaceChange(workspace)
    }
  }

  useLayoutEffect(() => {
    // Import locale messages then initialize workspace with given options.
    import(`blockly/msg/${locale || 'en'}`).then((module) => {
      Blockly.setLocale(module.default)
      if (ref.current) setWorkspace(Blockly.inject(ref.current, blocklyOptions))
    })
  }, [])

  useEffect(() => {
    // Load initial Xml.
    if (initialXml && workspace)
      Blockly.Xml.domToWorkspace(Blockly.Xml.textToDom(initialXml), workspace)
    // Listen to workspace changes.
    if (workspace && onWorkspaceChange)
      workspace.addChangeListener(changeListener)
    return () => workspace?.removeChangeListener(changeListener)
  }, [workspace])

  // Auto-resize workspace svg.
  useEffect(() => {
    if (workspace) Blockly.svgResize(workspace)
  }, [ref.current?.offsetHeight, ref.current?.offsetWidth])

  return (
    <div id={id || 'blockly'} className={className} style={style} ref={ref} />
  )
}

export default BlocklyComponent
