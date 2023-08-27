<template>
  <div class="container">
    <Header></Header>
    <router-view />
    <Loading v-if="states.isLoading" />
  </div>
</template>

<script setup>
import { reactive, computed, provide } from 'vue'
import Header from './components/HeaderPage.vue'
import Loading from './components/Loading.vue'
import axios from 'axios'

const owner = 'khs'

const BASEURI = '/api/todolist_long'
const states = reactive({ todoList: [] })

// todlist 조회
const fetchTodoList = async () => {
  states.isLoading = true;
  try {
    const response = await axios.get(BASEURI + `/${owner}`)
    if (response.status === 200) {
      states.todoList = response.data
    } else {
      alert('데이터 조회 실패')
    }
  } catch (error) {
    alert('에러 발생: ' + error)
  }
  states.isLoading = false
}
const addTodo = async ({ todo, desc }, successCallback) => {
  states.isLoading = true;
  try {
    const payload = { todo, desc }
    const response = await axios.post(BASEURI + `/${owner}`, payload)
    if (response.data.status === 'success') {
      states.todoList.push({ id: response.data.item.id, todo, desc, done: false })
      successCallback()
    } else {
      alert('Todo 추가 실패: ' + response.data.message)
    }
  } catch (error) {
    alert('에러발생 :' + error)
  }
  states.isLoading = false;
}

// 기존 TodoItem을 변경합니다.
const updateTodo = async ({ id, todo, desc, done }, successCallback) => {
  states.isLoading = true;
  try {
    const payload = { todo, desc, done }
    const response = await axios.put(BASEURI + `/${owner}/${id}`, payload)
    if (response.data.status === 'success') {
      let index = states.todoList.findIndex((todo) => todo.id === id)
      states.todoList[index] = { id, todo, desc, done }
      successCallback()
    } else {
      alert('Todo 변경 실패 : ' + response.data.message)
    }
  } catch (error) {
    alert('에러발생 :' + error)
  }
  states.isLoading = false;
}
//기존 TodoItem을 삭제합니다.
const deleteTodo = async (id) => {
  states.isLoading = true;
  try {
    const response = await axios.delete(BASEURI + `/${owner}/${id}`)
    if (response.data.status === 'success') {
      let index = states.todoList.findIndex((todo) => todo.id === id)
      states.todoList.splice(index, 1)
    } else {
      alert('Todo 삭제 실패 : ' + response.data.message)
    }
  } catch (error) {
    alert('에러발생 :' + error)
  }
  states.isLoading = false;
}
//기존 TodoItem의 완료여부(done) 값을 토글합니다.
const toggleDone = async (id) => {
  states.isLoading = true;
  try {
    const response = await axios.put(BASEURI + `/${owner}/${id}/done`)
    if (response.data.status === 'success') {
      let index = states.todoList.findIndex((todo) => todo.id === id)
      states.todoList[index].done = !states.todoList[index].done
    } else {
      alert('Todo 완료 변경 실패 : ' + response.data.message)
    }
  } catch (error) {
    alert('에러발생 :' + error)
  }
  states.isLoading = false;
}

provide(
  'todoList',
  computed(() => states.todoList)
)
provide('actions', { addTodo, deleteTodo, toggleDone, updateTodo, fetchTodoList })

fetchTodoList()
</script>

<style scoped></style>
