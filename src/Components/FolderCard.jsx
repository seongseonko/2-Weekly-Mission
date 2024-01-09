import { useContext } from "react";
import { LinksComponent } from "./LinksComponent";
import { CardDataContext } from "./context/CardDataContext";
import styled from "styled-components";

const NoneData = styled.div`
  display: flex;
  width: calc(100% - 32px);
  justify-content: center;
  padding-top: 41px;
  padding-bottom: 35px;

  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
`;

export function FolderCard() {
  const linkData = useContext(CardDataContext);
  const transFormData = linkData.data.map((item) => {
    if (item.created_at) {
      item.createdAt = item.created_at;
      delete item.created_at;
    }
    if (item.image_source) {
      item.imageSource = item.image_source;
      delete item.image_source;
    }
    return item;
  });
  return (
    <>
      {transFormData.length !== 0 ? (
        <LinksComponent links={transFormData} />
      ) : (
        <NoneData>저장된 데이터가 없습니다.</NoneData>
      )}
    </>
  );
}
