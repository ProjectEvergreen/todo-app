class TodoListItem extends HTMLElement {

  constructor() {
    super();
    this.todo = {};
  }

  // TODO would be nice to get this boilerplate observability from WCC
  attributeChangedCallback(name, oldValue, newValue) {
    if (newValue !== oldValue) {
      if (name === 'todo') {
        this.todo = JSON.parse(newValue);
      }

      this.render();
    }
  }

  dispatchDeleteTodoEvent() {
    document.dispatchEvent(
      new CustomEvent('deleteTodo', { detail: this.todo.id })
    );
  }

  dispatchCompleteTodoEvent() {
    document.dispatchEvent(
      new CustomEvent('completeTodo', { detail: this.todo.id })
    );
  }

  render() {
    const { completed, task } = this.todo;
    const completionStatus = completed ? '✅' : '⛔';
    
    // TODO restore checked toggle through attribute
    // https://github.com/ProjectEvergreen/todo-app/blob/9b0f035daca7c6cc64264bb426837f2efec9d68b/src/components/todo-list-item/todo-list-item.js#L42
    return (
      <span>
        {task}
        <input class="complete-todo" type="checkbox" onchange={this.dispatchCompleteTodoEvent}/>
        <span>{completionStatus}</span>
        <button class="delete-todo" onclick={this.dispatchDeleteTodoEvent}>❌</button>
      </span>
    );
  }
}

customElements.define('wcc-todo-list-item', TodoListItem);