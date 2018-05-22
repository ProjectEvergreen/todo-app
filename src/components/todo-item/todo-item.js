import { html, render } from 'lit-html';

class TodoItem extends HTMLElement {
  
  constructor() {
    super();
    
    this._todo = {};
    this.root = this.attachShadow({ mode: 'closed' });

    render(this.template(), this.root);

    this.root.getElementById('complete-todo').addEventListener('change', this.completeTodo.bind(this));
    this.root.getElementById('delete-todo').addEventListener('click', this.deleteTodo.bind(this));
  }

  static get observedAttributes() {
    return ['todo'];
  }

  // TODO document default arguments??
  attributeChangedCallback(name, oldVal, newVal = {}) {
    switch (name) {

      case 'todo':
        this._todo = newVal ? JSON.parse(newVal) : {};
        break;

      default:

    }

    render(this.template(), this.root);
  }

  deleteTodo() {
    console.log('deleteTodo todo'); // eslint-disable-line
  }

  completeTodo() {
    console.log('completeTodo'); // eslint-disable-line
  }

  template() {
    return html`
      <div>        

        ${this._todo.task}

        <input id="complete-todo" type="checkbox"/>
            
        <span id="delete-todo">X</span>
    
      </div>
    `;
  }
}

customElements.define('pe-todo-item', TodoItem);