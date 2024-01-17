import { CardData } from "@/type/type";
import { LinksComponent } from "./LinksComponent";

function LinkCard({ linkData }: { linkData: CardData[] }) {
  return <LinksComponent links={linkData} />;
}

export { LinkCard };
