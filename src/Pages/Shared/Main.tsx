import { useEffect, useState } from "react";
import { getFolderData } from "../../Components/Api";
import { LinkCard } from "../../Components/LinkCard";
import { Profile } from "../../Components/Profile";
import SearchBar from "../../Components/SearchBar";
import { CardData, SampleFolderData, SampleLinkData } from "./type";

function Main() {
  const [folderData, setFolderData] = useState<SampleFolderData>();
  const [linkData, setLinkData] = useState<{ data: CardData[] }>({
    data: [],
  });
  const [searchedData, setSearchedData] = useState<CardData[]>([]);
  const dataLoad = async () => {
    try {
      let result = await getFolderData();
      console.log(result);
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
      throw Error(``);
    }
  };

  useEffect(() => {
    dataLoad();
  }, []);

  return (
    <main>
      <div>{folderData && <Profile folderData={folderData} />}</div>
      <SearchBar linkData={linkData} setSearchedData={setSearchedData} />
      {folderData && <LinkCard linkData={searchedData} />}
    </main>
  );
}
export default Main;
