import { system } from '../gurx'
import React from 'react'
import {
  CodeBlockEditorProps,
  FrontmatterEditorProps,
  JsxEditorProps,
  SandpackEditorProps,
  TableEditorProps,
} from '../types/NodeDecoratorsProps'

function ComponentStub(componentName: string) {
  return () => {
    throw new Error(`Component ${componentName} not registered`)
    return null
  }
}

export interface NodeDecorators {
  FrontmatterEditor: React.FC<FrontmatterEditorProps>
  JsxEditor: React.FC<JsxEditorProps>
  SandpackEditor: React.FC<SandpackEditorProps>
  CodeBlockEditor: React.FC<CodeBlockEditorProps>
  TableEditor: React.FC<TableEditorProps>
}

export const [NodeDecoratorsSystem, NodeDecoratorsSystemType] = system((r) => {
  const nodeDecorators = r.node<NodeDecorators>({
    FrontmatterEditor: ComponentStub('FrontmatterEditor'),
    JsxEditor: ComponentStub('JsxEditor'),
    SandpackEditor: ComponentStub('SandpackEditor'),
    CodeBlockEditor: ComponentStub('CodeBlockEditor'),
    TableEditor: ComponentStub('TableEditor'),
  })

  return {
    nodeDecorators,
  }
}, [])
