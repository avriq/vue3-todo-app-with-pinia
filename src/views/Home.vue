<script setup lang="ts">
import TodoForm from '../components/TodoForm.vue'
import TodoList from '../components/TodoList.vue'
</script>

<template>
  <main>
    <div class="container pt-32 mx-auto px-60">
      <h1 class="mb-6 text-2xl font-bold text-center">TodoList App</h1>
      <TodoForm />
      
      <TodoList />
    </div>
  </main>
</template>
