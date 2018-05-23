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
      this.todos.push({
        completed: false,
        task: newTodoValue,
        id: this.todos.length,
        created: new Date().getTime()
      });

      this.root.getElementById('todo-input').value = '';
      this.onStateUpdated();
    } else {
      console.warn('invalid input, please try again'); // eslint-disable-line
    }
  }

  deleteTodo(todoId) {    
    this.todos = this.todos.filter((todo) => {
      return todo.id !== todoId;
    });

    this.onStateUpdated();
  }

  completeTodo(todo) {
    console.log('completeTodo from TodoList', todo); // eslint-disable-line
  }

  // dynamic event handlers, redraw, etc
  // TODO performance, memory leakage?
  onStateUpdated() {
    render(this.template(), this.root);

    const deleteButtons = this.root.querySelectorAll('.delete-todo');
    const completeButtons = this.root.querySelectorAll('.complete-todo');

    for (let i = 0, l = deleteButtons.length; i < l; i += 1) {
      const idx = i;
      const todoId = this.todos[i].id;

      deleteButtons[idx].addEventListener('click', () => {
        this.deleteTodo(todoId);
      });

      completeButtons[idx].addEventListener('change', () => {
        this.compeleteTodo(todoId);
      });
    }
  }

  renderTodoListItems() {
    return this.todos.map((todo) => {
 
      return html`
        <li>
          ${todo.task}

          <input class="complete-todo" type="checkbox"/>
              
          <span class="delete-todo">X</span>
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