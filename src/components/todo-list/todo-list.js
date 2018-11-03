import { html, LitElement } from '@polymer/lit-element';
import { repeat } from 'lit-html/lib/repeat';
import ValidationService from '../../services/validation';
import '../badge/badge';
import '../todo-list-item/todo-list-item';
import css from './todo-list.css';

class TodoListComponent extends LitElement {
  constructor() {
    super();

    this.todos = [];

    document.addEventListener('deleteTodo', event =>
      this.deleteTodo(event.detail)
    );
    document.addEventListener('completeTodo', event =>
      this.completeTodo(event.detail)
    );
  }

  // get user input through attributes?
  // https://github.com/ProjectEvergreen/todo-app/issues/7
  static get properties() {
    return {
      todos: Array
    };
  }

  addTodo(e) {
    e.preventDefault();
    const inputElement = this._root.getElementById('todo-input');
    const userInput = inputElement.value;

    if (ValidationService.isValidTextInput(userInput)) {
      const now = Date.now();

      this.todos = [
        ...this.todos,
        {
          completed: false,
          task: userInput,
          id: now,
          created: now
        }
      ];

      inputElement.value = '';
    } else {
      console.warn('invalid input, please try again'); // eslint-disable-line
    }

    return false;
  }

  completeTodo(todoId) {
    const updatedTodos = this.todos.map(todo => {
      todo.completed = todoId === todo.id ? !todo.completed : todo.completed;

      return todo;
    });

    this.todos = [...updatedTodos];
  }

  deleteTodo(todoId) {
    this.todos = this.todos.filter(todo => {
      return todo.id !== todoId;
    });
  }

  _render(props) {
    const todos = props.todos;
    const completedTodos = todos.filter(todo => {
      return todo.completed;
    });
    const allTodosCompleted =
      completedTodos.length !== 0 && completedTodos.length === todos.length;

    // prettier-ignore
    return html`
      <style>
        ${css}
      </style>
      
      <div>
        <h3><u>My Todo List 📝</u></h3>

        <h5>Completed Todos:<x-badge counter=${completedTodos.length} 
                                      condition=${allTodosCompleted}></x-badge></h5>
        
        <form on-submit=${(e) => { this.addTodo(e); }}>
          <input id="todo-input" type="text" placeholder="Food Shopping" required/>
          <button id="add-todo" type="button" on-click=${(e) => { this.addTodo(e); }}>+ Add</button>
        </form>

        <!-- have to use a dynamic key here to force change detection when passing objects -->
        <ol>
          ${repeat(todos, (todo) => Date.now() + todo.id, (todo) => html`
            <li>
              <x-todo-list-item 
                todo=${todo}
              ></x-todo-list-item>
            </li>
          `)}
        </ol>
    
      </div>
    `;
  }
}

customElements.define('x-todo-list', TodoListComponent);
