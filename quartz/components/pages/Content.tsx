import { htmlToJsx } from "../../util/jsx"
import { QuartzComponentConstructor, QuartzComponentProps } from "../types"

function Content(qcp: QuartzComponentProps) {
  function bfs(root) {
    if (root === null) return;

    const frontier = [root];
    while (frontier.length > 0) {
      var current = frontier.shift();
      if (current === undefined) continue;
      if (current.type === "figure" && current.props.children.props['data-language'] === 'table-of-contents') {
        current.props.children = qcp.toc;
        break;
      }
      if (current.props !== undefined && current.props.children !== undefined && !!current.props.children[Symbol.iterator]) {
        for (var child of current.props.children) {
          frontier.push(child);
        }
      }
    }
  }

  const content = htmlToJsx(qcp.fileData.filePath!, qcp.tree)
  bfs(content);
  return <article class="popover-hint">
    {content}
  </article>
}

export default (() => Content) satisfies QuartzComponentConstructor
