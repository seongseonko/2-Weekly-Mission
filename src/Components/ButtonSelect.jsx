import styled from "styled-components";
import mediaQuery from "../static/MediaQuery";
import { useContext } from "react";
import ButtonIdContext from "./context/ButtonIdContext";

const ButtonSelected = styled.button`
  border-radius: 5px;
  border: 1px solid var(--Linkbrary-primary-color);
  background: ${({ $selected, $id }) =>
    $selected === $id ? "var(--Linkbrary-primary-color)" : "var(--white)"};
  color: ${({ $selected, $id }) =>
    $selected === $id ? "var(--white)" : "var(--black)"};
  padding: 8px 12px;
  font-size: 16px;
  font-weight: 400;
  ${mediaQuery.mobile} {
    padding: 6px 10px;
    font-size: 14px;
  }
`;

function ButtonSelect({ id, name }) {
  const { setSelectedButtonId, selectedButtonId, setSelectedButtonTitle } =
    useContext(ButtonIdContext);
  const handleButtonClick = () => {
    setSelectedButtonId(id);
    setSelectedButtonTitle(name);
  };

  return (
    <ButtonSelected
      onClick={handleButtonClick}
      $selected={selectedButtonId}
      $id={id}
    >
      {name}
    </ButtonSelected>
  );
}

export default ButtonSelect;
