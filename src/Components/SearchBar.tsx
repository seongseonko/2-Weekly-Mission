import search from "../images/search.svg";
import styled from "styled-components";
import mediaQuery from "../static/MediaQuery";
const SearchBarContainer = styled.div`
  margin: 40px auto;
  width: 1060px;
  position: relative;
  ${mediaQuery.tablet} {
    padding-left: 3.2rem;
    padding-right: 3.2rem;
    width: auto;
  }
  img {
    position: absolute;
    left: 15px;
    top: 15px;
    ${mediaQuery.tablet} {
      left: 4.4rem;
    }
  }
`;
const SearchInput = styled.input`
  width: 100%;
  padding: 1.5rem 4rem 1.6rem;
  background: var(--Grey-Light);
  border-radius: 10px;
  border: none;
  outline: none;
  :focus {
    outline: none;
  }
`;

function SearchBar() {
  return (
    <SearchBarContainer>
      <SearchInput type="search" placeholder="링크를 검색해 보세요" />
      <img src={search} alt="돋보기" />
    </SearchBarContainer>
  );
}

export default SearchBar;
