import nodata from "../images/nonedata.svg";
import kebab from "../images/kebab.svg";
import star from "../images/star.svg";
import starOn from "../images/starOn.svg";
import styled from "styled-components";
import mediaQuery from "../static/MediaQuery";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import getElapsedTime from "../function/getElapsedTime";
import formatDate from "../function/formatDate";
import LinkDeleteModal from "./modal/LinkDeleteModal";
import LinkAddModal from "./modal/LinkAddModal";

const Card = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 20px;
  row-gap: 25px;
  margin: 0 auto;
  width: 1060px;

  ${mediaQuery.tablet} {
    grid-template-columns: 0.3fr 0.3fr;
    width: auto;
    padding-left: 32px;
    padding-right: 32px;
    justify-content: center;
    column-gap: 24px;
    row-gap: 25px;
  }

  ${mediaQuery.mobile} {
    grid-template-columns: 1fr;
    justify-items: center;
  }
`;
const CardImage = styled.img`
  width: 100%;
  height: auto;
  transition: transform 0.3s ease;
`;
const CardTextField = styled.div`
  position: relative;
  display: flex;
  width: 340px;
  height: 135px;
  padding: 15px 20px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  transition: background-color 0.3s ease-in-out;
  border-radius: 0 0 15px 15px;

  p {
    margin: 0;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    overflow: hidden;
    color: var(--black);
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
  }
`;
const Cards = styled.div`
  width: 340px;
  height: 334px;
  position: relative;
  box-shadow: 0px 5px 25px 0px rgba(0, 0, 0, 0.08);
  border-radius: 15px;

  &:hover {
    ${CardTextField} {
      background-color: var(--bg);
    }
    ${CardImage} {
      transform: scale(1.3);
    }
  }
`;
const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 340px;
  height: 200px;
  overflow: hidden;
  border-radius: 15px 15px 0 0;
`;

const ElapsedTime = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  align-self: stretch;

  span {
    color: #666;
    font-family: Pretendard;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;
const Kebab = styled.img`
  width: 21px;
  height: 17px;
`;
const KebabButton = styled.button`
  background-color: inherit;
`;
const CreatedAt = styled.span`
  overflow: hidden;
  color: #333;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const DropDown = styled.div`
  position: absolute;
  right: -10%;
  bottom: 30%;
  overflow: visible;
  z-index: 999; /* Adjust the z-index as needed */
`;
const DropdownDeleteButton = styled.button`
  display: flex;
  padding: 7px 12px;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
  align-self: stretch;
  background: var(--white);
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  &:hover {
    background: var(--gray10);
    color: var(--Linkbrary-primary-color, #6d6afe);
  }
`;
const DropdownAddButton = styled.button`
  display: flex;
  padding: 7px 12px;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
  align-self: stretch;
  background: var(--white);
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  &:hover {
    background: var(--gray10);
    color: var(--Linkbrary-primary-color, #6d6afe);
  }
`;

const Bookmark = styled.img`
  width: 34px;
  height: 34px;
  flex-shrink: 0;
  position: absolute;
  top: 1.2rem;
  right: 1.2rem;
`;

export function LinksComponent({ links }) {
  const [dropdownOpen, setDropdownOpen] = useState({});
  const [bookmark, setBookmark] = useState({});
  const dropdownRef = useRef(null);
  const [deleteModalOpen, setDeleteModalOpen] = useState({});
  const [linkAddModalOpen, setLinkAddModalOpen] = useState({});

  const toggleDropdown = (linkId) => {
    setDropdownOpen((prevState) => ({
      ...prevState,
      [linkId]: !prevState[linkId] || false,
    }));
  };
  const toggleBookmark = (e, linkId) => {
    e.preventDefault();
    setBookmark((prevState) => ({
      ...prevState,
      [linkId]: !prevState[linkId] || false,
    }));
  };
  const handleDeleteModal = (linkId) => {
    setDeleteModalOpen((prevState) => ({
      ...prevState,
      [linkId]: !prevState[linkId] || false,
    }));
  };
  const handleLinkAddModal = (linkId) => {
    setLinkAddModalOpen((prevState) => ({
      ...prevState,
      [linkId]: !prevState[linkId] || false,
    }));
  };

  const alt = `${links?.title}의 로고`;

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen({});
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <Card>
      {links.map((link) => (
        <Cards key={link.id}>
          <Link to={link.url}>
            <CardContainer>
              {link?.imageSource ? (
                <CardImage src={link.imageSource} alt={alt} />
              ) : (
                <CardImage src={nodata} alt="프로필 이미지" />
              )}
              <Bookmark
                src={bookmark[link.id] ? starOn : star}
                alt="별"
                onClick={(e) => toggleBookmark(e, link.id)}
              />
            </CardContainer>
          </Link>
          <CardTextField>
            <ElapsedTime>
              <span>{getElapsedTime(link)}</span>
              <KebabButton onClick={() => toggleDropdown(link.id)}>
                <Kebab src={kebab} alt="목록" />
              </KebabButton>
            </ElapsedTime>
            {dropdownOpen[link.id] && (
              <DropDown ref={dropdownRef}>
                <DropdownDeleteButton
                  onClick={() => handleDeleteModal(link.id)}
                >
                  삭제 하기
                </DropdownDeleteButton>
                <DropdownAddButton onClick={() => handleLinkAddModal(link.id)}>
                  추가 하기
                </DropdownAddButton>
              </DropDown>
            )}
            {deleteModalOpen[link.id] && (
              <LinkDeleteModal
                setDeleteModalOpen={setDeleteModalOpen}
                LinkUrl={link.url}
              />
            )}
            {linkAddModalOpen[link.id] && (
              <LinkAddModal
                setLinkAddModalOpen={setLinkAddModalOpen}
                LinkUrl={link.url}
              />
            )}
            <p>{link.description}</p>
            <CreatedAt>{formatDate(link.createdAt)}</CreatedAt>
          </CardTextField>
        </Cards>
      ))}
    </Card>
  );
}
