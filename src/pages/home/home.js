import { html, render } from 'lit-html';
import ValidationService from '../../services/validation';
import '../../components/todo-list/todo-list';
import css from './home.css';

class Home extends HTMLElement {
  constructor() {
    super();

    this.todos = [];

    // setup the component's template
    this.root = this.attachShadow({ mode: 'closed' });    
    render(this.template(), this.root);
    
    // setup event handling (after template render)
    this.root.getElementById('add-btn').addEventListener('click', this.addNewTodo.bind(this));
  }

  addNewTodo() {
    const newTodoValue = this.root.getElementById('new-todo').value;

    if (ValidationService.isValidateTextInput(newTodoValue)) {
      this.todos.push({
        completed: false,
        task: newTodoValue,
        created: new Date()
      });

      this.root.querySelector('pe-todo-list').setAttribute('todos', JSON.stringify(this.todos.reverse()));
      this.root.getElementById('new-todo').value = '';
    } else {
      console.warn('invalid input, please try again'); // eslint-disable-line
    }
  }

  template() {
    return html`
      <style>
        ${css}
      </style>

      <div>
        <h3>My Todo List 📝</h3>

        <input id="new-todo" type="text" placeholder="Food Shopping" required/>
        <button id="add-btn" onclick=this.addNewTodo>+ Add</button>

        <pe-todo-list todos=${this.todos}></pe-todo-list>
      </div>
    `;
  }
}

customElements.define('pe-home', Home);