import { useContext } from "react";
import { LinksComponent } from "./LinksComponent";
import { CardDataContext } from "./context/CardDataContext";

export function FolderCard() {
  const linkData = useContext(CardDataContext);
  const transFormData = linkData.data.map((item) => {
    if (item.created_at) {
      item.createdAt = item.created_at;
      delete item.created_at;
    }
    if (item.image_source) {
      item.imageSource = item.image_source;
      delete item.image_source;
    }
    return item;
  });
  return transFormData.length && <LinksComponent links={transFormData} />;
}
