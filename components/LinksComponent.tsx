import nodata from "@/public/nonedata.svg";
import kebab from "@/public/kebab.svg";
import star from "@/public/star.svg";
import starOn from "@/public/starOn.svg";
import styled from "styled-components";
import mediaQuery from "@/lib/MediaQuery";
import { MouseEvent, useEffect, useRef, useState } from "react";
import getElapsedTime from "@/lib/getElapsedTime";
import formatDate from "@/lib/formatDate";
import LinkDeleteModal from "./modal/LinkDeleteModal";
import LinkAddModal from "./modal/LinkAddModal";
import { CardData } from "@/type/type";
import Link from "next/link";
import Image from "next/image";

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
const CardImage = styled(Image)`
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
  position: relative;
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
  }
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
  &:hover {
    background: var(--gray10);
    color: var(--Linkbrary-primary-color, #6d6afe);
  }
`;

const Bookmark = styled(Image)`
  width: 34px;
  height: 34px;
  flex-shrink: 0;
  position: absolute;
  top: 1.2rem;
  right: 1.2rem;
`;

interface Props {
  links: CardData[];
}
interface ModalState {
  isOpen: boolean;
  url?: string;
}

export function LinksComponent({ links }: Props) {
  const [dropdownOpen, setDropdownOpen] = useState<Record<number, boolean>>({});
  const [bookmark, setBookmark] = useState<Record<number, boolean>>({});
  const [deleteModal, setDeleteModal] = useState<ModalState>({ isOpen: false });
  const [addModal, setAddModal] = useState<ModalState>({ isOpen: false });
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const toggleDropdown = (linkId: number) => {
    setDropdownOpen((prevState: Record<number, boolean>) => ({
      ...prevState,
      [linkId]: !prevState[linkId] || false,
    }));
  };
  const toggleBookmark = (e: MouseEvent, linkId: number) => {
    e.preventDefault();
    setBookmark((prevState: Record<number, boolean>) => ({
      ...prevState,
      [linkId]: !prevState[linkId] || false,
    }));
  };
  const handleDeleteModal = (linkUrl: string) => {
    setDeleteModal({ isOpen: !deleteModal.isOpen, url: linkUrl });
  };

  const handleLinkAddModal = (linkUrl: string) => {
    setAddModal({ isOpen: !addModal.isOpen, url: linkUrl });
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setDropdownOpen({});
      }
    };

    document.addEventListener("mousedown", handleClickOutside as any);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside as any);
    };
  }, []);

  return (
    <Card>
      {links.map((link) => (
        <Cards key={link.id}>
          <Link href={link.url}>
            <CardContainer>
              {link?.imageSource ? (
                <CardImage
                  src={link.imageSource}
                  alt={`${link.title}의 로고`}
                  fill
                />
              ) : (
                <CardImage src={nodata} alt="프로필 이미지" fill />
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
                <Image src={kebab} alt="목록" width={21} height={17} />
              </KebabButton>
            </ElapsedTime>
            {dropdownOpen[link.id] && (
              <DropDown ref={dropdownRef}>
                <DropdownDeleteButton
                  onClick={() => handleDeleteModal(link.url)}
                >
                  삭제 하기
                </DropdownDeleteButton>
                <DropdownAddButton onClick={() => handleLinkAddModal(link.url)}>
                  추가 하기
                </DropdownAddButton>
              </DropDown>
            )}
            <p>{link.description}</p>
            <CreatedAt>{formatDate(link.createdAt)}</CreatedAt>
          </CardTextField>
        </Cards>
      ))}
      {deleteModal.isOpen && (
        <LinkDeleteModal
          setDeleteModal={setDeleteModal}
          linkUrl={deleteModal.url}
        />
      )}
      {addModal.isOpen && (
        <LinkAddModal setAddModal={setAddModal} linkUrl={addModal.url} />
      )}
    </Card>
  );
}
