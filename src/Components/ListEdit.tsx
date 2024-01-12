import share from "../images/share.svg";
import pen from "../images/pen.svg";
import wastebasket from "../images/wastebasket.svg";
import styled from "styled-components";
import { useState } from "react";
import EditModal from "./modal/EditModal";
import DeleteModal from "./modal/DeleteModal";
import ShareModal from "./modal/ShareModal";
import { useContext } from "react";
import ButtonIdContext from "./context/ButtonIdContext";

const ListEditContainer = styled.div`
  display: flex;
  width: 1060px;
  margin: 24px auto;
  justify-content: space-between;
  align-items: center;
  h3 {
    color: var(--black);
    font-family: Pretendard;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: -0.2px;
  }
`;
const EditField = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
`;
const Span = styled.span`
  color: var(--gray60);
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  cursor: pointer;
`;

const editControls = [
  { imgSrc: share, text: "공유", id: 1 },
  { imgSrc: pen, text: "이름 변경", id: 2 },
  { imgSrc: wastebasket, text: "삭제", id: 3 },
];

const Button = styled.button`
  background: inherit;
  display: flex;
  justify-content: center;
`;

function ListEdit() {
  const [modalOpen, setModalOpen] = useState<{
    id: number | null;
  }>({
    id: null,
  });
  const { selectedButtonTitle }: { selectedButtonTitle: string } = useContext(
    ButtonIdContext
  ) || { selectedButtonTitle: "" };

  const ModalSelecte = (srcId: number) => {
    setModalOpen({ id: srcId });
  };
  return (
    <ListEditContainer>
      <div>
        <h3>{selectedButtonTitle ? `${selectedButtonTitle}` : "전체"}</h3>
      </div>
      {selectedButtonTitle && (
        <EditField>
          {editControls.map((src) => {
            return (
              <div key={src.id}>
                <Button onClick={() => ModalSelecte(src.id)}>
                  <img src={src.imgSrc} alt={src.text} />
                  <Span>{src.text}</Span>
                </Button>
              </div>
            );
          })}
        </EditField>
      )}
      {modalOpen.id === 1 && <ShareModal setModalOpen={setModalOpen} />}
      {modalOpen.id === 2 && <EditModal setModalOpen={setModalOpen} />}
      {modalOpen.id === 3 && <DeleteModal setModalOpen={setModalOpen} />}
    </ListEditContainer>
  );
}
export default ListEdit;
