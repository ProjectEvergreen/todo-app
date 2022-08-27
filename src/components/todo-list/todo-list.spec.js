import { expect } from '@esm-bundle/chai';
import './todo-list.jsx';

describe('Components/TodoList', () => {

  describe('Default Behavior', () => {
    let todoList;

    beforeEach(async () => {
      todoList = document.createElement('wcc-todo-list');
  
      document.body.appendChild(todoList);
  
      await todoList.updateComplete;
    });
      
    it('should have no content output', () => { 
      expect(todoList.textContent).to.contain('My Todo List');
    });

    afterEach(() => {
      todoList.remove();
      todoList = null;
    });
  });

  // TODO add test cases for event handling and adding a todo, and deleting one

});