export default class Header extends HTMLElement {
  // TODO would be nice for WCC to auto render somehow?
  connectedCallback() {
    this.render();
  }

  // inline CSS / <style> not supported
  render() {
    return (
      <header>        
        <h2 class="header-text">Todo App Example</h2>
      </header>
    );
  }
}

customElements.define('wcc-header', Header);