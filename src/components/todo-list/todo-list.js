import { html, render } from 'lit-html/lib/lit-extended';
import ValidationService from '../../services/validation';
import css from './todo-list.css';

class TodoList extends HTMLElement {
  
  constructor() {
    super();

    this.todos = [];
    this.root = this.attachShadow({ mode: 'closed' });

    render(this.template(), this.root);
  }

  addTodo() {
    const inputElement = this.root.getElementById('todo-input');
    const newTodoValue = inputElement.value;

    if (ValidationService.isValidateTextInput(newTodoValue)) {
      const now = new Date().getTime();

      this.todos.push({
        completed: false,
        task: newTodoValue,
        id: now,
        created: now
      });

      inputElement.value = '';
      render(this.template(), this.root);
    } else {
      console.warn('invalid input, please try again'); // eslint-disable-line
    }
  }

  deleteTodo(todoId) {    
    this.todos = this.todos.filter((todo) => {
      return todo.id !== parseInt(todoId, 10);
    });

    render(this.template(), this.root);
  }

  completeTodo(todoId) {
    this.todos = this.todos.map((todo) => {
      todo.completed = todo.id === parseInt(todoId, 10) ? !todo.completed : todo.completed;

      return todo;
    });

    render(this.template(), this.root);
  }

  // sync checkbox `checked` to value of `todo.completed`
  renderTodoListItems() {
    return this.todos.map((todo) => {
      const completionStatus = todo.completed ? '✅' : '⛔';

      return html`
        <li>
          ${todo.task}

          <input class="complete-todo" type="checkbox" onchange=${() => { this.completeTodo(todo.id); }} /><span>${completionStatus}</span>
              
          <span class="delete-todo" onclick=${() => { this.deleteTodo(todo.id); }}>X</span>
        </li>
      `;

    });
  }

  template() {
    return html`
      <style>
        ${css}
      </style>
      
      <div>
        <h3>My Todo List 📝</h3>

        <input id="todo-input" type="text" placeholder="Food Shopping" required/>
        <button id="add-todo" onclick=${ this.addTodo.bind(this) }>+ Add</button>

        <ol>
          ${ this.renderTodoListItems() }
        </ol>
    
      </div>
    `;
  }
}

customElements.define('pe-todo-list', TodoList);