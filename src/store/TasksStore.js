import { makeAutoObservable } from 'mobx';
import { makeObservable, observable, action } from 'mobx';
import { autorun } from 'mobx';

class TasksStore {
    tasks
    constructor() {
        const localValue = localStorage.getItem('react-todo.tasks')
        this.tasks = localValue ? JSON.parse(localValue) : []
        /* makeObservable(this, {
            tasks: observable,
            addTask: action,
            deleteTask: action,
            toggleTask: action,
            updateTask: action
        }) */
        makeAutoObservable(this)
        autorun(() => localStorage.setItem('react-todo.tasks', JSON.stringify(this.tasks)))
    }

    addTask(task) {
        this.tasks.push(task)
    }

    deleteTask(id) {
        this.tasks = this.tasks.filter(t => t.id !== id)
    }

    toggleTask(id) {
        this.tasks.map(t => t.id === id ? t.checked = !t.checked : t)
    }

    updateTask(task) {
        this.tasks.map(t => t.id === task.id ? t.name = task.name : t)
    }


}
export const tasksStore = new TasksStore()