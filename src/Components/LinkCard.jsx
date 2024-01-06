import { LinksComponent } from "./LinksComponent";

function LinkCard({ linkData }) {
  const { links } = linkData;
  return <LinksComponent links={links} />;
}

export { LinkCard };
