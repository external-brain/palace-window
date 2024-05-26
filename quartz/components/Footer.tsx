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
        <div class="github-profile-badge" data-user="josh-ramer"></div>
        <div class="badge-base LI-profile-badge" data-locale="en_US" data-size="medium" data-theme="dark" data-type="VERTICAL" data-vanity="josh-ramer" data-version="v1"><a class="badge-base__link LI-simple-link" href="https://www.linkedin.com/in/josh-ramer?trk=profile-badge">Josh R.</a></div>
              
        <script src="https://cdn.jsdelivr.net/gh/Rapsssito/github-profile-badge@latest/src/widget.min.js"></script>
        <ul>
          {Object.entries(links).map(([text, link]) => (
            <li>
              <a href={link}>{text}</a>
            </li>
          ))}
        </ul>
      </footer>
    )
  }

  Footer.css = style
  return Footer
}) satisfies QuartzComponentConstructor
