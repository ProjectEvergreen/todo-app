import { html, render } from 'lit-html';
import css from './home.css';

// TODO
// 1. Get value from input - done
// 2. push to `todos` array - done
// 3. render the todo's array
// 4. delete a todo
// 5. mark a todo as completed
// 6. display completed
class Home extends HTMLElement {
  constructor() {
    super();

    this.todos = [];

    this.root = this.attachShadow({ mode: 'closed' });    
    render(this.template(), this.root);
    
    // events added after render
    this.root.getElementById('add-btn').addEventListener('click', this.addNewTodo.bind(this));
  }

  addNewTodo() {
    const newTodoValue = this.root.getElementById('new-todo').value;

    if (newTodoValue && newTodoValue !== '') {
      this.todos.push({
        completed: false,
        task: newTodoValue
      });
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
      </div>
    `;
  }
}

customElements.define('pe-home', Home);