import html from "./app.html?raw";
import todoStore, { Filters } from "../store/todo.store";
import { renderPending, renderTodos } from "./use-cases";

const elementIDs = {
    ClearCompleted: '.clear-completed',
    TodoList: '.todo-list',
    NewTodoInput: '#new-todo-input',
    TodoFilters: '.filtro',
    PedingCountLabel: '#pending-count',
}
/**
 * 
 * @param {String} elementId 
 */
export const App = (elementId) => {

    const displayTodos = () => {
        const todos = todoStore.getTodos(todoStore.getCurrentFilter());
        renderTodos(elementIDs.TodoList, todos);
        updatePendingCount();
    }

    const updatePendingCount = () => {
        renderPending(elementIDs.PedingCountLabel);
    }

    // Cuando la funcion App se llama
    (() => {
        const app = document.createElement('div');
        app.innerHTML = html;
        document.querySelector(elementId).append(app);
        displayTodos();
    })();

    // Referencias HTML
    const newDesciptionInput = document.querySelector(elementIDs.NewTodoInput);
    const todoListUL = document.querySelector(elementIDs.TodoList);
    const clearCompletedButton = document.querySelector(elementIDs.ClearCompleted);
    const filtersLIs = document.querySelectorAll(elementIDs.TodoFilters);
    // Listeners
    newDesciptionInput.addEventListener('keyup', (event) => {
        if (event.keyCode !== 13) return
        if (event.target.value.trim().length === 0) return
        todoStore.addTodo(event.target.value);
        displayTodos();
        event.target.value = '';
    });
    todoListUL.addEventListener('click', (event) => {
        const element = event.target.closest('[data-id]');
        todoStore.toggleTodo(element.getAttribute('data-id'));
        displayTodos();
    });
    todoListUL.addEventListener('click', (event) => {
        if (event.target.className === 'destroy') {
            const uuid = event.target.closest('[data-id]').getAttribute('data-id');
            todoStore.deleteTodo(uuid);
            displayTodos();
        } else {
            return;
        }

    });
    clearCompletedButton.addEventListener('click', () => {
        todoStore.deleteCompleted();
        displayTodos();
    });

    filtersLIs.forEach(element => {
        element.addEventListener('click', (e) => {
            filtersLIs.forEach(el => el.classList.remove('selected'));
            e.target.classList.add('selected');
            switch (e.target.getAttribute('id')) {
                case 'Todos':
                    todoStore.setFilter(Filters.All);
                    break;
                case 'Pendientes':
                    todoStore.setFilter(Filters.Pending);
                    break;
                case 'Completados':
                    todoStore.setFilter(Filters.Completed);
                    break;
            }
            displayTodos();
        });
    });
}