import {
  parseCaptureInline,
  Priority,
  simpleInlineRegex,
} from 'markdown-to-jsx'
import type { MarkdownToJSX } from 'markdown-to-jsx'

//  ++Insert++
export const InsertRule: MarkdownToJSX.Rule<MarkdownToJSX.MarkedTextNode> = {
  match: simpleInlineRegex(
    /^\+\+((?:\[.*?\]|<.*?>(?:.*?<.*?>)?|`.*?`|.)*?)\+\+/,
  ),
  order: Priority.LOW,
  parse: parseCaptureInline,
  render(node, output, state?) {
    return <ins key={state?.key}>{output(node.children, state!)}</ins>
  },
}
