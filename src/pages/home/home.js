import { html, render } from 'lit-html';
import '../../components/todo-list/todo-list';
import css from './home.css';

class Home extends HTMLElement {
  constructor() {
    super();

    this.todos = [];

    // setup the component's template
    this.root = this.attachShadow({ mode: 'closed' });    
    render(this.template(), this.root);  
  }

  template() {
    return html`
      <style>
        ${css}
      </style>

      <div>

        <pe-todo-list></pe-todo-list>

      </div>
    `;
  }
}

customElements.define('pe-home', Home);