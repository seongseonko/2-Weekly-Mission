import {
  ChangeEvent,
  Dispatch,
  useState,
  useEffect,
  SetStateAction,
} from "react";
import styled from "styled-components";
import mediaQuery from "../static/MediaQuery";
import { CardData } from "../Pages/Shared/type";
import search from "../images/search.svg";
import SearchClose from "../images/SearchClose.svg";

const SearchBarContainer = styled.div`
  margin: 40px auto;
  width: 1060px;
  position: relative;
  ${mediaQuery.tablet} {
    padding-left: 3.2rem;
    padding-right: 3.2rem;
    width: auto;
  }
`;
const SearchImg = styled.img`
  position: absolute;
  left: 15px;
  top: 15px;
  ${mediaQuery.tablet} {
    left: 4.4rem;
  }
`;
const SearchCloseImg = styled.img`
  position: absolute;
  right: 15px;
  top: 15px;
  &:hover {
    cursor: pointer;
  }
`;
const SearchInput = styled.input`
  width: 100%;
  padding: 1.5rem 4rem 1.6rem;
  background: var(--Grey-Light);
  border-radius: 10px;
  border: none;
  outline: none;
  appearance: none;

  :focus {
    outline: none;
  }
  &:hover {
    cursor: pointer;
  }
`;

interface Props {
  linkData: { data: CardData[] };
  setSearchedData: Dispatch<SetStateAction<CardData[]>>;
}

function SearchBar({ linkData, setSearchedData }: Props) {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const { data }: { data: CardData[] } = linkData;
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };
  const handleClearSearch = () => {
    setSearchQuery("");
  };
  useEffect(() => {
    if (Array.isArray(data) && searchQuery) {
      setSearchedData(
        data.filter(
          (item) =>
            item?.url?.includes(searchQuery) ||
            item?.title?.includes(searchQuery) ||
            item?.description?.includes(searchQuery)
        )
      );
    } else setSearchedData(data);
  }, [linkData, searchQuery]);

  return (
    <SearchBarContainer>
      <SearchInput
        type="search"
        placeholder="링크를 검색해 보세요"
        value={searchQuery}
        onChange={handleSearch}
      />
      <SearchImg src={search} alt="돋보기" />
      <SearchCloseImg
        src={SearchClose}
        alt="닫기"
        onClick={handleClearSearch}
      />
    </SearchBarContainer>
  );
}

export default SearchBar;
