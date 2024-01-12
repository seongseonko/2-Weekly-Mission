import { useContext, useEffect, useState } from "react";
import { getButtonData } from "./Api";
import AddFolder from "./AddFolder";
import ButtonSelect from "./ButtonSelect";
import styled from "styled-components";
import mediaQuery from "../static/MediaQuery";
import ButtonIdContext from "./context/ButtonIdContext";

interface ButtonData {
  created_at: string;
  favorite: boolean;
  id: number;
  link: {
    count: number;
  };
  name: string;
  user_id: number;
}

interface ButtonProps {
  $selectedButtonId: number | null;
}
const ButtonsField = styled.div`
  margin: 0 auto;
  width: 1060px;
  display: flex;
  justify-content: space-between;
`;
const ButtonsContainer = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  row-gap: 12px;
  ${mediaQuery.tablet} {
    padding-left: 32px;
    padding-right: 32px;
    width: 100%;
  }
  ${mediaQuery.tablet} {
    padding-left: 32px;
    padding-right: 32px;
  }
`;
const Button = styled.button<ButtonProps>`
  border-radius: 5px;
  border: 1px solid var(--Linkbrary-primary-color);
  ${({ $selectedButtonId }) => {
    return $selectedButtonId === null
      ? `background: var(--Linkbrary-primary-color);
  color: var(--white);`
      : `background: var(--white);
  color: var(--black);`;
  }}
  padding: 8px 12px;
  font-size: 16px;
  font-weight: 400;
  ${mediaQuery.mobile} {
    padding: 6px 10px;
    font-size: 14px;
  }
`;

function Buttons() {
  const { setSelectedButtonId, setSelectedButtonTitle, selectedButtonId } =
    useContext(ButtonIdContext);
  const [buttonData, setButtonData] = useState<ButtonData[]>([]);

  const ButtonDataLoad = async () => {
    try {
      let { data }: { data: ButtonData[] } = await getButtonData();
      data.sort(
        (a, b) =>
          new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
      );
      setButtonData(data);
    } catch (error: any) {
      console.error(error.message);
    }
  };
  const handleSelectedId = () => {
    setSelectedButtonId(null);
    setSelectedButtonTitle("");
  };

  useEffect(() => {
    ButtonDataLoad();
  }, []);
  return (
    <ButtonsField>
      {buttonData && buttonData.length !== 0 && (
        <>
          <ButtonsContainer>
            <Button
              onClick={handleSelectedId}
              $selectedButtonId={selectedButtonId}
            >
              전체
            </Button>
            {buttonData.map((button) => (
              <ButtonSelect key={button.id} id={button.id} name={button.name} />
            ))}
          </ButtonsContainer>
          <AddFolder />
        </>
      )}
    </ButtonsField>
  );
}
export default Buttons;
