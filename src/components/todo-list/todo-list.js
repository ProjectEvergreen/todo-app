import { html, render } from 'lit-html';
import ValidationService from '../../services/validation';
import css from './todo-list.css';

class TodoList extends HTMLElement {
  
  constructor() {
    super();

    // TODO document true private properties
    this.todos = [];
    this.root = this.attachShadow({ mode: 'closed' });

    render(this.template(), this.root);
    
    // setup "static" event handlers after render
    this.root.getElementById('add-todo').addEventListener('click', this.addTodo.bind(this));
  }

  addTodo() {
    const newTodoValue = this.root.getElementById('todo-input').value;

    if (ValidationService.isValidateTextInput(newTodoValue)) {
      const now = new Date().getTime();

      this.todos.push({
        completed: false,
        task: newTodoValue,
        id: now,
        created: now
      });

      this.root.getElementById('todo-input').value = '';
      this.onStateUpdated();
    } else {
      console.warn('invalid input, please try again'); // eslint-disable-line
    }
  }

  deleteTodo(todoId) {    
    this.todos = this.todos.filter((todo) => {
      return todo.id !== parseInt(todoId, 10);
    });

    this.onStateUpdated();
  }

  completeTodo(todoId) {
    this.todos = this.todos.map((todo) => {
      todo.completed = todo.id === parseInt(todoId, 10) ? !todo.completed : todo.completed;

      return todo;
    });

    this.onStateUpdated();
  }

  onStateUpdated() {
    // in this case, render our list first before attaching event handlers
    // TODO considerations for performance, memory leakage?  Maybe something lit-html can help with (managing dynamic events)?
    render(this.template(), this.root);

    const deleteButtons = this.root.querySelectorAll('.delete-todo');
    const completeButtons = this.root.querySelectorAll('.complete-todo');

    deleteButtons.forEach((button) => {
      button.onclick = () => {
        this.deleteTodo(button.getAttribute('todoid'));
      };
    });

    completeButtons.forEach((button) => {
      button.onchange = () => {
        this.completeTodo(button.getAttribute('todoid'));
      };
    });
  }

  renderTodoListItems() {
    return this.todos.map((todo) => {
      const isCompletedStatus = todo.completed ? '✅' : '⛔';
 
      return html`
        <li>
          ${todo.task}

          <input class="complete-todo" type="checkbox" todoId="${todo.id}"/><span>${isCompletedStatus}</span>
              
          <span class="delete-todo" todoId="${todo.id}">X</span>
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
        <button id="add-todo">+ Add</button>

        <ol>
          ${ this.renderTodoListItems() }
        </ol>
    
      </div>
    `;
  }
}

customElements.define('pe-todo-list', TodoList);