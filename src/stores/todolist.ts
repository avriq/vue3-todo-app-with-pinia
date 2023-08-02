import { ref } from 'vue'
import { defineStore } from 'pinia'

export interface TodoItem {
  item: string,
  id: number,
  completed: boolean,
}

export const useTodoListStore = defineStore('todo', () => {
  const todoList = ref<TodoItem[]>([])
  const id = ref(0)

  function addTodoList (item: string) {
    todoList.value.push({ item, id: id.value++, completed: false })
  }

  function updateTodoList (id: number) {
    const todo = todoList.value.find((obj) => obj.id === id)

    if (todo)
      todo.completed =! todo.completed 
  }

  return {
    todoList,
    addTodoList,
    updateTodoList,
  }


})