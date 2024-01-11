import { useContext, useEffect, useState } from "react";
import { getCardData } from "./Api";
import { FolderCard } from "./FolderCard";
import ButtonIdContext from "./context/ButtonIdContext";
import { CardDataProvider } from "./context/CardDataContext";
import { CardData } from "../Pages/Shared/type";

function Card() {
  const [cardData, setCardData] = useState<{ data: CardData[] }>({
    data: [],
  });
  const { selectedButtonId }: { selectedButtonId: number | null } =
    useContext(ButtonIdContext);

  const dataLoad = async (id: number | null) => {
    try {
      const result = await getCardData(id);
      setCardData(result);
    } catch (error: any) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    dataLoad(selectedButtonId);
  }, [selectedButtonId]);

  return (
    <div>
      <CardDataProvider value={cardData}>
        {cardData && <FolderCard />}
      </CardDataProvider>
    </div>
  );
}
export default Card;
