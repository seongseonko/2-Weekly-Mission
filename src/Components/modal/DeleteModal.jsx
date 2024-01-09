import styled from "styled-components";
import close from "../../images/close.svg";
import { useContext, useRef } from "react";
import ButtonIdContext from "../context/ButtonIdContext";

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  box-shadow: 0px 4px 25px 0px rgba(0, 0, 0, 0.08);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  p {
    color: var(--gray60);
    text-align: center;
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
    margin-bottom: 16px;
  }
`;
const DeleteModalContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
  align-items: center;

  width: 360px;
  height: 239px;
  flex-shrink: 0;
  background: var(--white);

  border-radius: 15px;
  border: 1px solid var(--gray20);
  background: var(--white);
`;

const CloseButton = styled.button`
  background: inherit;
  position: absolute;
  top: 1.6rem;
  right: 1.6rem;
`;

const Span = styled.div`
  color: var(--gray100);
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const DeleteButton = styled.button`
  display: flex;
  width: 280px;
  padding: 16px 20px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  color: var(--Grey-Light, #f5f5f5);
  border-radius: 8px;
  background: var(--Linkbrary-red, #ff5b56);
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

function DeleteModal({ setModalOpen }) {
  const modalRef = useRef(null);
  const { selectedButtonTitle } = useContext(ButtonIdContext);
  const modalClose = (e) => {
    if (modalRef.current === e.target) setModalOpen({});
  };

  return (
    <>
      <ModalContainer ref={modalRef} onClick={modalClose}>
        <DeleteModalContainer>
          <Span>폴더 삭제</Span>
          <p>{selectedButtonTitle}</p>
          <CloseButton onClick={() => setModalOpen({})}>
            <img src={close} alt="닫기" />
          </CloseButton>
          <DeleteButton>삭제하기</DeleteButton>
        </DeleteModalContainer>
      </ModalContainer>
    </>
  );
}

export default DeleteModal;
