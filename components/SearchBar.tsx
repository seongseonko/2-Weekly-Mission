import {
  ChangeEvent,
  Dispatch,
  useState,
  useEffect,
  SetStateAction,
} from "react";
import styled from "styled-components";
import mediaQuery from "@/lib/MediaQuery";
import { CardData } from "@/type/type";
import search from "@/public/search.svg";
import SearchClose from "@/public/SearchClose.svg";
import Image from "next/image";

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
const SearchImg = styled(Image)`
  position: absolute;
  left: 15px;
  top: 15px;
  ${mediaQuery.tablet} {
    left: 4.4rem;
  }
`;
const SearchCloseImg = styled(Image)`
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
  linkData: { data: CardData[] }; // 데이터를 구조할당으로 바꿔 쓰고있고 보낼때도 바꿔 보내쓰고있어요!
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
  }, [data, searchQuery]);

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
