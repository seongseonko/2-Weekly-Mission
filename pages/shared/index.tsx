import { useEffect, useState } from "react";
import { LinkCard } from "@/components/LinkCard";
import { Profile } from "@/components/Profile";
import SearchBar from "@/components/SearchBar";
import { CardData, SampleFolderData, SampleLinkData } from "@/type/type";
import { getFolderData } from "@/components/Api/userApi";
import Nav from "@/components/Header/Nav";
import Footer from "@/components/Footer/Footer";
import AuthService from "@/components/Api/AuthService";
import { useRouter } from "next/router";

export default function Shared() {
  const router = useRouter();
  const isLoggedIn = AuthService.isLoggedIn();
  const [folderData, setFolderData] = useState<SampleFolderData>();
  const [linkData, setLinkData] = useState<{ data: CardData[] }>({
    data: [],
  });
  const [searchedData, setSearchedData] = useState<CardData[]>([]);
  const dataLoad = async () => {
    try {
      let result = await getFolderData();
      const sortedItem = {
        ...result.folder,
        links: result.folder.links.sort(
          (a: SampleLinkData, b: SampleLinkData) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        ),
      };
      setFolderData(sortedItem);
      const folderData = {
        data: [...sortedItem.links],
      };
      setLinkData(folderData);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/signin");
    }
    dataLoad();
  }, [isLoggedIn, router]);

  return (
    <>
      <Nav />
      <main>
        <div>{folderData && <Profile folderData={folderData} />}</div>
        <SearchBar linkData={linkData} setSearchedData={setSearchedData} />
        {folderData && <LinkCard linkData={searchedData} />}
      </main>
      <Footer />
    </>
  );
}
