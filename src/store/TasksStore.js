import { atom } from 'recoil'

const localStorageEffect = key => ({ setSelf, onSet }) => {
    const savedValue = localStorage.getItem(key)
    if (savedValue != null) {
        setSelf(JSON.parse(savedValue));
    }

    onSet(newValue => {
        localStorage.setItem(key, JSON.stringify(newValue))
    });
}

export const tasksState = atom({
    key: 'tasksState',
    default: [],
    effects_UNSTABLE: [
        localStorageEffect('react-todo.tasks')
    ],
})

export const addTask = (tasks, task) => {
    return [...tasks, task]
}

export const deleteTask = (tasks, id) => {
    return tasks.filter(t => t.id !== id)
}

export const toggleTask = (tasks, id) => {
    return tasks.map(t => t.id === id ? { ...t, checked: !t.checked }
        : t)
}

export const updateTask = (tasks, task) => {
    console.log(task);
    return tasks.map(t => t.id === task.id ? { ...t, name: task.name } : t)
}