<template>
  <li :class="todoItem.done ? 'list-group-item list-group-item-success' : 'list-group-item'">
    <span :class="todoItem.done ? 'todo-done pointer' : 'pointer'" @click="toggleDone(todoItem.id)">
      {{ todoItem.todo }}
      {{ todoItem.done ? '(완료)' : '' }}
    </span>
    <span
      class="float-end badge bg-secondary pointer m-1"
      @click="router.push(`/todos/edit/${todoItem.id}`)"
    >
      편집</span
    >
    <span class="float-end badge bg-secondary pointer m-1" @click="deleteTodo(todoItem.id)">
      삭제</span
    >
  </li>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useTodoListStore } from '../stores/todoList'

// Props 정의
const props = defineProps({
  todoItem: { type: Object, required: true }
})

// 로깅은 컴포넌트 밖에서 처리
console.log('todoItem >> ', props.todoItem)
const router = useRouter()
const todoListStroe = useTodoListStore()
const { deleteTodo, toggleDone } = todoListStroe
</script>
