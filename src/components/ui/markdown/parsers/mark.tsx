import {
  parseCaptureInline,
  Priority,
  simpleInlineRegex,
} from 'markdown-to-jsx'
import type { MarkdownToJSX } from 'markdown-to-jsx'

//  ==Mark==
export const MarkRule: MarkdownToJSX.Rule<MarkdownToJSX.MarkedTextNode> = {
  match: simpleInlineRegex(/^==((?:\[.*?\]|<.*?>(?:.*?<.*?>)?|`.*?`|.)*?)==/),
  order: Priority.LOW,
  parse: parseCaptureInline,
  render(node, output, state?) {
    return (
      <mark key={state?.key} className="rounded-md">
        <span className="px-1">{output(node.children, state!)}</span>
      </mark>
    )
  },
}
