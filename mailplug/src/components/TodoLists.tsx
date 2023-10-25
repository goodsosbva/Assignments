import React, { useEffect } from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem.tsx";
import { useTodoState, useTodoDispatch } from "../TodoContext.js";
import { getFetchTodos } from "../api/todos.js";

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 20px 32px 120px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

// Todo 아이템의 타입 정의
interface Todo {
  id: number;
  content: string;
  isCompleted: boolean;
  createdDateTime: string;
  updatedDateTime: string;
}

function TodoList() {
  const todos = useTodoState();
  const dispatch = useTodoDispatch();

  useEffect(() => {
    getFetchTodos(dispatch);
  }, [dispatch]);

  // createdDateTime을 기준으로 객체 배열을 정렬하는 함수
  function sortData(data: { value: Todo }) {
    if (!Array.isArray(data.value)) {
      console.error("sortData: data.value 가 배열이 아님");
      return [];
    }

    return data.value.slice().sort((a, b) => {
      return (
        new Date(a.createdDateTime).getTime() -
        new Date(b.createdDateTime).getTime()
      );
    });
  }

  return (
    <TodoListBlock>
      {sortData(todos).length === 0 ? (
        <TodoListBlock>등록된 [할 일]이 없습니다.</TodoListBlock>
      ) : (
        sortData(todos).map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            content={todo.content}
            isCompleted={todo.isCompleted}
          />
        ))
      )}
    </TodoListBlock>
  );
}

export default TodoList;
