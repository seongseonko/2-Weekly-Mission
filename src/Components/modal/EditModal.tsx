import styled from "styled-components";
import close from "../../images/close.svg";
import { MouseEvent, useContext, useEffect, useRef } from "react";
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
`;
const AddModalContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;
  align-items: center;

  width: 360px;
  height: 239px;
  flex-shrink: 0;
  background: var(--white);

  border-radius: 15px;
  border: 1px solid var(--gray20);
  background: var(--white);

  input {
    border-radius: 8px;
    border: 1px solid var(--gray20);
    background: var(--white);
    display: flex;
    width: 280px;
    padding: 18px 15px;
    justify-content: center;
    align-items: center;
    outline: none;
    &:focus {
      border-radius: 8px;
      border: 1px solid var(--Linkbrary-primary-color);
      background: var(--white);
    }
  }
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
  margin-bottom: 9px;
`;

const AddButton = styled.button`
  display: flex;
  width: 280px;
  padding: 16px 20px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  background: var(
    --gra-purpleblue-to-skyblue,
    linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%)
  );
  color: var(--Grey-Light, #f5f5f5);
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
interface EditModalProps {
  setModalOpen: React.Dispatch<React.SetStateAction<{ id: number | null }>>;
}

function EditModal({ setModalOpen }: EditModalProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const { selectedButtonTitle }: { selectedButtonTitle: string } = useContext(
    ButtonIdContext
  ) || { selectedButtonTitle: "" };

  const modalClose = (e: MouseEvent) => {
    if (modalRef.current === e.target) {
      setModalOpen({ id: null });
    }
  };
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  });

  return (
    <>
      <ModalContainer ref={modalRef} onClick={modalClose}>
        <AddModalContainer>
          <Span>폴더 이름 변경</Span>
          <input
            ref={inputRef}
            type="text"
            defaultValue={selectedButtonTitle}
          ></input>
          <CloseButton onClick={() => setModalOpen({ id: null })}>
            <img src={close} alt="닫기" />
          </CloseButton>
          <AddButton>변경하기</AddButton>
        </AddModalContainer>
      </ModalContainer>
    </>
  );
}

export default EditModal;
