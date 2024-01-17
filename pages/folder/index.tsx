import AddLink from "@/components/AddLink";
import Buttons from "@/components/Buttons";
import Card from "@/components/Card";
import ListEdit from "@/components/ListEdit";
import SearchBar from "@/components/SearchBar";
import Footer from "@/components/Footer/Footer";
import { useEffect, useRef, useState } from "react";
import Nav from "@/components/Header/Nav";
import styled from "styled-components";
import { ButtonIdContextProvider } from "@/components/context/ButtonIdContext";
import { CardData } from "@/type/type";
import AuthService from "@/components/Api/AuthService";
import { useRouter } from "next/router";

const Main = styled.main`
  position: relative;
  min-height: calc(100vh - 16rem);
`;

export default function Folder() {
  const isLoggedIn = AuthService.isLoggedIn();
  const router = useRouter();
  const [selectedButtonId, setSelectedButtonId] = useState<number | null>(null);
  const [selectedButtonTitle, setSelectedButtonTitle] = useState<string>("");
  const [linkData, setLinkData] = useState<{ data: CardData[] }>({
    data: [],
  });
  const [searchedData, setSearchedData] = useState<CardData[]>([]);
  const [showAddLink, setShowAddLink] = useState<boolean>(false);
  const addLinkRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const navObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowAddLink(false);
        }
      },
      { threshold: 0 }
    );
    const footerObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowAddLink(false);
          addLinkObserver.disconnect();
        }
        if (!entry.isIntersecting && addLinkRef.current) {
          addLinkObserver.observe(addLinkRef.current);
        }
      },
      { threshold: 0 }
    );
    const addLinkObserver = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          setShowAddLink(true);
        }
      },
      { threshold: 0 }
    );
    if (addLinkRef.current) {
      addLinkObserver.observe(addLinkRef.current);
    }
    if (navRef.current) {
      navObserver.observe(navRef.current);
    }
    if (footerRef.current) {
      footerObserver.observe(footerRef.current);
    }
    return () => {
      addLinkObserver.disconnect();
      navObserver.disconnect();
      footerObserver.disconnect();
    };
  }, []);
  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/signin");
    }
  }, [isLoggedIn, router]);
  return (
    <>
      <Nav sticky="off" forwardRef={navRef} />
      <Main>
        <AddLink forwardRef={addLinkRef} showAddLink={showAddLink} />
        <SearchBar linkData={linkData} setSearchedData={setSearchedData} />
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
          <Card setLinkData={setLinkData} searchedData={searchedData} />
        </ButtonIdContextProvider>
      </Main>
      <Footer forwardRef={footerRef} />
    </>
  );
}
