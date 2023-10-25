<template>
  <div class="row">
    <div class="col p-3">
      <router-link class="btn btn primary" to="/todos/add">할일 추가</router-link>
      <button class="btn btn-primary ms-1" @click="fetchTodoList">새로 고침</button>
    </div>

    <div class="row">
      <div class="col">
        <ul class="list-group">
          <TodoItem v-for="todoItem in todoList" :key="todoItem.id" :todoItem="todoItem" />
          <span> 완료한 할일 : {{ doneCount }}</span>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useTodoListStore } from '../stores/todoList'
import TodoItem from '../pages/TodoItem.vue'

const todoListStroe = useTodoListStore()
const { fetchTodoList } = todoListStroe
const doneCount = computed(() => todoListStroe.doneCount)
const todoList = computed(() => todoListStroe.todoList)
</script>

<style lang="scss" scoped></style>
