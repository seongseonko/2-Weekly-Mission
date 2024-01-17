import share from "@/public/share.svg";
import pen from "@/public/pen.svg";
import wastebasket from "@/public/wastebasket.svg";
import styled from "styled-components";
import { useState } from "react";
import EditModal from "@/components/modal/EditModal";
import DeleteModal from "@/components/modal/DeleteModal";
import ShareModal from "@/components/modal/ShareModal";
import { useContext } from "react";
import ButtonIdContext from "@/components/context/ButtonIdContext";
import Image from "next/image";

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
enum EditControl {
  Share = 1,
  Rename = 2,
  Delete = 3,
}

const editControls = [
  { imgSrc: share, text: "공유", id: EditControl.Share },
  { imgSrc: pen, text: "이름 변경", id: EditControl.Rename },
  { imgSrc: wastebasket, text: "삭제", id: EditControl.Delete },
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

  const opemModal = (srcId: number) => {
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
                <Button onClick={() => opemModal(src.id)}>
                  <Image src={src.imgSrc} alt={src.text} />
                  <Span>{src.text}</Span>
                </Button>
              </div>
            );
          })}
        </EditField>
      )}
      {modalOpen.id === EditControl.Share && (
        <ShareModal setModalOpen={setModalOpen} />
      )}
      {modalOpen.id === EditControl.Rename && (
        <EditModal setModalOpen={setModalOpen} />
      )}
      {modalOpen.id === EditControl.Delete && (
        <DeleteModal setModalOpen={setModalOpen} />
      )}
    </ListEditContainer>
  );
}
export default ListEdit;
