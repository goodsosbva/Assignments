// import "./App.css";
import React from "react";
import styled from "styled-components";
import TodoHeader from "./components/TodoHeader.tsx";
import TodoList from "./components/TodoLists.tsx";
import TodoCreate from "./components/CreateTodo.tsx";
import { TodoProvider } from "./TodoContext.js";

const AppBlock = styled.div`
  margin-left: 150px;
`;

function App() {
  return (
    <AppBlock>
      <TodoProvider>
        <TodoHeader />
        <TodoCreate />
        <TodoList />
      </TodoProvider>
    </AppBlock>
  );
}

export default App;
