import { html, render } from 'lit-html/lib/lit-extended';
import ValidationService from '../../services/validation';
import '../badge/badge';
import css from './todo-list.css';

class TodoList extends HTMLElement {
  
  constructor() {
    super();

    this.todos = [];
    this.root = this.attachShadow({ mode: 'closed' });

    render(this.template(), this.root);
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

      this.refreshTemplate();
    } else {
      console.warn('invalid input, please try again'); // eslint-disable-line
    }
  }

  deleteTodo(todoId) {    
    this.todos = this.todos.filter((todo) => {
      return todo.id !== parseInt(todoId, 10);
    });

    this.refreshTemplate();
  }

  completeTodo(todoId) {
    this.todos = this.todos.map((todo) => {
      todo.completed = todo.id === parseInt(todoId, 10) ? !todo.completed : todo.completed;

      return todo;
    });

    this.refreshTemplate();
  }

  refreshTemplate() {
    const completedTodos = this.todos.filter((todo) => { return todo.completed; });
    const allTodosCompleted = completedTodos.length !== 0 && completedTodos.length === this.todos.length;
    const badgeComponent = this.root.querySelector('pe-badge');
    const todoInputElement = this.root.getElementById('todo-input');

    badgeComponent.setAttribute('counter', completedTodos.length);
    badgeComponent.setAttribute('condition', allTodosCompleted);
    todoInputElement.value = '';

    render(this.template(), this.root);
  }

  // TODO create a todo-list-item component with callback support
  renderTodoListItems() {
    return this.todos.map((todo) => {
      const isCompleted = todo.completed;
      const completionStatus = isCompleted ? '✅' : '⛔';

      // CSS Grid here?
      return html`
        <li>
          ${todo.task}

          <input class="complete-todo" type="checkbox" checked=${isCompleted} onchange=${() => { this.completeTodo(todo.id); }} />
          <span>${completionStatus}</span>
              
          <span class="delete-todo" onclick=${() => { this.deleteTodo(todo.id); }}>X</span>
        </li>
      `;

    });
  }
  
  // TODO auto submit on enter keypress
  // TODO repeat directive?
  // TODO data binding for things counter and the users input value (e.g. to be able to deprecate `refreshTemplate`) 
  template() {
    return html`
      <style>
        ${css}
      </style>
      
      <div>
        <h3>My Todo List 📝</h3>

        <h5>Completed Todos:<pe-badge counter$=${this.completedTodos}></pe-badge></h5>
        
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