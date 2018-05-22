import { html, render } from 'lit-html';
import ValidationService from '../../services/validation';
import '../todo-item/todo-item';
import css from './todo-list.css';

class TodoList extends HTMLElement {
  
  constructor() {
    super();
    
    // TODO document true private properties
    this.todos = [];
    this.root = this.attachShadow({ mode: 'closed' });

    render(this.template(), this.root);

    // setup event handlers after render
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

      render(this.template(), this.root);
    } else {
      console.warn('invalid input, please try again'); // eslint-disable-line
    }
  }

  // deleteTodo() {
  //   console.log('deleteTodo todo'); // eslint-disable-line
  // }

  // completeTodo() {
  //   console.log('completeTodo'); // eslint-disable-line
  // }

  renderTodoListItems() {
    return this.todos.map((todo) => {
      const serializedTodo = JSON.stringify(todo);

      return html`
        <li>
          <pe-todo-item 
            todo=${serializedTodo}
            deletedCallback=this.deleteTodo
            completedCallback=this.completeTodo>
          </pr-todo-item>
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