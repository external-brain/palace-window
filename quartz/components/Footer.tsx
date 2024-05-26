import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/footer.scss"
import { version } from "../../package.json"

interface Options {
  links: Record<string, string>
}

export default ((opts?: Options) => {
  function Footer({ displayClass }: QuartzComponentProps) {
    const year = new Date().getFullYear()
    const components = opts?.components ?? []
    return (
      <footer class={`${displayClass ?? ""}`}>
        <hr />
        <div id="gh" data-login="josh-ramer"></div>
          {components}
        <script src="https://lengthylyova.pythonanywhere.com/static/gh-contrib-graph/gh.js"></script>
      </footer>
    )
  }

  Footer.css = style
  return Footer
}) satisfies QuartzComponentConstructor
