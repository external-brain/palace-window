import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/footer.scss"
import { version } from "../../package.json"
import React, { useEffect } from 'react';

export default (() => {
  function Footer(qcp: QuartzComponentProps) {
    if (qcp.fileData.slug == "index") {
      return (<footer class={`${qcp.displayClass ?? ""}`}>
        <a href="https://github.com/josh-ramer">
          <img src="assets/imgs/github-contributions.png" style="width:100%;" />
        </a>
        <a href="https://www.linkedin.com/in/josh-ramer/">
          <img src="assets/imgs/linkedin-badge.png" style="width:100%;" />
        </a>
      </footer>)
    } else {
      return (<footer class={`${qcp.displayClass ?? ""}`}>
      </footer>)
    }
  }
  
  Footer.css = style
  return Footer
}) satisfies QuartzComponentConstructor


