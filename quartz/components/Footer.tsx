import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/footer.scss"
import { version } from "../../package.json"

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
          <!-- GOES INTO HEAD -->
<link rel="stylesheet" href="http://lengthylyova.pythonanywhere.com/static/gh-contrib-graph/gh.css">

<!-- GOES INTO BODY -->
<div id="gh" data-login="josh-ramer"></div>

<!-- GOES INTO THE END OF BODY -->
<script src="http://lengthylyova.pythonanywhere.com/static/gh-contrib-graph/gh.js"></script>          <li>
            <div class="github-profile-badge" data-user="josh-ramer"></div>
          </li>
          <li>
            <div class="badge-base LI-profile-badge" data-locale="en_US" data-size="medium" data-theme="dark" data-type="HORIZONTAL" data-vanity="josh-ramer" data-version="v1"><a class="badge-base__link LI-simple-link" href="https://www.linkedin.com/in/josh-ramer?trk=profile-badge">Josh R.</a></div>
          </li>
        </ul>
        <script src="https://cdn.jsdelivr.net/gh/Rapsssito/github-profile-badge@latest/src/widget.min.js"></script>
        <script src="https://platform.linkedin.com/badges/js/profile.js"></script>
      </footer>
    )
  }

  Footer.css = style
  return Footer
}) satisfies QuartzComponentConstructor
