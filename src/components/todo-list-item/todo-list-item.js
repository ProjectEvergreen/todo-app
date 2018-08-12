import { html, LitElement } from '@polymer/lit-element';
import css from './todo-list-item.css';

class TodoListItemComponent extends LitElement {

  constructor() {
    super();

    this.todo = '';
  }

  static get properties() {
    return {
      title: String,
      id: Number,
      completed: Boolean,
      todo: Object
    };
  }

  dispatchCompleteTodoEvent(todoId) {
    console.log('dispatchCompleteTodoEvent', todoId);
    const event = new CustomEvent('completeTodo', { detail: todoId });

    document.dispatchEvent(event);
  }

  dispatchDeleteTodoEvent(todoId) {
    const event = new CustomEvent('deleteTodo', { detail: todoId });

    document.dispatchEvent(event);
  }

  _render({ id, title, completed }) {
    // let props = JSON.parse(todo);

    console.log('!!!!!!!!!!???????? todo list item render + props', id);
    console.log('!!!!!!!!!!???????? todo list item render + props', title);
    console.log('!!!!!!!!!!???????? todo list item render + props', completed);
    console.log('!!!!!!!!!!???????? todo list item render + props', this.todo);
    console.log(this.title);
    const todo = this.todo;
    const isCompleted = todo.completed;
    const completionStatus = isCompleted ? '✅' : '⛔';
    const props = this.todo;

    console.log('completion status', completionStatus);
    return html` 
      <style>
        ${css}
      </style>

      <span>
        ${props.task}

        <input class="complete-todo" type="checkbox" checked=${isCompleted} on-change=${() => { this.dispatchCompleteTodoEvent(todo.id); }}/>
        <span>${completionStatus}</span>
            
        <span class="delete-todo" on-click=${() => { this.dispatchDeleteTodoEvent(props.id); }}>❌</span>
      </span>
    `;
  }
}

customElements.define('x-todo-list-item', TodoListItemComponent);