<template>
  <div class="container">
    <Header></Header>
    <router-view />
    <Loading v-if="isLoading" />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import Header from './components/HeaderPage.vue'
import Loading from './components/Loading.vue'
import { useTodoListStore } from './stores/todoList'

const todoListStroe = useTodoListStore()
const isLoading = computed(() => todoListStroe.isLoading)
const fetchTodoList = todoListStroe.fetchTodoList
fetchTodoList()
</script>

<style scoped></style>
