import React from "react";
import styled from "styled-components";

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  margin-top: 10px;
  cursor: pointer;
`;

interface ModalProps {
  showModal: boolean;
  closeModal: () => void;
  content: string;
}

function Modal({ showModal, closeModal, content }: ModalProps) {
  if (!showModal) {
    return null;
  }

  function handleButtonClick() {
    closeModal();
  }

  return (
    <ModalBackground>
      <ModalContent>
        <p>{content}</p>
        <Button onClick={handleButtonClick}>확인</Button>
      </ModalContent>
    </ModalBackground>
  );
}

export default Modal;
