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
    
    document.addEventListener('deleteTodo', (event) => this.deleteTodo(event.detail));
    document.addEventListener('completeTodo', (event) => this.completeTodo(event.detail));
  }

  // TODO get user input through?
  static get properties() { 
    return { 
      todos: Array
    };
  }

  addTodo() {
    const inputElement = this._root.getElementById('todo-input');
    const userInput = inputElement.value;

    if (ValidationService.isValidTextInput(userInput)) {
      const now = new Date().getTime();

      this.todos = Object.assign([...this.todos, {
        completed: false,
        task: userInput,
        id: now,
        created: now
      }]);

      inputElement.value = '';
    } else {
      console.warn('invalid input, please try again'); // eslint-disable-line
    }
  }

  completeTodo(todoId) {
    console.log('complete todo', todoId);
    const updatedTodos = this.todos.map((todo) => {
      todo.completed = todoId === todo.id ? !todo.completed : todo.completed;
      
      return todo;
    });

    console.log('updatedTodos', updatedTodos);

    this.todos = Object.assign([...updatedTodos]);
  }

  deleteTodo(todoId) {    
    console.log('deletetodo', todoId);
    this.todos = this.todos.filter((todo) => {
      return todo.id !== todoId;
    });
  }

  _render(props) {
    console.log('TodoList render');
    const todos = props.todos;
    const completedTodos = todos.filter((todo) => { return todo.completed; });
    const allTodosCompleted = completedTodos.length !== 0 && completedTodos.length === todos.length;

    return html`
      <style>
        ${css}
      </style>
      
      <div>
        <h3><u>My Todo List 📝</u></h3>

        <h5>Completed Todos:<x-badge counter=${completedTodos.length} 
                                      condition=${allTodosCompleted}></x-badge></h5>
        
        <form on-submit=${() => { this.addTodo(); return false; }}>
          <input id="todo-input" type="text" placeholder="Food Shopping" required/>
          <button id="add-todo" type="button" on-click=${() => { this.addTodo(); }}>+ Add</button>
        </form>

        <ol>
          ${repeat(todos, (todo) => todo.id, (todo) => html`
            <pre>${JSON.stringify(todo)}</pre>
            <li>
              <x-todo-list-item 
                todo=${todo}
                completed="${todo.completed}"
                id="${todo.id}"
                title="${todo.task}"
              ></x-todo-list-item>
            </li>
          `)}
        </ol>
    
      </div>
    `;
  }
}

customElements.define('x-todo-list', TodoListComponent);