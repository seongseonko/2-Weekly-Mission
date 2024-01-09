import { useContext, useEffect, useState } from "react";
import { getCardData } from "./Api";
import { FolderCard } from "./FolderCard";
import ButtonIdContext from "./context/ButtonIdContext";
import { CardDataProvider } from "./context/CardDataContext";

function Card() {
  const [cardData, setCardData] = useState(null);
  const { selectedButtonId } = useContext(ButtonIdContext);

  const dataLoad = async (selectedButtonId) => {
    try {
      let result = await getCardData(selectedButtonId);
      result.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      setCardData(result);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    dataLoad(selectedButtonId);
  }, [selectedButtonId]);

  return (
    <div>
      <CardDataProvider value={cardData}>
        {cardData && <FolderCard linkData={cardData.data} />}
      </CardDataProvider>
    </div>
  );
}
export default Card;
