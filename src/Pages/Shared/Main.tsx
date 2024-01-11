import { useEffect, useState } from "react";
import { getFolderData } from "../../Components/Api";
import { LinkCard } from "../../Components/LinkCard";
import { Profile } from "../../Components/Profile";
import SearchBar from "../../Components/SearchBar";
import { SampleFolderData, SampleLinkData } from "./type";

function Main() {
  const [folderData, setFolderData] = useState<SampleFolderData>();

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
    } catch (error: any) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    dataLoad();
  }, []);

  return (
    <main>
      <div>{folderData && <Profile folderData={folderData} />}</div>
      <SearchBar />
      {folderData && <LinkCard linkData={folderData} />}
    </main>
  );
}
export default Main;
