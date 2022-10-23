import { atom } from 'recoil'


export const tasksState = atom({
    key: 'tasksState',
    default: []
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
    console.log(task)
    tasks.map(t => t.id === task.id ? t.name = task.name : t)
}