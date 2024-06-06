import { Priority } from 'markdown-to-jsx'
import type { MarkdownToJSX } from 'markdown-to-jsx'

import { SocialSourceLink } from '../../rich-link/SocialSourceLink'

// [Innei]{GH@Innei} {TW@Innei} {TG@Innei}
export const MentionRule: MarkdownToJSX.Rule = {
  // match: simpleInlineRegex(
  //   /^(\[(?<displayName>.*?)\])?\{((?<prefix>(GH)|(TW)|(TG))@(?<name>\w+\b))\}\s?(?!\[.*?\])/,
  // ),
  match: (source) => {
    console.log('source mt', source)
    return /^(\[(?<displayName>.*?)\])?\{((?<prefix>(GH)|(TW)|(TG))@(?<name>\w+\b))\}\s?(?!\[.*?\])/.exec(
      source,
    )
  },
  order: Priority.MAX,
  parse(capture) {
    const { groups } = capture

    if (!groups) {
      return null
    }
    return {
      content: { ...groups },
      type: 'mention',
    }
  },
  render(result, _, state) {
    const { content } = result as any
    if (!content) {
      return null as any
    }

    const { prefix, name, displayName } = content
    if (!name) {
      return null as any
    }

    return (
      <SocialSourceLink
        name={displayName || name}
        source={prefix}
        key={state?.key}
      />
    )
  },
}
