import { LinksComponent } from "./LinksComponent";
import { SampleFolderData, SampleLinkData } from "../Pages/Shared/type";

interface Props {
  linkData: SampleFolderData;
}

function LinkCard({ linkData }: Props) {
  console.log(linkData);
  const { links }: { links: SampleLinkData[] } = linkData;
  return <LinksComponent links={links} />;
}

export { LinkCard };
