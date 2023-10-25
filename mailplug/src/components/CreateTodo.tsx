import React, { useState } from "react";
import styled from "styled-components";
import { useTodoDispatch } from "../TodoContext";
import Modal from "./Modal.tsx";
import { getFetchTodos, createTodoApi } from "../api/todos";

const Input = styled.input`
  padding: 12px;
  border-radius: 4px;
  margin-top: 30px;
  margin-left: 120px;
  margin-bottom: 40px;
  border: 1px solid #dee2e6;
  font-size: 18px;
  width: 800px;
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

function TodoCreate() {
  const [value, setValue] = useState<string>("");
  const [showModal, setShowModal] = useState<boolean>(false);
  const [modalMessage, setModalMessage] = useState<string>("");

  const dispatch = useTodoDispatch();

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);
  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (value.length > 50) {
      alert("글자를 50자 이하로 줄여주세요!");
      return;
    }

    if (value.length === 0) {
      const content = "내용을 입력해주세요";
      setModalMessage(content);
      openModal();
      return;
    }

    const res = await getFetchTodos(dispatch);
    if (res.count >= 10) {
      const content = "[할 일]은 최대 10개까지만 추가 가능";
      setModalMessage(content);
      openModal();
      return;
    }

    createTodoApi(dispatch, value);
    setValue("");
  };

  return (
    <>
      <Modal
        showModal={showModal}
        closeModal={closeModal}
        content={modalMessage}
      />
      <Input
        placeholder="내용을 입력한 후, 오른쪽에 [할 일 추가]를 클릭해 주세요."
        onChange={onChange}
        value={value}
      />
      <StyledButton onClick={onSubmit}>할 일 추가</StyledButton>
    </>
  );
}

export default TodoCreate;
