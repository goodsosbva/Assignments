<template>
  <div class="container">
    <Header></Header>
    <router-view />
  </div>
</template>

<script setup>
import { reactive, computed, provide } from 'vue'
import Header from './components/HeaderPage.vue'

const states = reactive({
  todoList: [
    { id: 1, todo: 'es6 strudy', desc: 'deco1', done: false },
    { id: 2, todo: 'reactjs trudy', desc: 'deco2', done: false },
    { id: 3, todo: 'contextApi study', desc: 'deco3', done: true },
    { id: 4, todo: 'see soccer', desc: 'deco4', done: false }
  ]
})

const addTodo = ({ todo, desc }) => {
  states.todoList.push({ id: new Date().getTime(), todo, desc, done: false })
}

const deleteTodo = (id) => {
  let index = states.todoList.findIndex((todo) => todo.id === id)
  states.todoList.splice(index, 1)
}

const updateTodo = ({ id, todo, desc, done }) => {
  let index = states.todoList.findIndex((todo) => todo.id === id)
  states.todoList[index] = { ...states.todoList[index], todo, desc, done }
}

const toggleDone = (id) => {
  let index = states.todoList.findIndex((todo) => todo.id === id)
  states.todoList[index].done = !states.todoList[index].done
}

provide(
  'todoList',
  computed(() => states.todoList)
)
provide('actions', { addTodo, deleteTodo, toggleDone, updateTodo })
</script>

<style scoped></style>
