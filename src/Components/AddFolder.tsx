import { useState } from "react";
import Add from "../images/Add.svg";
import styled from "styled-components";
import AddFolderModal from "./modal/AddFolderModal";

const AddFolderButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  button {
    background: var(--white);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    flex-shrink: 0;
    span {
      color: #6d6afe;
      font-family: Abel;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      letter-spacing: -0.3px;
    }
    img {
      width: 16px;
      height: 16px;
    }
  }
`;

function AddFolder() {
  const [addFolderModalOpen, setAddFolderModalOpen] = useState(false);

  const openModal = () => {
    setAddFolderModalOpen(true);
  };
  return (
    <>
      <AddFolderButton>
        <button onClick={openModal}>
          <span>폴더 추가</span>
          <img src={Add} alt="더하기" />
        </button>
      </AddFolderButton>
      {addFolderModalOpen && (
        <AddFolderModal
          setAddFolderModalOpen={setAddFolderModalOpen}
        ></AddFolderModal>
      )}
    </>
  );
}
export default AddFolder;
