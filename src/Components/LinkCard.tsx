import { CardData } from "../Pages/Shared/type";
import { LinksComponent } from "./LinksComponent";

function LinkCard({ linkData }: { linkData: CardData[] }) {
  return <LinksComponent links={linkData} />;
}

export { LinkCard };
