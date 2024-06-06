import {
  parseCaptureInline,
  Priority,
  simpleInlineRegex,
} from 'markdown-to-jsx'
import type { MarkdownToJSX } from 'markdown-to-jsx'

// ||Spoiler||
export const SpoilerRule: MarkdownToJSX.Rule<MarkdownToJSX.MarkedTextNode> = {
  match: simpleInlineRegex(
    /^\|\|((?:\[.*?\]|<.*?>(?:.*?<.*?>)?|`.*?`|.)*?)\|\|/,
  ),
  order: Priority.LOW,
  parse: parseCaptureInline,
  render(node, output, state?) {
    return (
      <del key={state?.key} className="spoiler" title="你知道的太多了">
        {output(node.children, state!)}
      </del>
    )
  },
}
