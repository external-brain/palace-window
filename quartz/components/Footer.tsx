import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/footer.scss"
import { version } from "../../package.json"
import React, { useEffect } from 'react';

export default (() => {
  function Footer({ displayClass }: QuartzComponentProps) {
    return (
      <footer class={`${displayClass ?? ""}`}>
        <hr />
        <img src="assets/imgs/github-contributions.png" />
        <img src="assets/imgs/linkedin-badge.png" />
      </footer>
    )
  }
  
  Footer.css = style
  return Footer
}) satisfies QuartzComponentConstructor


