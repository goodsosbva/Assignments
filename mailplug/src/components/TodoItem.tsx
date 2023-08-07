import React, { useState } from "react";
import styled, { css } from "styled-components";
import { MdDoneOutline } from "react-icons/md";
import { useTodoDispatch } from "../TodoContext";
import {
  removeTodoApi,
  updateTodoContentApi,
  toggleTodoApi,
} from "../api/todos";

interface TodoProps {
  completed: string;
}

interface Todo {
  id: number;
  isCompleted: boolean;
  content: string;
}

const TodoItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
`;

const CheckQuadrilateral = styled.div<TodoProps>`
  width: 32px;
  height: 32px;
  border: 1px solid #ced4da;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
  ${(props) =>
    props.completed === "true" &&
    css`
      border: 1px solid #38d9a9;
      color: #38d9a9;
    `}
`;

const Text = styled.div<TodoProps>`
  width: 700px;
  font-size: 21px;
  border: 1px solid #ced4da;
  color: #495057;
  padding: 5px 5px 5px 5px;
  ${(props) =>
    props.completed === "true" &&
    css`
      color: #ced4da;
      text-decoration: line-through;
    `};
`;

const StyledButton = styled.button`
  padding: 12px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  background-color: #fffff;
  color: #000000;
  cursor: pointer;
  margin-left: 5px;

  &:hover {
    background-color: #0056b3;
  }
`;

const EditInput = styled.input`
  font-size: 21px;
  border: 1px solid #ced4da;
  padding: 5px 5px 5px 5px;
  width: 700px;
`;

function TodoItem({ id, isCompleted, content }: Todo) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(content);
  const [originalText, setOriginalText] = useState(content);

  const dispatch = useTodoDispatch();
  // const onToggle = () => dispatch({ type: "TOGGLE", id });

  const handleEditClick = () => {
    setIsEditing(true);
    setOriginalText(content);
  };

  const handleEditChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedText(e.target.value);
  };

  async function toggleFunction(
    dispatch: any,
    id: number,
    isCompleted: boolean
  ) {
    toggleTodoApi(dispatch, id, isCompleted);
  }

  async function updateTodoContent() {
    try {
      await updateTodoContentApi(dispatch, id, editedText);
      setIsEditing(false);
    } catch (error) {
      console.error("수정 관련 에러: ", error);
      alert("수정 실패!");
    }
  }

  const handleCancel = () => {
    setEditedText(originalText);
    setIsEditing(false);
  };

  const removeTodo = () => {
    const result = window.confirm("할 일을 삭제하시겠습니까?");
    if (result) {
      // onRemove();
      removeTodoApi(dispatch, id);
    } else {
      // 취소 버튼을 눌렀을 때 실행되는 로직
      return;
    }
  };

  return (
    <TodoItemBlock>
      <CheckQuadrilateral
        completed={isCompleted.toString()}
        onClick={() => toggleFunction(dispatch, id, isCompleted)}
      >
        {isCompleted && <MdDoneOutline />}
      </CheckQuadrilateral>
      {isEditing ? (
        <>
          <EditInput value={editedText} onChange={handleEditChange} autoFocus />
          <StyledButton onClick={updateTodoContent}>확인</StyledButton>
          <StyledButton onClick={handleCancel}>취소</StyledButton>
        </>
      ) : (
        <Text completed={isCompleted.toString()}>{content}</Text>
      )}
      {!isEditing && (
        <>
          <StyledButton onClick={handleEditClick}>수정</StyledButton>
          <StyledButton onClick={removeTodo}>삭제</StyledButton>
        </>
      )}
    </TodoItemBlock>
  );
}

export default TodoItem;
