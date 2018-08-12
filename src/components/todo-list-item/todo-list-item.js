import { html, LitElement } from '@polymer/lit-element';
import css from './todo-list-item.css';

class TodoListItemComponent extends LitElement {

  constructor() {
    super();

    this.todo = {};
  }

  static get properties() {
    return {
      todo: Object
    };
  }

  dispatchCompleteTodoEvent(todoId) {
    const event = new CustomEvent('completeTodo', { detail: todoId });

    document.dispatchEvent(event);
  }

  dispatchDeleteTodoEvent(todoId) {
    const event = new CustomEvent('deleteTodo', { detail: todoId });

    document.dispatchEvent(event);
  }

  _render({ todo }) {
    const isCompleted = todo.completed;
    const completionStatus = isCompleted ? '✅' : '⛔';
    
    return html` 
      <style>
        ${css}
      </style>

      <span>
        ${todo.task}

        <input class="complete-todo" type="checkbox" checked=${isCompleted} on-change=${() => { this.dispatchCompleteTodoEvent(todo.id); }}/>
        <span>${completionStatus}</span>
            
        <span class="delete-todo" on-click=${() => { this.dispatchDeleteTodoEvent(todo.id); }}>❌</span>
      </span>
    `;
  }
}

customElements.define('x-todo-list-item', TodoListItemComponent);