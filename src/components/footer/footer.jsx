export default class Footer extends HTMLElement {
  // TODO would be nice for WCC to auto render somehow?
  connectedCallback() {
    this.render();
  }

  render() {
    return (
      <footer>
        <a href="https://projectevergreen.github.io">Project Evergreen</a>
      </footer>
    );
  }
}

customElements.define('wcc-footer', Footer);