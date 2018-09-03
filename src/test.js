// import { html } from '@polymer/lit-element';

setTimeout(() => {
  console.log('() should be transpiled to function, right?'); // eslint-disable-line
});

class OwenComponent extends HTMLElement {
  constructor() {
    super();
    
    this.root = this.attachShadow({ mode: 'closed' });
    this.subject = 'World';
  }

  // run some code when the component is ready
  connectedCallback() {
    this.root.innerHTML = this.getTemplate();
  }

  // create templates that interpolate variables and HTML!
  getTemplate() {
    return `<h1>Hello ${this.subject}!!!!</h1>`;
  }
  // _render() {
  //   return `
  //     <footer>
  //       <a href="https://projectevergreen.github.io">Project Evergreen</a>
  //     </footer>
  //   `;
  // }
}

customElements.define('x-owen', OwenComponent);