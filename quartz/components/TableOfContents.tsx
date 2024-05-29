import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import legacyStyle from "./styles/legacyToc.scss"
import modernStyle from "./styles/toc.scss"

// @ts-ignore
import script from "./scripts/toc.inline"

interface Options {
  layout: "modern" | "legacy"
}

const defaultOptions: Options = {
  layout: "modern",
}

function TableOfContents({ fileData, displayClass }: QuartzComponentProps) {
  if (!fileData.toc) {
    return null
  }

  return (
    <div id="toc" class={`toc ${displayClass ?? ""}`}>
      <div id="toc-content">
        <ul class="overflow">
          {fileData.toc.map((tocEntry) => (
            <li key={tocEntry.slug} class={`depth-${tocEntry.depth}`}>
              <a href={`#${tocEntry.slug}`} data-for={tocEntry.slug}>
                {tocEntry.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
TableOfContents.css = modernStyle
TableOfContents.afterDOMLoaded = script

function LegacyTableOfContents({ fileData }: QuartzComponentProps) {
  if (!fileData.toc) {
    return null
  }

  return (
    <details id="toc" open={!fileData.collapseToc}>
      <summary>
        <h3>Table of Contents</h3>
      </summary>
      <ul>
        {fileData.toc.map((tocEntry) => (
          <li key={tocEntry.slug} class={`depth-${tocEntry.depth}`}>
            <a href={`#${tocEntry.slug}`} data-for={tocEntry.slug}>
              {tocEntry.text}
            </a>
          </li>
        ))}
      </ul>
    </details>
  )
}
LegacyTableOfContents.css = legacyStyle

export default ((opts?: Partial<Options>) => {
  const layout = opts?.layout ?? defaultOptions.layout
  return layout === "modern" ? TableOfContents : LegacyTableOfContents
}) satisfies QuartzComponentConstructor
