import { html, render } from 'lit-html/lib/lit-extended';
import { repeat } from '../../../node_modules/lit-html/lib/repeat';
import ValidationService from '../../services/validation';
import '../badge/badge';
import '../todo-list-item/todo-list-item';
import css from './todo-list.css';

class TodoList extends HTMLElement {
  
  constructor() {
    super();

    this.todos = [];
    this.root = this.attachShadow({ mode: 'closed' });

    document.addEventListener('deleteTodo', (event) => this.deleteTodo(event.detail));
    document.addEventListener('completeTodo', (event) => this.completeTodo(event.detail));

    render(this.template(), this.root);
  }

  addTodo() {
    const inputElement = this.root.getElementById('todo-input');
    const userInput = inputElement.value;

    if (ValidationService.isValidTextInput(userInput)) {
      const now = new Date().getTime();

      this.todos.push({
        completed: false,
        task: userInput,
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

  template() {
    const completedTodos = this.todos.filter((todo) => { return todo.completed; });
    const allTodosCompleted = completedTodos.length !== 0 && completedTodos.length === this.todos.length;

    return html`
      <style>
        ${css}
      </style>
      
      <div>
        <h3><u>My Todo List 📝</u></h3>

        <h5>Completed Todos:<pe-badge counter$=${completedTodos.length} 
                                      condition$=${allTodosCompleted}></pe-badge></h5>
        
        <form onsubmit=${() => { this.addTodo(); return false; }}>
          <input id="todo-input" type="text" placeholder="Food Shopping" required/>
          <button id="add-todo" type="submit">+ Add</button>
        </form>

        <ol>
          ${repeat(this.todos, (todo) => todo.id, (todo) => html`
            <li><pe-todo-list-item todo$=${ JSON.stringify(todo) }></pe-todo-list-item></li>`)}
        </ol>
    
      </div>
    `;
  }
}

customElements.define('pe-todo-list', TodoList);