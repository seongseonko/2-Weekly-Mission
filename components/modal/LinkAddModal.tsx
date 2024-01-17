import styled from "styled-components";
import close from "@/public/close.svg";
import { MouseEvent, useRef, useState } from "react";
import check from "@/public/check.svg";
import Image from "next/image";

interface Props {
  setAddModal: React.Dispatch<React.SetStateAction<{ isOpen: boolean }>>;
  linkUrl?: string;
}

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
    line-height: 22px;
    margin-bottom: 16px;
  }
`;
const AddLinkModalContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
  align-items: center;
  padding: 32px 40px;

  width: 360px;
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
  font-weight: 700;
`;
const AddButton = styled.button`
  display: flex;
  width: 280px;
  padding: 16px 20px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 16px;

  border-radius: 8px;
  background: var(
    --gra-purpleblue-to-skyblue,
    linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%)
  );

  color: var(--Grey-Light);
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 600;
`;
const AddFolderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
`;
const AddFolderList = styled.div<{ $selected: boolean }>`
  display: flex;
  width: 264px;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
  border-radius: 8px;
  background: ${({ $selected }) => ($selected === true ? "var(--bg)" : "none")};

  img {
    display: flex;
  }

  &:hover {
    cursor: pointer;
  }
`;
const TextField = styled.div`
  font-family: Pretendard;
  display: flex;
  align-items: center;
  gap: 8px;
`;
const FolderListTitle = styled.span`
  color: var(--gray100);
  font-size: 16px;
  line-height: 24px; /* 150% */
`;

const FolderListLinkCount = styled.span`
  color: var(--gray60);
  font-size: 14px;
`;

const testData = [
  //TODO 구현내용에 없어서 테스트 코드 작성
  {
    id: 1,
    folderName: "코딩팁",
    linkCount: 7,
  },
  {
    id: 2,
    folderName: "채용 사이트",
    linkCount: 12,
  },
  {
    id: 3,
    folderName: "유용한 글",
    linkCount: 30,
  },
  {
    id: 4,
    folderName: "나만의 장소",
    linkCount: 3,
  },
];

function LinkAddModal({ setAddModal, linkUrl }: Props) {
  const [addOnLink, setAddOnLink] = useState<number | null>(null);

  const modalRef = useRef<HTMLDivElement>(null);
  const modalClose = (e: MouseEvent) => {
    if (modalRef.current === e.target) {
      setAddModal({ isOpen: false });
    }
  };
  const handleFolderToggle = (id: number) => {
    setAddOnLink(id === addOnLink ? null : id);
  };
  return (
    <>
      <ModalContainer ref={modalRef} onClick={modalClose}>
        <AddLinkModalContainer>
          <Span>폴더에 추가</Span>
          <p>{linkUrl}</p>
          <CloseButton onClick={() => setAddModal({ isOpen: false })}>
            <Image src={close} alt="닫기" width={24} height={24} />
          </CloseButton>
          <AddFolderContainer>
            {testData.map((folder) => (
              <AddFolderList
                key={folder.id}
                onClick={() => handleFolderToggle(folder.id)}
                $selected={addOnLink === folder.id}
              >
                <TextField>
                  <FolderListTitle>{folder.folderName}</FolderListTitle>
                  <FolderListLinkCount>
                    {folder.linkCount}개 링크
                  </FolderListLinkCount>
                </TextField>
                {addOnLink === folder.id && (
                  <Image src={check} alt="체크" width={14} height={14} />
                )}
              </AddFolderList>
            ))}
          </AddFolderContainer>
          <AddButton>추가하기</AddButton>
        </AddLinkModalContainer>
      </ModalContainer>
    </>
  );
}

export default LinkAddModal;
