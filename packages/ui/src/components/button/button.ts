import { LitElement, css, html, render } from "lit";
import { literal } from "lit/static-html.js"
import { customElement, property } from "lit/decorators.js"

@customElement("dar-button")
export class DarButton extends LitElement {
  // Define scoped styles right with your component, in plain CSS
  static styles = css``


  firstUpdated() {
  }


  render() {
    // console.dir(this.childNodes)
    // console.log(this.innerHTML)

    return html`<button class="dar-button">
        <slot></slot>
    </button>`;
  }
}
