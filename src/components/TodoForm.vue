<template>
  <form @submit.prevent="addTodos" class="mb-6">
    <input :class="['input', { 'input--error' : (list.length < 4 && list.length !== 0) }]" type="text" v-model="list" />
  </form>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useTodoListStore } from '../stores/todolist'

const list = ref('')
const todo = useTodoListStore()

function addTodos () {
  if (list.value.length < 4)
    return

  todo.addTodoList(list.value)
  list.value = ''
}

</script>

<style lang="postcss">
.input {
  @apply border border-gray-300 w-full rounded-lg p-4;

  &--error {
    @apply border-red-500 ring-1 ring-red-500 focus:border-red-500 focus:ring-red-500 outline-none;
  }
}
</style>