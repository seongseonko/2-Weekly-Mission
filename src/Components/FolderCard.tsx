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

  if (!linkData || !linkData.data) {
    return <NoneData>저장된 데이터가 없습니다.</NoneData>;
  }

  const transformedData = linkData.data.map((item) => {
    const { created_at, image_source, ...rest } = item;
    return {
      ...rest,
      createdAt: created_at,
      imageSource: image_source,
    };
  });

  return (
    <>
      {transformedData.length !== 0 ? (
        <LinksComponent links={transformedData} />
      ) : (
        <NoneData>저장된 데이터가 없습니다.</NoneData>
      )}
    </>
  );
}
