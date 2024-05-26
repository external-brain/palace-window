import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/footer.scss"
import { version } from "../../package.json"
import { LinkedInProfile } from "../components"

export default ((opts?: Options) => {
  function Footer({ displayClass }: QuartzComponentProps) {
    const Profile = LinkedInProfile()
    return (
      <footer class={`${displayClass ?? ""}`}>
        <hr />
        <div id="gh" data-login="josh-ramer"></div>
        <Profile></Profile>
        <script src="https://lengthylyova.pythonanywhere.com/static/gh-contrib-graph/gh.js"></script>
      </footer>
    )
  }

  Footer.css = style
  return Footer
}) satisfies QuartzComponentConstructor
