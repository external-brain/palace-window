import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/footer.scss"
import { version } from "../../package.json"
import LinkedInProfileBadge from 'react-linkedin-profile-badge';

interface Options {
  links: Record<string, string>
}

export default ((opts?: Options) => {
  function Footer({ displayClass }: QuartzComponentProps) {
    const year = new Date().getFullYear()
    const links = opts?.links ?? []
    return (
      <footer class={`${displayClass ?? ""}`}>
        <hr />
        <ul>
          <li>
            <div id="gh" data-login="josh-ramer"></div>
          </li>
          <LinkedInProfileBadge profileId='josh-ramer' theme='dark' size='large' orientation='horizontal' />
        </ul>
        <script src="https://lengthylyova.pythonanywhere.com/static/gh-contrib-graph/gh.js"></script>
      </footer>
    )
  }

  Footer.css = style
  return Footer
}) satisfies QuartzComponentConstructor
