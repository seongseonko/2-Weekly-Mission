import AddLink from "../../Components/AddLink";
import Buttons from "../../Components/Buttons";
import Card from "../../Components/Card";
import ListEdit from "../../Components/ListEdit";
import SearchBar from "../../Components/SearchBar";
import Footer from "../../Components/Footer/Footer";
import { useState } from "react";
import Nav from "../../Components/Header/Nav";
import styled from "styled-components";
import { ButtonIdContextProvider } from "../../Components/context/ButtonIdContext";

const Main = styled.main`
  min-height: calc(100vh - 16rem);
`;
function Folder() {
  const [selectedButtonId, setSelectedButtonId] = useState<number | null>(null);
  const [selectedButtonTitle, setSelectedButtonTitle] = useState<string>("");
  return (
    <>
      <Nav sticky="off" />
      <Main>
        <AddLink />
        <SearchBar />
        <ButtonIdContextProvider
          value={{
            selectedButtonId,
            setSelectedButtonId,
            selectedButtonTitle,
            setSelectedButtonTitle,
          }}
        >
          <Buttons />
          <ListEdit />
          <Card />
        </ButtonIdContextProvider>
      </Main>
      <Footer />
    </>
  );
}

export default Folder;
