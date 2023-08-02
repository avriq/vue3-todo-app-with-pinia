<template>
  <div :class="['todo', { 'todo--done' : todo.completed }]" v-for="(todo, id) in todoList" :key="id">
    <span>{{ Number(todo.id)+1 + '.' }} {{ todo.item }}</span>
    <button @click="complete(todo.id)">{{ todo.completed ? 'Unfinished' : 'Finished' }}</button>
  </div>
</template>

<script setup lang="ts">
import { useTodoListStore } from '../stores/todolist'
import { storeToRefs } from 'pinia'

const todo = useTodoListStore()
const { todoList } = storeToRefs(todo)

function complete (id: number) {
  todo.updateTodoList(id)
}

</script>

<style lang="postcss">
.todo {
  @apply relative flex items-center px-4 py-2 mb-2 border border-gray-200 text-gray-600 bg-gray-100 rounded-md transition-all ease-in-out;

  &&--done {
    @apply italic bg-green-500 border-green-600 text-gray-50 transition-all ease-in-out;

    & > :where(:not(button)) {
      @apply line-through font-semibold;
    }

    button {
      @apply text-green-700 border-green-600 hover:bg-green-600 hover:text-white hover:border-green-600;
    }
  }

  & > :where(:not(button)) {
    @apply flex-grow;
  }

  button {
    @apply flex-shrink-0 px-2 py-1 border hover:cursor-pointer border-gray-200 transition-all ease-in-out text-sm bg-transparent rounded hover:bg-gray-200;
  }
}
</style>