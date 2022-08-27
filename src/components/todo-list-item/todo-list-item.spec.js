import { expect } from '@esm-bundle/chai';
import './todo-list-item.jsx';

describe('Components/TodoListItem', () => {

  describe('Default Behavior', () => {
    let todoListItem;

    beforeEach(async () => {
      todoListItem = document.createElement('wcc-todo-list-item');
  
      document.body.appendChild(todoListItem);
  
      await todoListItem.updateComplete;
    });
      
    it('should have no content output', () => { 
      expect(todoListItem.textContent).to.equal('');
    });

    afterEach(() => {
      todoListItem.remove();
      todoListItem = null;
    });
  });

  describe('Todo Display Output Behavior', () => {
    let todoListItem;

    beforeEach(async () => {
      const now = new Date().getTime();

      todoListItem = document.createElement('wcc-todo-list-item');
      todoListItem.setAttribute('todo', JSON.stringify({
        completed: false,
        task: 'run errands',
        id: now,
        created: now
      }));
  
      document.body.appendChild(todoListItem);
  
      await todoListItem.updateComplete;
    });

    it('should display the task value', () => { 
      const output = todoListItem.querySelectorAll('span')[0];

      expect(output.textContent).to.contain('run errands');
    });

    // TODO add more test cases

    afterEach(() => {
      todoListItem.remove();
      todoListItem = null;
    });
  });

});