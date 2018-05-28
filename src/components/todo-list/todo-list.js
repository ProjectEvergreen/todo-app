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
    this.completedTodos = 0;
    this.allTodosCompleted = false;
    this.root = this.attachShadow({ mode: 'closed' });

    document.addEventListener('deleteTodo', (event) => this.deleteTodo(event.detail));
    document.addEventListener('completeTodo', (event) => this.completeTodo(event.detail));

    render(this.template(), this.root);
  }

  addTodo() {
    const newTodoValue = this.root.getElementById('todo-input').value;

    if (ValidationService.isValidTextInput(newTodoValue)) {
      const now = new Date().getTime();

      this.todos.push({
        completed: false,
        task: newTodoValue,
        id: now,
        created: now
      });

      // TODO possible to data bind on this <input> element instead?
      this.root.getElementById('todo-input').value = '';
      render(this.template(), this.root);
    } else {
      console.warn('invalid input, please try again'); // eslint-disable-line
    }

    return false;
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
    this.completedTodos = this.todos.filter((todo) => { return todo.completed; });
    this.allTodosCompleted = this.completedTodos.length !== 0 && this.completedTodos.length === this.todos.length;

    return html`
      <style>
        ${css}
      </style>
      
      <div>
        <h3><u>My Todo List 📝</u></h3>

        <h5>Completed Todos:<pe-badge counter$=${this.completedTodos.length} 
                                      condition$=${this.allTodosCompleted}></pe-badge></h5>
        
        <form onsubmit=${ this.addTodo.bind(this) }>
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